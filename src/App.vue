<template>
  <div class="App">
    <Header :showDoneTasks="showDoneTasks" :tasksReducer="TasksReducer" />
    <TasksView :tasks="tasks" :tasksReducer="TasksReducer" :showDoneTasks="showDoneTasks" />
    <Footer :tasksReducer="TasksReducer" />
  </div>
</template>

<script>
import { getTasks, setLocalStorage } from "./helpers";
import Header from "./components/header";
import TasksView from "./components/tasksView";
import Footer from "./components/footer";

const getDefaultDoneTask = () => {
  const local = JSON.parse(localStorage.getItem("showDoneTasks"));
  return local ? local.showDoneTasks : true;
};

export default {
  name: "App",
  components: {
    Header,
    TasksView,
    Footer,
  },
  data: function () {
    return {
      tasks: getTasks(),
      showDoneTasks: getDefaultDoneTask(),
    };
  },
  methods: {
    TasksReducer(action) {
      switch (action.type) {
        case "set": {
          this.tasks = action.tasks;
          break;
        }
        case "add": {
          const newTasks = [action.task, ...this.tasks];
          setLocalStorage("tasks", newTasks);
          this.tasks = newTasks;
          break;
        }
        case "remove": {
          const newTasks = this.tasks.filter((task) => task.id !== action.taskID);
          setLocalStorage("tasks", newTasks);
          this.tasks = newTasks;
          break;
        }
        case "check": {
          const tasksClone = this.tasks.slice();
          tasksClone.find((task) => task.id === action.taskID).done = action.isChecked;
          setLocalStorage("tasks", tasksClone);
          this.tasks = tasksClone;
          break;
        }
        case "setDoneTasksVisibility": {
          this.showDoneTasks = action.isVisible;
          setLocalStorage("showDoneTasks", { showDoneTasks: action.isVisible });
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
.App {
  position: relative;
  padding-bottom: 50px;
  overflow: auto;
  background: #f6f7fa;
  height: 100%;
  width: 100%;
}
</style>
