import styled from "@emotion/styled";

const StyledCheckbox = styled.span`
  position: relative;
  display: inline-block;
  border: solid 1px #dddddd;
  border-radius: 8px;
  height: 30px;
  width: 30px;
  transition: 0.2s ease;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &.checked {
    border-color: #64dacf;
    &:after {
      content: "✓";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #64dacf;
      font-size: 16px;
      font-weight: bold;
    }
  }
`;
export default StyledCheckbox;
