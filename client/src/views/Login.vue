<template>
  <div class="page">
    <section class="login-container">
      <div class="content">
        <h1 class="title">
          היי,  טוב לראות אותך
        </h1>
        <login-form @login-clicked="onLogin" />
      </div>
    </section>
    <section class="illustration">
       <img src="@/assets/illustration.svg" alt="illustration" />
    </section>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import apiService from '@/services/api'
  import LoginForm from '@/components/LoginForm'

  export default {
    name: 'Login',
    components: {
      LoginForm
    },
    methods: {
      ...mapMutations([
        'setUser'
      ]),
      async onLogin({ email, password }) {
        const user = await apiService.login(email, password)
        this.setUser(user)
        this.$router.push('/welcome')
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '@/styles/index';

  .page {
    height: 100%;
    display: flex;
    position: relative;

    .login-container {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 20;

      .content {
        padding-right: 10%;
        display: flex;
        flex-direction: column;

        .title {
          margin-bottom: $spacer * 2;
        }
      }
    }

    .illustration {
      background: $light-pink;
      flex: 1;
      display: flex;
      align-content: center;

      @include tablet-and-below() {
        @include background-image-transparent();
      }
    }
  }
</style>