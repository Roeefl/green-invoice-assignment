<template>
  <div class="container">
    <img src="@/assets/user.jpg" alt="user-avatar" class="image" />
    <div class="content">
      <h2>
        היי {{ user.firstName }}, וברוך הבא למערכת של החשבונית הירוקה!
      </h2>
      <router-link to="/me" class="profile-link">
        קחו אותי אל עמוד המשתמש שלי
      </router-link>
      <action-button color="secondary" @clicked="onLogout" class="logout-button">
        התנתקות
      </action-button>
    </div>
  </div>
</template>

<script>
  // The other 2 screens (welcome, user info) you can use your imagination - try to make them look nice
  import { mapState } from 'vuex'
  import ActionButton from '@/components/ActionButton'

  export default {
    name: 'Welcome',
    components: {
      ActionButton
    },
    computed: {
      ...mapState([
        'isAuthenticated',
        'user'
      ])
    },
    methods: {
      onLogout() {
        console.log('logout')
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => { 
        if (!vm.isAuthenticated) {
          vm.$router.push('/')
        }
      })
    }
  }
</script>

<style scoped lang="scss">
  @import '@/styles/index';

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    .image {
      position: absolute;
      top: 0;
      left: 0;
      width: 50vw;
    }

    .content {
      margin: 10%;
      z-index: 10;

      .profile-link {
        color: $primary;
        font-size: $font-size-md;
      }
    }

    .logout-button {
      position: absolute;
      top: 0;
      left: 0;
      margin: $spacer;
    }
  }
</style>