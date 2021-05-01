<template>
  <button :class="['add-task-button', isClicked ? 'isClicked' : '']" @click="setClicked(!isClicked)">
    <PlusIcon />
  </button>
  <AddMenu v-if="isClicked" :setClicked="setClicked" :setCreating="setCreating" />
  <CreateTaskMenu v-if="creating" :creating="creating" :setCreating="setCreating" :tasksReducer="tasksReducer" />
</template>

<script>
import AddMenu from "./../addMenu";
import CreateTaskMenu from "./../createTaskMenu";
import PlusIcon from "./plus.icon";

export default {
  name: "AddTask",
  data() {
    return {
      isClicked: false,
      creating: null,
    };
  },
  methods: {
    setClicked(isClicked) {
      this.isClicked = isClicked;
    },
    setCreating(type) {
      this.creating = type;
    },
  },
  components: {
    AddMenu,
    CreateTaskMenu,
    PlusIcon,
  },
  props: {
    tasksReducer: Function,
  },
};
</script>

<style scoped lang="scss">
@import "./addTask.style";
</style>
