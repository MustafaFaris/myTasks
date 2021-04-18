import styled from "@emotion/styled";

const StyledAddTask = styled.div`
  position: relative;

  .add-task-button {
    position: relative;
    z-index: 2;
    top: -12px;
    width: 50px;
    height: 50px;
    display: inline-block;
    background: #64dacf;
    transition: 0.2s ease;
    border: none;
    border-radius: 50%;
    color: white;
    outline: none;
    user-select: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

    &.isClicked {
      background: #ec407a;

      svg {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transition: 0.2s ease;
      transform: translate(-50%, -50%);
      font-size: 16px;
    }
  }
`;

export default StyledAddTask;
