<template>
  <action-button color="secondary" @clicked="onLogout" class="logout">
    התנתקות
  </action-button>
</template>

<script>
  import { mapMutations } from 'vuex'
  import ActionButton from '@/components/ActionButton'

  export default {
    name: 'LogoutButton',
    components: {
      ActionButton
    },
    methods: {
      ...mapMutations([
        'setUser'
      ]),
      onLogout() {
        this.setUser({})
      }
    },
  }
</script>

<style scoped lang="scss">
  @import '@/styles/index';

  .logout {
    position: absolute;
    top: 0;
    left: 0;
    margin: $spacer;

    @include tablet-and-below() {
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      top: unset;
    }
  }
</style>
