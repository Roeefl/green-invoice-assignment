<template>
  <form class="form" @submit="onLogin">
    <text-input
      name="email"
      :value="email"
      @changed="onEmailChange"
      placeholder="מייל"
      label="כתובת המייל איתה נרשמת לחשבונית ירוקה"
      class="input"
    />
    <text-input
      type="password"
      name="password"
      :value="password"
      @changed="onPasswordChange"
      placeholder="סיסמה"
      class="input"
    >
      <a href="#" class="forgot-password">שכחת סיסמא?</a>
    </text-input>
    <span class="actions">
      <action-button
        type="submit"
        color="secondary"
        :disabled="!email || !password"
        @clicked="$emit('login-clicked', { email, password })"
        class="login-button simple-login-button"
      >
        כניסה
      </action-button>
      <action-button type="submit" color="transparent" icon="google" class="login-button  google-login-button">
        <span class="google">
          <p class="text">
            כניסה מהירה
          </p>
          <img src="@/assets/google.svg" alt="google-login" class="google-icon" />
        </span>
      </action-button>
    </span>
    <span class="join">
      עוד לא הצטרפת?
      <a href="#" class="link">
        ל-30 יום ניסיון חינם
      </a>
    </span>
  </form>
</template>

<script>
  import TextInput from '@/components/TextInput'
  import ActionButton from '@/components/ActionButton'

  export default {
    name: 'LoginForm',
    data: () => ({
      email: '',
      password: ''
    }),
    components: {
      TextInput,
      ActionButton
    },
    methods: {
      onEmailChange(email) {
        this.email = email
      },
      onPasswordChange(password) {
        this.password = password
      },
      onLogin(e) {
        e.preventDefault()
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '@/styles/index';

  $icon-size: 24px;

  .form {
    display: flex;
    flex-direction: column;

    @include mobile-only() {
      padding: $spacer * 2;
    }

    .input {
      margin-bottom: $spacer * 2;
    }

    .actions {
      margin-top: $spacer * 2;
      display: flex;

      @include mobile-only() {
        flex-direction: column;
        align-items: center;
      }

      .login-button { 
        @include mobile-only() {
          width: 60vw;
          margin-bottom: $spacer;
        }
      }

      .simple-login-button {
        flex: 1;
        margin-left: $spacer;

        @include mobile-only() {
          margin-left: 0;
        }
      }

      .google {
        display: flex;
        align-items: center;

        .text {
          margin-left: $spacer;
        }

        .google-icon {
          width: $icon-size;
          height: $icon-size;
        }
      }
    }

    .join {
      margin-top: $spacer * 2;
      color: $link;
      font-size: $font-size-md;

      .link {
        color: $link;
      }
    }
  }

  .forgot-password {
    color: $primary;
  }
</style>