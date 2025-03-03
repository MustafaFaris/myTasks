import styled from "@emotion/styled";

const StyledPopupMenu = styled.div`
  .popup-menu {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    min-height: 20vh;
    max-height: 65vh;
    padding: 20px;
    background: white;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    box-shadow: 0px -1px 2px rgba(0, 0, 0, 0.1);
    text-align: left;
    padding-bottom: 50px;
    overflow: auto;
    animation: slideUp 0.2s;

    .popup-title {
      margin-bottom: 20px;
      font-size: 22px;
      font-weight: 500;
      color: #999;
    }

    .action-buttons {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      display: flex;
      height: 50px;
      background: white;

      button {
        position: relative;
        flex-grow: 1;

        &:not(:last-of-type):after {
          content: "";
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          height: 20px;
          width: 1px;
          background: #f5f5f5;
        }
      }
    }
  }

  @media screen and (min-width: 1200px) {
    .popup-menu {
      width: 50vw;
      bottom: 50%;
      left: 50%;
      border-radius: 15px;
      transform: translate(-50%, 50%);
      animation: fadeIn 0.1s;

      .action-buttons {
        position: absolute;
      }
    }
  }

  .popup-blocker {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    z-index: 2;
  }

  @keyframes slideUp {
    0% {
      bottom: -50px;
    }
    100% {
      bottom: 0px;
    }
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default StyledPopupMenu;
