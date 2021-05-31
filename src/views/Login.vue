<template>
  <div class="page">
    <section class="login-container">
      <div class="content">
        <h1 class="title">
          היי,  טוב לראות אותך
        </h1>
        <login-form />
      </div>
    </section>
    <section class="illustration">
       <img src="@/assets/illustration.svg" alt="illustration" />
    </section>
  </div>
</template>

<script>
  // Simple login flow:
  // To authenticate a user, use /account/login endpoint via POST request
  // Endpoint accepts 2 fields, “email” and “password”. (Use the same email & password you registered with)
  import LoginForm from '@/components/LoginForm'

  export default {
    name: 'Login',
    components: {
      LoginForm
    }
  }
</script>

<style scoped lang="scss">
  @import '@/styles/index';

  .page {
    height: 100%;
    display: flex;

    .login-container {
      background: $white;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;

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
    }
  }
</style>