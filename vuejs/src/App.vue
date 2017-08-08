<template>
  <ul>
    <li>Main component
      <ul>
        <li>Hello component : <hello name="name"></hello></li>
        <li>Counter component : <counter></counter></li>
        <li>Alone component : <alone></alone></li>
        <li>Subscribe & Emit components :
          <ol>
            <subscribe></subscribe>
          </ol>
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
  mounted: function () {
    console.info('%c app content mounted', 'color: black')
  },
  updated: function () {
    console.info('%c app content updated', 'color: black')
  }
}
</script>

<style>
p {
  font-family: Lato;
}
</style>
