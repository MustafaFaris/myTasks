<template>
  <div className="popup-menu">
    <div class="popup-title">{{ title }}</div>
    <slot />
    <div class="action-buttons"><slot name="actionButtons" /></div>
  </div>
  <div class="popup-blocker" @click="onClose" />
</template>

<script>
export default {
  name: "PopupMenu",
  props: {
    title: String,
  },
  methods: {
    onClose() {
      this.$emit("on-close");
    },
  },
};
</script>

<style lang="scss">
@import "./popupMenu.style";
</style>
