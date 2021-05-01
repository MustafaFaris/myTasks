<template>
  <div :class="['text-input', error ? 'has-error' : '']">
    <label :htmlFor="name">
      {{ label }}
      <span v-if="required" class="required">*</span>
    </label>
    <input @input="(e) => onChange(e)" type="text" :name="name" autoComplete="off" :required="required" />
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props: {
    label: String,
    name: String,
    required: Boolean,
    error: Boolean,
    onChange: Function,
  },
};
</script>

<style scoped lang="scss">
@import "./textInput.style";
</style>
