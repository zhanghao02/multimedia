<template>
  <div class="nav">
    <mu-tabs :value="activeTab" @change="handleTabChange" class="tab">
      <mu-tab value="tab1" title="Nav One"/>
      <mu-tab value="tab2" title="Nav TwO"/>
      <mu-tab value="tab3" title="Nav Three"/>
    </mu-tabs>
  </div>
</template>
<script>
  export default {
    name: 'Nav',
    data () {
      return {
        activeTab: 'all'
      }
    },
    methods: {
      handleTabChange (val) {
        this.activeTab = val
      }
    }
  }
</script>
<style>
</style>
