<template>
  <div class="footer">
    <mu-paper>
    <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
      <mu-bottom-nav-item value="video" title="Videos" to="/" icon="ondemand_video"/>
      <mu-bottom-nav-item value="music" title="Music" to="/music" icon="music_note"/>
      <mu-bottom-nav-item value="books" title="Books" to="/book" icon="books"/>
      <mu-bottom-nav-item value="pictures" title="Pictures" to="picture" icon="photo"/>
    </mu-bottom-nav>
  </mu-paper>
  </div>
</template>
<script>
  export default {
    naem: 'Footer',
    data () {
      return {
        bottomNav: 'movies',
        bottomNavColor: 'movies'
      }
    },
    methods: {
      handleChange (val) {
        this.bottomNav = val
      }
    }
  }
</script>
<style scoped>
  .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
