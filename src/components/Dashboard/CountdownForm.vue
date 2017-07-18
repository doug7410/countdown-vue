<template>
  <div>
    <div class="page-header">
      <h3>Create a new Countdown</h3>
    </div>
    <form class="form-inline">
      <div class="form-group">
        <label for="countdown-name">Countdown Name</label>
        <input
                v-model="name"
                type="text"
                class="form-control"
                id="countdown-name"
                placeholder="Iceland">
      </div>
      <div class="form-group">
        <label for="date">Date</label>
        <input
                v-model="date"
                type="email"
                class="form-control"
                id="date">
      </div>
      <button type="submit" class="btn btn-default" @click.prevent="create">Create</button>
    </form>
  </div>
</template>

<script>
  import $ from 'jquery'
  import {mapActions, mapGetters} from 'vuex'

  export default{
    name: 'countdown-form',
    created () {
      $(document).ready(() => {
        $('#date').datepicker().on(
          'changeDate', () => {
            this.date = $('#date').val()
          }
        )
      })
    },
    data () {
      return {
        name: null,
        date: null
      }
    },
    computed: {
      ...mapGetters(['currentCountdown'])
    },
    methods: {
      ...mapActions(['createCountdown']),
      create () {
        this.createCountdown({name: this.name, date: this.date}).then(() => {
          this.$router.push({
            name: 'updateCountdown',
            params: { id: this.currentCountdown.id }
          })
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.css";
</style>
