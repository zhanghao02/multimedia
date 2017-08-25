<template>
  <div class="header">
    <mu-appbar title="影音书画">
      <mu-icon-button icon="menu" slot="left" @click="toggle(true)"/>
      <mu-icon-menu icon="more_vert" slot="right">
        <mu-menu-item title="菜单 1"/>
        <mu-menu-item title="菜单 2"/>
        <mu-menu-item title="菜单 3"/>
        <mu-menu-item title="菜单 4"/>
        <mu-menu-item title="菜单 5"/>
      </mu-icon-menu>
    </mu-appbar>
    <mu-drawer :open="open" :docked="docked" @close="toggle()">
      <mu-list @itemClick="docked ? '' : toggle()">
        <mu-list-item title="Menu Item 1"/>
        <mu-list-item title="Menu Item 2"/>
        <mu-list-item title="Menu Item 3"/>
        <mu-list-item v-if="docked" @click.native="open = false" title="Close"/>
      </mu-list>
    </mu-drawer>
  </div>
</template>
<script>
  export default {
    name: 'Header',
    data () {
      return {
        open: false,
        docked: true
      }
    },
    methods: {
      toggle (flag) {
        this.open = !this.open
        this.docked = !flag
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
    z-index: 200000000000000000000000;
  }
</style>
