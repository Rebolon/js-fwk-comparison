<template>
  <span>I'm alone</span>
</template>

<script>
export default {
  name: 'alone',

  created: function () {
    console.info('%c alone content created', 'color: blue')
  },

  mounted: function () {
    console.info('%c alone content mounted', 'color: blue')
  },

  updated: function () {
    console.info('%c alone content updated', 'color: blue')
  }
}
</script>

<style scoped>
  span { color: blue }
</style>
