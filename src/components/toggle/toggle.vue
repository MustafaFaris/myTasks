<template>
  <div :class="[isToggled ? 'toggled' : '', 'toggle']" @click="onToggleChange" />
</template>

<script>
export default {
  name: "Toggle",
  props: {
    defaultChecked: Boolean,
    toggled: Boolean,
    onChange: Function,
  },
  data() {
    return {
      isToggled: this.toggled !== undefined ? this.toggled : "false",
    };
  },
  methods: {
    onToggleChange() {
      this.isToggled = !this.isToggled;
      if (this.onChange) {
        this.onChange(this.toggled !== undefined ? !this.toggled : !this.isToggled);
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "./toggle.style";
</style>
