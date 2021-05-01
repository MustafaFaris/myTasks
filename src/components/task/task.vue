<template>
  <div :class="['task', task.done ? 'done' : '']">
    <Card class="task-card">
      <div class="task-content">
        <span :class="['task-type', task.type]" />
        <span>{{ task.title }}</span>
      </div>
      <div class="task-controls">
        <button class="remove-btn" @click="setDeleting(true)">
          <TrashIcon />
        </button>

        <PopupMenu v-if="isDeleting" :title="`Deleting ${task.type}`" @onClose="setDeleting(false)">
          You are about to delete this {{ task.type }}, are you sure?
          <template v-slot:actionButtons>
            <Button @onClick="setDeleting(false)">Cancel</Button>
            <Button danger @onClick="handleTaskDelete(task)">Delete</Button>
          </template>
        </PopupMenu>

        <Checkbox :checked="task.done" @onChange="(isChecked) => handleTaskCheck(task, isChecked)" />
      </div>
    </Card>
  </div>
</template>

<script>
import Card from "./../card";
import Checkbox from "./../checkbox";
import PopupMenu from "./../popupMenu";
import Button from "./../button";
import TrashIcon from "./trash.icon";

export default {
  name: "Task",
  data() {
    return { isDeleting: false };
  },
  props: {
    task: Object,
    onCheck: Function,
    tasksReducer: Function,
  },
  components: {
    Card,
    TrashIcon,
    Button,
    PopupMenu,
    Checkbox,
  },
  methods: {
    setDeleting(isDeleting) {
      this.isDeleting = isDeleting;
    },
    handleTaskDelete(task) {
      this.tasksReducer({ type: "remove", taskID: task.id });
    },
    handleTaskCheck(task, isChecked) {
      this.tasksReducer({ type: "check", taskID: task.id, isChecked });
    },
  },
};
</script>

<style scoped lang="scss">
@import "./task.style";
</style>
