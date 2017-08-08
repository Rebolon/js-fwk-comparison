<template>
  <ol>
    <li><span>display field value from emit component <cite v-if="value">: "{{value}}"</cite></span></li>
    <li><emit v-on:value='setValue($event)'></emit></li>
  </ol>
</template>

<script>
import Vue from 'vue'
import Emit from './Emit'
Vue.component('emit', Emit)

export default {
  name: 'subscribe',
  components: [
    Emit
  ],
  data: function () {
    return {
      value: ''
    }
  },

  methods: {
    setValue: function (value) {
      this.value = value
    }
  },

  created: function () {
    console.info('%c subscribe content created', 'color: blueviolet')
  },

  mounted: function () {
    console.info('%c subscribe content mounted', 'color: blueviolet')
  },

  updated: function () {
    console.info('%c subscribe content updated', 'color: blueviolet')
  }
}
</script>

<style scoped>
  span { color: blueviolet }
</style>
