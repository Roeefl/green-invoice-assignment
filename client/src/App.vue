<template>
  <main class="main">
    <div class="logo">
      <img src="@/assets/logo.svg" alt="app-logo" />
    </div>
    <router-view/>
    <logout-button v-if="$route.name !== 'Login'" />
  </main>
</template>

<script>
  import LogoutButton from '@/components/LogoutButton'

  export default {
    name: 'App',
    components: {
      LogoutButton
    }
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

  ul {
    list-style: none;
    padding-inline-start: 0;
  }

  .main {
    width: 100%;
    height: 100%;
    position: relative;

    .logo {
      position: absolute;
      top: 0;
      right: 0;
      height: 34px;
      width: 221px;
      padding: $spacer;
    }
  }
</style>
