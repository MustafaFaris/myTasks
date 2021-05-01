<template>
  <div className="add-task-menu">
    <ul>
      <li
        @click="
          setClicked(false);
          setCreating('task');
        "
      >
        Add a new Task
      </li>
      <li
        @click="
          setClicked(false);
          setCreating('event');
        "
      >
        Add a new Event
      </li>
    </ul>
    <div className="add-menu-blocker" @click="setClicked(false)" />
  </div>
</template>

<script>
export default {
  name: "AddMenu",
  props: {
    setClicked: Function,
    setCreating: Function,
  },
};
</script>

<style scoped lang="scss">
@import "./addMenu.style";
</style>
