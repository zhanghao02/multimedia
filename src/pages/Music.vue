<template>
  <div class="container">
    <div class="header">
      <mu-appbar title="音乐">
        <mu-icon-button icon="keyboard_arrow_left" to="/" slot="left" />
        <mu-icon-menu icon="more_vert" slot="right">
          <mu-menu-item title="音乐" href="#"/>
          <mu-menu-item title="相关音乐" href="#"/>
          <mu-menu-item title="评论区" href="#"/>
        </mu-icon-menu>
      </mu-appbar>
    </div>
    <h1>音乐</h1>
  </div>
</template>
<script>
  export default {
    components: {
    }
  }
</script>
<style>
</style>
