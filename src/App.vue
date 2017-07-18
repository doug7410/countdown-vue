<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'app',
    computed: {
      ...mapGetters(['accessToken'])
    }
  }
</script>

<style lang="scss">
  @import "assets/styles/main";
</style>
