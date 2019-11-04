import React from "react";
import "./ModalContent.css";

function ModalContent({ toggleModal }) {
  return (
    <aside className="modal-content">
      <div>
        <button onClick={() => toggleModal()}>Close</button>
      </div>
    </aside>
  );
}

export default ModalContent;
