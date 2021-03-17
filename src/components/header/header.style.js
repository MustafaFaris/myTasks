import styled from "@emotion/styled";

const StyledHeader = styled.div`
  position: relative;
  background: #64dacf;
  padding: 20px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  z-index: 1;

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
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    font-weight: 500;
    color: white;
    font-size: 20px;
    user-select: none;

    .toggle-done {
      display: flex;
      align-items: center;
      font-size: 14px;
      font-weight: normal;

      .toggle {
        margin-left: 5px;
      }
    }
  }
`;

export default StyledHeader;
