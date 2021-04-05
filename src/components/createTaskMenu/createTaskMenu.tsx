import React, { FC, useState, useRef, useEffect, useContext } from "react";
import { AppContext } from "./../../context";
import PopupMenu from "components/popupMenu";
import Button from "components/button";
import TextInput from "components/textInput";
import StyledCreateTaskMenu from "./createTaskMenu.style";
import { getRandomID } from "./../../helpers";

interface Props {
  creating: string;
  setCreating: (creating: string | null) => void;
}

const CreateTask: FC<Props> = ({ creating, setCreating }) => {
  const { updateTasksList } = useContext(AppContext);
  const [taskTitle, setTaskTitle] = useState("");
  const [error, setError] = useState<string | null>(null);
  const taskTitleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTimeout(() => {
      taskTitleRef.current?.focus();
    }, 500);
  }, []);

  const handleCreate = () => {
    if (taskTitle) {
      updateTasksList({ type: "add", task: { id: getRandomID(), title: taskTitle, type: creating } });
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
          onClose={(): void => setCreating(null)}
          actionButtons={
            <>
              <Button onClick={(): void => setCreating(null)}>Cancel</Button>
              <Button onClick={handleCreate}>Create</Button>
            </>
          }
        >
          <TextInput
            onChange={(e: React.FormEvent<HTMLInputElement>): void => {
              setError(null);
              setTaskTitle(e.currentTarget.value);
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

export default CreateTask;
