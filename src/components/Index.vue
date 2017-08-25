<template>
  <div>
    <app-header></app-header>
    <app-content></app-content>
  </div>
</template>
<script>
  import AppHeader from '../components/Header.vue'
  import AppContent from '../components/Content.vue'
  export default {
    name: 'Index',
    components: {
      AppHeader,
      AppContent
    }
  }
</script>
<style>
</style>
