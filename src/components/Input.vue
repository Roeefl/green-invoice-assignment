<template>
  <span class="wrapper">
    <input :type="type" :value="value" @input="$emit('input', $event.target.value)" :placeholder="placeholder" class="input" />
    <label>
      {{ label }}
    </label>
  </span>
</template>

<script>
  export default {
    name: 'Input',
    props: {
      type: {
        type: String,
        default: 'text'
      },
      value: {
        type: String,
        required: true
      },
      placeholder: String,
      label: String
    }
  }
</script>

<style lang="scss">
  @import '@/styles/index';

  .wrapper {
    display: flex;
    flex-direction: column;
  }
</style>