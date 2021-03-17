import styled from "@emotion/styled";

const StyledButton = styled.button`
  background: transparent;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  color: #60e2dd;
  outline: none;
  cursor: pointer;
  transition: 0.05s ease;
  border-radius: 15px;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  &:active {
    background: #f5f5f5;
  }

  &.danger {
    color: #ec407a;
  }
`;

export default StyledButton;
