/* eslint-disable no-undef */
import { Selector } from "testcafe";

fixture`Functionality Test`.page`./build/index.html`;

//Global Selectors
const tasks = Selector(".tasks-view div.task");
const addTaskButton = Selector(".add-task-button");
const addTaskMenu = Selector(".add-task-menu");
const addTaskMenuItems = Selector(".add-task-menu li");
const popupMenu = Selector(".popup-menu");
const tasksToggler = Selector(".toggle-done .toggle");

test("Should load default tasks properly", async (t) => {
  const firstTask = Selector(tasks).withText("Go to gym");
  const secondTask = Selector(tasks).withText("Do the laundry");
  const thirdTask = Selector(tasks).withText("Potato Potato");

  await t
    .expect(tasks.count)
    .eql(3)
    .expect(firstTask.exists)
    .ok()
    .expect(firstTask.find(".task-type").hasClass("task"))
    .ok()
    .expect(firstTask.find(".checkbox").hasClass("checked"))
    .notOk("checked")
    .expect(secondTask.exists)
    .ok()
    .expect(secondTask.find(".task-type").hasClass("event"))
    .ok()
    .expect(secondTask.find(".checkbox").hasClass("checked"))
    .notOk("checked")
    .expect(thirdTask.exists)
    .ok()
    .expect(thirdTask.find(".task-type").hasClass("task"))
    .ok()
    .expect(thirdTask.find(".checkbox").hasClass("checked"))
    .ok();
});

test("Clicking on 'add task button' should toggle 'add task menu'", async (t) => {
  await t.click(addTaskButton).expect(addTaskMenu.exists).ok().click(addTaskButton).expect(addTaskMenu.exists).notOk();
});

test("Clicking on 'add task menu's blocker should close it", async (t) => {
  const addMenuBlocker = Selector(".add-menu-blocker");
  await t
    .click(addTaskButton)
    .expect(addMenuBlocker.exists)
    .ok()
    .click(addTaskButton)
    .expect(addMenuBlocker.exists)
    .notOk()
    .expect(addTaskMenu.exists)
    .notOk();
});

test("Clicking on 'cancel button' or 'popup-menu's blocker should close the 'popup-menu'", async (t) => {
  const popupBlocker = Selector(".popup-blocker");
  await t
    .click(addTaskButton)
    .click(addTaskMenuItems.withText("Add a new Task"))
    .expect(popupMenu.exists)
    .ok()
    .click(Selector("button").withText("Cancel"))
    .expect(popupMenu.exists)
    .notOk()
    .click(addTaskButton)
    .click(addTaskMenuItems.withText("Add a new Task"))
    .expect(popupBlocker.exists)
    .ok()
    .click(popupBlocker, { offsetX: 2, offsetY: 2 }) //Options are needed because some browsers can't see the blocker.
    .expect(popupMenu.exists)
    .notOk();
});

test("Creating a new Task", async (t) => {
  const newTask = Selector(tasks).nth(0).withText("Get to the chopper!");
  await t
    .click(addTaskButton)
    .click(addTaskMenuItems.withText("Add a new Task"))
    .expect(popupMenu.withText("Create a new task").exists)
    .ok()
    .typeText('.text-input input[name="task-label"]', "Get to the chopper!")
    .click(Selector("button").withText("Create"))
    .expect(tasks.count)
    .eql(4)
    .expect(newTask.exists)
    .ok()
    .expect(newTask.find(".task-type").hasClass("task"))
    .ok()
    .expect(newTask.find(".checkbox").hasClass("checked"))
    .notOk();
});

test("Creating a new Event", async (t) => {
  const newEvent = Selector(tasks).nth(0).withText("Get to the chopper! NOW!");
  await t
    .click(addTaskButton)
    .click(addTaskMenuItems.withText("Add a new Event"))
    .typeText('.text-input input[name="task-label"]', "Get to the chopper! NOW!")
    .expect(popupMenu.withText("Create a new event").exists)
    .ok()
    .click(Selector("button").withText("Create"))
    .expect(tasks.count)
    .eql(4)
    .expect(newEvent.exists)
    .ok()
    .expect(newEvent.find(".task-type").hasClass("event"))
    .ok()
    .expect(newEvent.find(".checkbox").hasClass("checked"))
    .notOk();
});

