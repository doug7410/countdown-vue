<template>
  <div>
    <top-menu></top-menu>
    <div class="container">
      <router-link
              class="btn btn-sm btn-default"
              :to="{name: 'createCountdown'}">
        + Create Countdown
      </router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import TopMenu from '../Nav/TopMenu'

  export default{
    name: 'dashboard',
    components: {
      TopMenu
    }
  }
</script>
