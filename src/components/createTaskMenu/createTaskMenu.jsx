import React, { useState, useRef, useEffect } from "react";
import useStore from "./../../store";
import propTypes from "prop-types";
import PopupMenu from "components/popupMenu";
import Button from "components/button";
import TextInput from "components/textInput";
import StyledCreateTaskMenu from "./createTaskMenu.style";
import { getRandomID } from "./../../helpers";

const CreateTask = ({ creating, setCreating }) => {
  const addTask = useStore((state) => state.addTask);
  const [taskTitle, setTaskTitle] = useState("");
  const [error, setError] = useState(null);
  const taskTitleRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      taskTitleRef.current?.focus();
    }, 500);
  }, []);

  const handleCreate = () => {
    if (taskTitle) {
      addTask({ id: getRandomID(), title: taskTitle, type: creating });
      setCreating(null);
    } else {
      setError(`Please include ${creating} title!`);
    }
  };

  return (
    <StyledCreateTaskMenu>
      <form onSubmit={handleCreate}>
        <PopupMenu
          title={`Create a new ${creating}`}
          onClose={() => setCreating(null)}
          actionButtons={
            <>
              <Button onClick={() => setCreating(null)}>Cancel</Button>
              <Button onClick={handleCreate}>Create</Button>
            </>
          }
        >
          <TextInput
            onChange={({ target }) => {
              setError(null);
              setTaskTitle(target.value);
            }}
            required
            placeholder="e.g. Go to gym"
            name="task-label"
            label={`${creating} title`}
            error={error}
            ref={taskTitleRef}
          />
          {error && <span className="error">{error}</span>}
        </PopupMenu>
      </form>
    </StyledCreateTaskMenu>
  );
};

CreateTask.propTypes = {
  creating: propTypes.string,
  setCreating: propTypes.func,
};

export default CreateTask;
