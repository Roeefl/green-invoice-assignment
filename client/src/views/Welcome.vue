<template>
  <div class="container">
    <page-illustration image="bath" />
    <div class="content">
      <h2>
        היי {{ user.firstName }}, וברוך הבא למערכת של החשבונית הירוקה!
      </h2>
      <router-link to="/me" class="profile-link">
        קחו אותי אל עמוד המשתמש שלי
      </router-link>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import PageIllustration from '@/components/PageIllustration'

  export default {
    name: 'Welcome',
    components: {
      PageIllustration
    },
    computed: {
      ...mapState([
        'isAuthenticated',
        'user'
      ])
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

    .content {
      margin: 10%;
      z-index: 10;

      .profile-link {
        color: $primary;
        font-size: $font-size-md;
      }
    }
  }
</style>