<template>
  <div class="tasks-view">
    <template v-if="tasks.length">
      <template :key="task.id" v-for="task in tasks">
        <Task v-if="!task.done || showDoneTasks" :task="task" :tasksReducer="tasksReducer" />
      </template>
    </template>
    <template v-else><p className="no-tasks">You don&apos;t have any tasks</p></template>
  </div>
</template>

<script>
import Task from "./../task";
export default {
  name: "TasksView",
  components: {
    Task,
  },
  props: {
    tasks: {
      type: Array,
      default: function () {
        return [];
      },
    },
    tasksReducer: Function,
    showDoneTasks: Boolean,
  },
  methods: {
    filterDoneTasks(tasks, shouldFilter) {
      return tasks.filter((task) => !task.done || shouldFilter);
    },
  },
};
</script>

<style scoped lang="scss">
@import "./tasksView.style";
</style>
