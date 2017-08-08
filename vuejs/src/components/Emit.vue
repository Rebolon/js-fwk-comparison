<template>
  <span>fill something here <input v-bind:value='value' v-on:input='change($event.target.value)'/> </span>
</template>

<script>
export default {
  name: 'emit',
  data: function () {
    return {
      _valueToEmit: 'toto'
    }
  },

  computed: {
    value: {
      get: function () {
        return this._valueToEmit
      },
      set: function (value) {
        this._valueToEmit = value
        this.$emit('value', value)
      }
    }
  },

  methods: {
    change: function (newValue) {
      this.value = newValue
    }
  },

  created: function () {
    console.info('%c emit content created', 'color: brown')
  },

  mounted: function () {
    console.info('%c emit content mounted', 'color: brown')
  },

  updated: function () {
    console.info('%c emit content updated', 'color: brown')
  }
}
</script>

<style scoped>
  span { color: brown }
</style>
