import styled from "@emotion/styled";

const StyledTask = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: #999;

  .checkbox {
    flex-shrink: 0;
  }

  .task-type {
    display: inline-block;
    height: 10px;
    width: 10px;
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
`;

export default StyledTask;
