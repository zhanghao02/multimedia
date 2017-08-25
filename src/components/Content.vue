<template>
  <div class="container">
  <mu-list>
    <h1>热门推荐</h1>
    <ul>
      <li v-for="(item,index) in hotData.video" :key="index">
        <router-link :to="{path:'/video',query:{id:item.id}}" tag="div">
          <div class="author">
            <!--<img :src="item.author.icon" alt="icon">-->
            <b>{{item.title}}</b>
          </div>
          <img :src="item.cover.feed" alt="">
        </router-link>
      </li>
    </ul>
    <div class="circular">
      <mu-circular-progress v-if="circular" :size="40"/>
    </div>
  </mu-list>
</div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'Content',
    data () {
      return {
        hotData: {
          video: []
        },
        circular: true
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        axios.get('/api').then((response) => {
          let res = response.data.itemList
          res.forEach((item) => {
            if (item.type === 'video') {
              this.hotData.video.push(item.data)
            }
            this.circular = false
          })
          console.log(response)
        }).catch((er) => {
          console.log(er)
        })
      }
    }
  }
</script>
<style scoped>
  .container{
    padding: 4rem 0;
    box-sizing: border-box;
  }
  .author{
    width: 100%;
    height: 4rem;
    padding: 0.5rem 1rem;
  }
  .author img{
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    vertical-align: middle;
  }
  .author b{
    font-size: 1rem;
    line-height: 3rem;
  }
  ul{
    list-style: none;
    padding: 0;
  }
  img{
    width: 100%;
  }
  .circular{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 3rem;
    height: 3rem;
    margin: auto auto;
  }
  h1{
    margin: 1rem 0;
    text-align: center;
  }
</style>
