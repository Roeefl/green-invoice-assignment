<template>
  <img src="@/assets/illustration.jpg" alt="Illustration" class="image" />
</template>

<style scoped lang="scss">
  @import '@/styles/index';
  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 50vw;

    @include tablet-and-below() {
      @include background-image-transparent();
    }
  }
</style>
