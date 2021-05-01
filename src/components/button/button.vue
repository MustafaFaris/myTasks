<template>
  <button :class="['button', danger ? 'danger' : '']" type="button" @click="onClick()"><slot></slot></button>
</template>

<script>
export default {
  name: "Button",
  props: {
    danger: Boolean,
  },
  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
</script>

<style scoped lang="scss">
@import "./button.style";
</style>
