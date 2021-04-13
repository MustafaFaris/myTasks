import React from "react";
import propTypes from "prop-types";
import StyledPopupMenu from "./popupMenu.style";

const PopupMenu = ({ title, children, actionButtons, onClose }) => {
  return (
    <StyledPopupMenu>
      <div className="popup-menu">
        <div className="popup-title">{title}</div>
        {children}
        <div className="action-buttons">{actionButtons}</div>
      </div>
      <div className="popup-blocker" onClick={onClose} />
    </StyledPopupMenu>
  );
};

PopupMenu.propTypes = {
  title: propTypes.string,
  actionButtons: propTypes.any,
  onClose: propTypes.func,
  children: propTypes.any,
};

export default PopupMenu;
