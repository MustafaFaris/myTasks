import React, { FC, ReactElement } from "react";
import StyledPopupMenu from "./popupMenu.style";

interface Props {
  title: string;
  actionButtons: ReactElement;
  onClose: () => void;
}

const PopupMenu: FC<Props> = ({ title, actionButtons, onClose, children }) => {
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

export default PopupMenu;
