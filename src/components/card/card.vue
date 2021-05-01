<template>
  <div :class="['card', className]"><slot /></div>
</template>

<script>
export default {
  name: "Card",
  props: {
    className: String,
  },
};
</script>

<style scoped lang="scss">
@import "./card.style";
</style>
