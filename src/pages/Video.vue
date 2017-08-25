<template>
  <div class="container" :style="bg">
  <div class="header">
    <mu-appbar :title="video.title">
      <mu-icon-button icon="keyboard_arrow_left" to="/" slot="left" />
      <mu-icon-menu icon="more_vert" slot="right">
        <mu-menu-item title="视频区" href="#video"/>
        <mu-menu-item title="相关视频" href="#hot"/>
        <mu-menu-item title="评论区" href="#comment"/>
      </mu-icon-menu>
    </mu-appbar>
  </div>
  <div class="video" :style="videoBg" id="video">
    <video :src="video.playUrl" width="100%" autoplay controls :played="video.coverForFeed"></video>
  </div>
  <div class="author">
    <img v-if="video.author.icon" :src="video.author.icon" alt="icon">
    <span class="author-txt">{{video.author.description}}</span>
  </div>
   <div class="category">{{video.category}}/{{video.duration}}'s</div>
   <div class="description">
     <h2>视频介绍</h2>
     <p>{{video.description}}</p>
   </div>
    <div class="hot" id="hot">
      <router-link class="video-list" :to="{path:'/video',query:{id:item.id}}" tag="div" v-for="(item, index) in hotVideo" :key="index">
        <img :src="item.coverForFeed" alt="item">
        <div class="title">
          <span>{{item.title}}</span>
        </div>
      </router-link>
    </div>
    <div class="comment" id="comment">
        <router-link tag="div" to="#" v-for="(item,index) in comment" :key="index">
          <div class="user">
            <img :src="item.user.avatar" alt=""><span>{{item.user.nickname}}</span>
          </div>
          <p>{{item.message}}</p>
        </router-link>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        video: {},
        bg: {},
        id: this.$route.query.id,
        videoBg: {},
        hotVideo: {},
        comment: {}
      }
    },
    created () {
      this.getData()
    },
    mounted () {
      this.getHot()
      this.getComment()
      console.log(this.$route)
    },
    watch: {
      '$route.query.id': 'change'
    },
    methods: {
      change () {
        this.video = {}
        this.bg = {}
        this.id = this.$route.query.id
        this.videoBg = {}
        this.hotVideo = {}
        this.comment = {}
        this.getData()
        this.getHot()
        this.getComment()
      },
      getData () {
        axios.get('http://baobab.kaiyanapp.com/api/v1/video/' + this.id).then((response) => {
          this.video = response.data
          console.log(this.id)
          this.bg = {
            backgroundImage: 'url(' + this.video.coverBlurred + ')',
            backgroundSize: '100% 100%'
          }
          this.videoBg = {
            backgroundImage: 'url(' + this.video.coverForFeed + ')',
            backgroundSize: '100% 100%'
          }
        })
      },
      getHot () {
        axios.get('http://baobab.kaiyanapp.com/api/v1/video/related/' + this.id + '?num=10').then((response) => {
          let res = response.data.videoList
          console.log(response.data.videoList)
          this.hotVideo = res
        })
      },
      getComment () {
        axios.get('http://baobab.kaiyanapp.com/api/v1/replies/video?id=' + this.id + '&num=5').then((response) => {
          let res = response.data.replyList
          console.log(response.data.replyList)
          this.comment = res
        })
      }
    }
  }
</script>
<style scoped>
  .header{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  .container{
    color: #fff;
    height: 100%
  }
  .author{
    height: 4rem;
    padding: 0.5rem 1rem;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
  }
  .video-list{
    padding: 1rem 0;
  }
  .author-txt{
    display: inline-block;
    width: 80%;
    line-height: 3rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .video{
    line-height: 0;
    /*position: fixed;*/
    padding-top: 3.5rem;
    top: 3.5rem;
    left: 0;
    right: 0;
  }
  .author img{
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }
  .hot{
    line-height: 0;
    margin-top: 1rem
  }
  .hot img{
    width: 45%;
    vertical-align: middle;
  }
  .hot .title{
    display: inline-block;
    width: 50%;
    height: 100%;
    padding-left: 1rem;
    box-sizing: border-box;
  }
  .title h3{
    width: 100%;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .author span{
    font-size: 15px;
    padding-left: 1rem
  }
  .description{
    padding: 0 1rem;
    border-bottom: 1px solid #fff;
  }
  .description p{
    font-size: 18px;
    text-indent: 2em;
  }
  .category{
    padding: 0.5rem 1rem;
    border-left: 5px solid #fff;
    margin: 10px 0
  }
  .comment{
    border-top: 1px solid #fff;
    padding-bottom: 2rem;
  }
  .comment .user{
    height: 4rem;
    padding: 0.5rem 1rem;
  }
  .comment .user span {
    padding-left: 1rem;
  }
  .comment .user img{
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    vertical-align: middle;
  }
  .comment p{
    padding: 0 1rem 0 4rem
  }
</style>
