<template>
  <span :class="['checkbox', isChecked ? 'checked' : '']" @click="onCheckChange">
    <CheckIcon />
  </span>
</template>

<script>
import CheckIcon from "./check.icon";
export default {
  name: "Checkbox",
  data() {
    return {
      isChecked: this.checked !== undefined ? this.checked : false,
    };
  },
  methods: {
    onCheckChange() {
      this.isChecked = !this.isChecked;
      this.$emit("onChange", this.isChecked);
    },
  },
  components: {
    CheckIcon,
  },
  props: {
    checked: Boolean,
  },
};
</script>

<style scoped lang="scss">
@import "./checkbox.style";
</style>
