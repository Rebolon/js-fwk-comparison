<template>
  <span>Hello {{name}}!</span>
</template>

<script>
export default {
  name: 'hello',
  props: ['name'],

  created: function () {
    console.info('%c hello content created', 'color: orange')
  },

  mounted: function () {
    console.info('%c hello content mounted', 'color: orange')
  },

  updated: function () {
    console.info('%c hello content updated', 'color: orange')
  }
}
</script>

<style scoped>
  span { color: orange }
</style>
