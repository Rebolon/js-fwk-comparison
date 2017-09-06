<template>
  <ul>
    <li>Main component
      <ul>
        <li>Hello component : <hello v-bind:name=name></hello></li>
        <li>Alone component : <alone></alone></li>
        <li>Counter component : <counter></counter></li>
        <li>Subscribe & Emit components :
            <subscribe></subscribe>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import Hello from './components/Hello'
import Counter from './components/Counter'
import Alone from './components/Alone'
import Subscribe from './components/Subscribe'

export default {
  name: 'my-app',
  components: {
    Hello, Counter, Alone, Subscribe
  },
  data: function () {
    return {
      name: 'VueJS 2'
    }
  },
  mounted: function () {
    console.info('%c app content mounted', 'color: black')
  },
  updated: function () {
    console.info('%c app content updated', 'color: black')
  }
}
</script>

<style>
</style>
