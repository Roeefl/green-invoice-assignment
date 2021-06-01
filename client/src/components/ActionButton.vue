<template>
  <button :type="type" :disabled="disabled" @click="$emit('clicked')" class="button" :class="[color, { disabled }]">
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
      },
      disabled: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '@/styles/index';

  .button {
    cursor: pointer;
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

    &.disabled {
      opacity: 50%;
      cursor: not-allowed;
    }
  }

  .text {
    font-size: $font-size-base;
    font-weight: bold;
  }
</style>