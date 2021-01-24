import styled from "@emotion/styled";

const StyledHeader = styled.div`
  background: white;
  padding: 20px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);

  .user {
    position: relative;
    display: inline-block;
    height: 30px;
    width: 30px;
    background: #ddd;
    color: white;
    border-radius: 50%;

    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .page-title {
    margin-top: 10px;
    font-weight: bold;
    color: #30363f;
  }
`;

export default StyledHeader;
