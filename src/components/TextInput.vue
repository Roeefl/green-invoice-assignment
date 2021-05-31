<template>
  <span class="wrapper">
    <input :type="type" :name="name" :value="value" @input="$emit('changed', $event.target.value)" :placeholder="placeholder" class="input" />
    <span class="suffix">
      <label :for="name" class="label">
        {{ label }}
      </label>
      <slot></slot>
    </span>
  </span>
</template>

<script>
  export default {
    name: 'TextInput',
    props: {
      type: {
        type: String,
        default: 'text'
      },
      name: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: true
      },
      placeholder: String,
      label: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  @import '@/styles/index';

  .wrapper {
    display: flex;
    flex-direction: column;

    .input {
      border: 0;
      border-bottom: 1px solid $primary;
      padding: $spacer / 2;
    }

    .suffix {
      margin-top: $spacer / 4;
      font-size: $font-size-sm;
    }
  }
</style>
