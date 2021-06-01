<template>
  <span class="image">
    <img v-if="image === 'human'" src="@/assets/human.jpg" alt="Human with a cat" />
    <img v-if="image === 'bath'" src="@/assets/bath.jpg" alt="Human inside a bath" />
  </span>
</template>

<script>
  export default {
    name: 'PageIllustration',
    props: {
      image: {
        type: String,
        default: 'human'
      }
    } 
  }
</script>

<style scoped lang="scss">
  @import '@/styles/index';
  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 50vw;
    height: 100vh;

    img {
      width: 100%;
      height: 100%;
    }

    @include tablet-and-below() {
      @include background-image-transparent();
    }
  }
</style>
