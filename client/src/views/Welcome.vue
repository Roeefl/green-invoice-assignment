<template>
  <div class="container">
    <h2>
      היי {{ user.firstName }}, וברוך הבא למערכת של החשבונית הירוקה!
    </h2>
    <router-link to="/me">
       אל עמוד המשתמש שלי
    </router-link>
    <action-button color="secondary" @clicked="onLogout" class="logout-button">
      התנתקות
    </action-button>
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
    align-items: center;
    position: relative;

    .logout-button {
      position: absolute;
      top: 0;
      left: 0;
      margin: $spacer;
    }
  }
</style>