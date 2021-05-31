<template>
  <div class="page">
    <section class="login-container">
      <div class="content">
        <h1 class="title">
          היי,  טוב לראות אותך
        </h1>
        <h3>
          Your email is: {{ email }}
          Your password is: {{ password }}
        </h3>
        <form class="form">
          <Input :value="email" placeholder="מייל" label="כתובת המייל איתה נרשמת לחשבונית ירוקה" />
          <Input :value="password" placeholder="מייל" label="כתובת המייל איתה נרשמת לחשבונית ירוקה" />
        </form>
      </div>
    </section>
    <section class="image-container">
       <img src="@/assets/green_login_page.svg" alt="login page logo" />
    </section>
  </div>
</template>

<script>
  // No need to implement “Google Sign In” and “Forgot my password”, only simple login flow.
  // In order to authenticate a user, you should use /account/login endpoint via POST request.
  // This endpoint accepts 2 fields, “email” and “password”. (Use the same email & password you have registered with)
  import Input from '@/components/Input';

  export default {
    name: 'Login',
    data: () => ({
      email: '',
      password: ''
    }),
    components: {
      Input
    },
  }
</script>

<style lang="scss">
  @import '@/styles/index';

  .page {
    height: 100%;
    display: flex;

    .login-container {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      .content {
        display: flex;
        flex-direction: column;

        .title {
          line-height: 48px;
        }
      }
    }

    .image-container {
      background: $light-pink;
      flex: 1;
      display: flex;
      align-content: center;
    }
  }
</style>