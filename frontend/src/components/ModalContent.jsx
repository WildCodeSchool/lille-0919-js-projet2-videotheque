import React from "react";
import LogInForm from "./LogInForm";

function ModalContent({ toggleModal }) {
  return (
    <aside className="modal-content">
      <div>
        <LogInForm />

        <button onClick={() => toggleModal()}>Close</button>
      </div>
    </aside>
  );
}

export default ModalContent;