test("Removing a Task", async (t) => {
  const targetTask = tasks.nth(2).withText("Potato Potato");
  await t
    .expect(tasks.count)
    .eql(3)
    .expect(targetTask.exists)
    .ok()
    .click(targetTask.find(".remove-btn"))
    .expect(popupMenu.withText("Deleting task").exists)
    .ok()
    .click(Selector("button").withText("Delete"))
    .expect(tasks.count)
    .eql(2)
    .expect(targetTask.exists)
    .notOk();
});

test("Removing an Event", async (t) => {
  const targetEvent = tasks.nth(1).withText("Do the laundry");
  await t
    .expect(tasks.count)
    .eql(3)
    .expect(targetEvent.exists)
    .ok()
    .click(targetEvent.find(".remove-btn"))
    .expect(popupMenu.withText("Deleting event").exists)
    .ok()
    .click(Selector("button").withText("Delete"))
    .expect(tasks.count)
    .eql(2)
    .expect(targetEvent.exists)
    .notOk();
});

test("Checking tasks", async (t) => {
  const firstTask = tasks.nth(0);
  const firstTaskCheckbox = firstTask.find(".checkbox");
  await t
    .expect(firstTask.hasClass("done"))
    .notOk()
    .expect(firstTaskCheckbox.hasClass("checked"))
    .notOk()
    .click(firstTaskCheckbox)
    .expect(firstTask.hasClass("done"))
    .ok()
    .expect(firstTaskCheckbox.hasClass("checked"))
    .ok()
    .click(firstTaskCheckbox)
    .expect(firstTask.hasClass("done"))
    .notOk()
    .expect(firstTaskCheckbox.hasClass("checked"))
    .notOk();
});

test("Un-checking a task that is checked by default", async (t) => {
  const thirdTask = tasks.nth(2);
  const thirdTaskCheckbox = thirdTask.find(".checkbox");
  await t
    .expect(thirdTask.hasClass("done"))
    .ok()
    .expect(thirdTaskCheckbox.hasClass("checked"))
    .ok()
    .click(thirdTaskCheckbox)
    .expect(thirdTask.hasClass("done"))
    .notOk()
    .expect(thirdTaskCheckbox.hasClass("checked"))
    .notOk();
});

test("Toggling done tasks visibility", async (t) => {
  await t
    .expect(tasksToggler.hasClass("toggled"))
    .ok()
    .expect(tasks.count)
    .eql(3)
    .click(tasksToggler)
    .expect(tasksToggler.hasClass("toggled"))
    .notOk()
    .expect(tasks.count)
    .eql(2)
    .click(tasksToggler)
    .expect(tasksToggler.hasClass("toggled"))
    .ok()
    .expect(tasks.count)
    .eql(3);
});

test("Changes to tasks should be preserved when the app reloads", async (t) => {
  const secondTask = tasks.nth(1);
  const secondTaskCheckbox = secondTask.find(".checkbox");
  await t
    .click(addTaskButton)
    .click(addTaskMenuItems.withText("Add a new Task"))
    .typeText('.text-input input[name="task-label"]', "Get to the chopper!")
    .click(Selector("button").withText("Create"))
    .click(secondTaskCheckbox)
    .expect(secondTask.hasClass("done"))
    .ok()
    .expect(secondTaskCheckbox.hasClass("checked"))
    .ok()

    .click(tasksToggler);

  await t.eval(() => location.reload(true));

  await t
    .expect(tasks.count)
    .eql(2)
    .expect(tasksToggler.hasClass("toggled"))
    .notOk()
    .click(tasksToggler)
    .expect(secondTask.hasClass("done"))
    .ok()
    .expect(secondTaskCheckbox.hasClass("checked"))
    .ok();
});
