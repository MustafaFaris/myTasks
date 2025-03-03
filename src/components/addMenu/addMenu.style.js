import styled from "@emotion/styled";

const StyledAddMenu = styled.div`
  ul {
    position: absolute;
    left: 50%;
    z-index: 1;
    transform: translateX(-50%);
    bottom: 60px;
    border-radius: 15px;
    padding: 10px 0;
    background: white;
    list-style: none;
    box-shadow: 5px 0px 8px rgba(0, 0, 0, 0.1);
    animation: mymove 0.2s;
    overflow: hidden;
    min-width: 90vw;

    li {
      position: relative;
      white-space: nowrap;
      padding: 20px;
      text-align: left;
      transition: 0.05s ease;
      user-select: none;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;

      &:active {
        background: #eee;
      }

      &:not(:last-of-type):after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
        width: 90%;
        height: 1px;
        background: #eee;
      }
    }
  }

  .add-menu-blocker {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
  }

  @keyframes mymove {
    0% {
      bottom: 30px;
    }
    100% {
      bottom: 60px;
    }
  }
`;

export default StyledAddMenu;
