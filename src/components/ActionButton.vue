<template>
  <button :type="type" @click="$emit('clicked')" class="button" :class="color">
    <span class="text">
      <slot></slot>
    </span>
  </button>
</template>

<script>
  export default {
    name: 'ActionButton',
    props: {
      type: {
        type: String,
        default: 'button'
      },
      color: {
        type: String,
        default: 'primary'
      }
    }
  }
</script>

<style lang="scss">
  @import '@/styles/index';

  .button {
    padding: $spacer $spacer * 2;
    border-radius: 100px;
    border: 0;

    &.primary {
      background: $primary;
      color: $white;
    }

    &.secondary {
      background: $secondary;
      color: $white;
    }

    &.transparent {
      background: transparent;
      color: $light-blue;
      border: 1px solid $light-blue;
    }
  }

  .text {
    font-size: $font-size-base;
    font-weight: bold;
  }
</style>