import React, { useState } from "react";
import "../CSS/FAQAccordion.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordionItem">
      <div className="accordionTitle" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div className="accordionIcons">
          <div>
            {isActive ? (
              <RemoveCircleOutlineIcon className="plusMinusIcon" />
            ) : (
              <AddCircleOutlineIcon className="plusMinusIcon" />
            )}
          </div>
        </div>
      </div>
      {isActive && <div className="accordionContent">{content}</div>}
      <hr className="FAQhr"></hr>
    </div>
  );
};

export default Accordion;
