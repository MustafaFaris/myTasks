import styled from "@emotion/styled";

const StyledTask = styled.div`
  .task-card {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    transition: 0.2s ease;
    user-select: none;
    color: #999;
    animation: slideDown 0.2s;

    .checkbox {
      flex-shrink: 0;
    }

    .task-content {
      max-width: calc(100% - 35px);
      word-break: break-all;
      display: flex;
      align-items: center;
      .task-type {
        display: inline-block;
        height: 10px;
        min-width: 10px;
        border-radius: 50%;
        margin-right: 15px;
        margin-bottom: 0;

        &.task {
          background: #60e2dd;
        }
        &.event {
          background: #a87ac4;
        }
      }
    }

    .task-controls {
      display: flex;
      align-items: center;

      .remove-btn {
        background: none;
        border: none;
        outline: none;
        font-size: 16px;
        color: #ec407a;
        cursor: pointer;
        user-select: none;
      }

      .checkbox {
        margin-left: 8px;
      }
    }
  }

  &.done {
    .task-card {
      text-decoration: line-through;
      color: #ccc;

      .task-type {
        opacity: 0.5;
      }
    }
  }

  @keyframes slideDown {
    0% {
      top: -50px;
    }
    100% {
      top: 0px;
    }
  }
`;

export default StyledTask;
