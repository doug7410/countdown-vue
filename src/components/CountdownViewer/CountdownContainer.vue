<template>
  <div class="countdown-wrapper" :style="{backgroundImage: currentImage}">
    <div class="countdown-menu">
      <router-link :to="{name: 'countdownList'}">Countdown List</router-link> -
      <router-link :to="{name: 'updateCountdown', params: {id: currentCountdown.id}}">Edit</router-link>
    </div>
    <div class="countdown-info">
      <h1>{{ currentCountdown.name }}</h1>
      <h3>{{ currentCountdown.date | formatDate }}</h3>
    </div>
    <div class="clock-wrapper">
      <clock :trip-date="currentCountdown.date"></clock>
      <div class="hidden" v-for="image in currentCountdown.images">
        <img :src="image.path">
      </div>
    </div>
  </div>
</template>
<script>
  import Clock from './Clock'
  import { mapActions, mapGetters } from 'vuex'
  import Vue from 'vue'

  export default{
    name: 'countdown-wrapper',
    data () {
      return {
        currentImageNumber: 0,
        currentImage: null,
        imageRunner: null
      }
    },
    created () {
      this.getCountdown(this.$route.params.id)
      this.currentImage = this.getImageUrl(this.currentCountdown.images)
      this.runImages()
    },
    destroyed () {
      clearInterval(this.imageRunner)
    },
    computed: {
      ...mapGetters(['currentCountdown'])
    },
    methods: {
      ...mapActions(['getCountdown']),
      runImages () {
        this.imageRunner = setInterval(() => {
          if (this.currentImageNumber === this.currentCountdown.images.length) {
            this.currentImageNumber = 0
          }
          this.currentImage = this.getImageUrl(this.currentCountdown.images)
          this.currentImageNumber++
        }, 6000)
      },
      getImageUrl (images) {
        return 'url(' + images[this.currentImageNumber].path + ')'
      }
    },

    components: {
      Clock
    }
  }

  Vue.filter('formatDate', (dateTime) => {
    const date = new Date(dateTime)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    return `${month}/${day}/${year}`
  })
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Dosis|Josefin+Sans|Nunito|Quicksand|Yanone+Kaffeesatz');

  .countdown-info {
    font-family: 'Josefin Sans', sans-serif;
    text-align: center;
    color: #2b2926;
    text-shadow: 2px 2px 2px #eae8d1
  }

  .countdown-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
  },

  .clock-wrapper {
    width: 100%;
  }
</style>
