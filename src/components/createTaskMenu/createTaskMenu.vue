<template>
  <div>
    <form @submit="handleCreate">
      <PopupMenu :title="`Create a new ${creating}`" @onClose="setCreating(null)">
        <TextInput
          :onChange="handleLabelChange"
          required
          placeholder="e.g. Go to gym"
          name="task-label"
          :label="`${creating} title`"
          :error="error"
        />
        <span v-if="error" class="error">{{ error }}</span>
        <template v-slot:actionButtons>
          <Button @onClick="setCreating(null)">Cancel</Button>
          <Button @onClick="handleCreate">Create</Button>
        </template>
      </PopupMenu>
    </form>
  </div>
</template>

<script>
import PopupMenu from "./../popupMenu";
import Button from "./../button";
import TextInput from "./../textInput";
import { getRandomID } from "./../../helpers";

export default {
  name: "CreateTask",
  data() {
    return {
      taskTitle: "",
      error: false,
    };
  },
  methods: {
    setError(error) {
      this.error = error;
    },
    setTaskTitle(e) {
      const { target } = e;
      this.taskTitle = target.value;
    },
    handleCreate() {
      console.log({ taskTitle: this.taskTitle });
      if (this.taskTitle) {
        this.tasksReducer({ type: "add", task: { id: getRandomID(), title: this.taskTitle, type: this.creating } });
        this.setCreating(null);
      } else {
        this.error = `Please include ${this.creating} title!`;
      }
    },
    handleLabelChange(e) {
      this.setError(null);
      this.setTaskTitle(e);
    },
  },
  components: {
    PopupMenu,
    Button,
    TextInput,
  },
  props: {
    creating: String,
    setCreating: Function,
    tasksReducer: Function,
  },
};
</script>

<style scoped lang="scss">
@import "./createTaskMenu.style";
</style>
