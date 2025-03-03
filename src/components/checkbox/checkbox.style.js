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

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: transparent;
    transform: translate(-50%, -50%) rotate(45deg);
    transition: ease 0.2s;
  }

  &.checked {
    border-color: #64dacf;

    svg {
      color: #64dacf;
      transform: translate(-50%, -50%) rotate(0deg);
    }
  }
`;
export default StyledCheckbox;
