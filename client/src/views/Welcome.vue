<template>
  <div class="container">
    Welcome to Green Invoice!
    Hello, {{firstName}} welcome to your {{bussinesName}}

    <action-button color="secondary" @clicked="onLogout" class="logout-button">
      התנתקות
    </action-button>
  </div>

</template>

<script>
  import ActionButton from '@/components/ActionButton'

  export default {
    name: 'Welcome',
    components: {
      ActionButton
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    .logout-button {
      
    }
  }
</style>