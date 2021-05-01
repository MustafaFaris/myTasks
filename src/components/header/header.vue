<template>
  <header>
    <a href="https://github.com/MustafaFaris" target="_blank" rel="noreferrer">
      <span class="user">
        <span>M</span>
      </span>
    </a>
    <div class="page-title">
      My Tasks
      <span class="toggle-done">
        Show done tasks <Toggle :toggled="showDoneTasks" :onChange="handleTaskVisiblityToggle" />
      </span>
    </div>
  </header>
</template>

<script>
import Toggle from "./../toggle";

export default {
  name: "Header",
  methods: {
    handleTaskVisiblityToggle(isVisible) {
      this.tasksReducer({ type: "setDoneTasksVisibility", isVisible });
    },
  },
  components: {
    Toggle,
  },
  props: {
    showDoneTasks: Boolean,
    tasksReducer: Function,
  },
};
</script>

<style scoped lang="scss">
@import "./header.style";
</style>
