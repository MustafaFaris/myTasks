<template>
  <footer>
    <AddTask :tasksReducer="tasksReducer" />
  </footer>
</template>

<script>
import AddTask from "./../addTask";
export default {
  name: "Footer",
  components: { AddTask },
  props: {
    tasksReducer: Function,
  },
};
</script>

<style scoped lang="scss">
@import "./footer.style";
</style>
