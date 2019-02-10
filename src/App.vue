<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <AppButton>Button</AppButton>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton.vue';
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
  components: {
    AppButton,
    HelloWorld,
  },
};
</script>

<style lang="scss">
@import "~@/scss/main.scss";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
