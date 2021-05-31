<template>
  <router-view/>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="scss">
  @import '@/styles/index';

  * {
    margin: 0;
    padding: 0;
  }

  #app {
    width: 100vw;
    height: 100vh;
    font-family: almoni-neue-dl;
    background: $white;
    color: $text-color;
    direction: rtl;
  }

  h1 {
    font-size: $font-size-xxxl;
    letter-spacing: 0;
  }
</style>
