<template>
  <div>
    <h3 class="page-header">Your Countdowns</h3>
    <ul v-for="countdown in countdowns">
      <li>
        {{ countdown.name }} - {{ countdown.date }}
        <router-link :to="{name: 'countdownView', params: { id: countdown.id }}">View</router-link> -
        <router-link :to="{name: 'updateCountdown', params: {id: countdown.id}}">Edit</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex'
  export default{
    name: 'countdown-list',
    computed: {
      ...mapGetters(['countdowns'])
    },
    methods: {
      ...mapActions(['getCountdowns'])
    }
  }
</script>
