<template>
  <span>{{counter}}</span>
</template>

<script>
export default {
  name: 'counter',
  data: function () {
    return {
      counter: 0
    }
  },

  created: function () {
    console.log('%c counter content created', 'color: pink')
    setInterval(() => this.counter++, 2000)
  },
  mounted: function () {
    console.log('%c counter content mounted', 'color: pink')
  },
  updated: function () {
    console.log('%c counter content updated', 'color: pink')
  }
}
</script>

<style scoped>
</style>
