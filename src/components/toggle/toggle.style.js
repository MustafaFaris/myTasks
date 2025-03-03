import styled from "@emotion/styled";

const StyledToggle = styled.div`
  position: relative;
  display: inline-block;
  height: 24px;
  width: 45px;
  background: white;
  border-radius: 12px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:after {
    content: "";
    position: absolute;
    top: 2px;
    left: 3px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #d4d4d4;
    transition: 0.2s ease;
  }
  &.toggled:after {
    left: calc(100% - 23px);
    background: #64dacf;
  }
`;

export default StyledToggle;
