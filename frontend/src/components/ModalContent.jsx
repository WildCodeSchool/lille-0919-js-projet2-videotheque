import React from "react";
import LogInForm from "./LogInForm";
import "./style/LogInForm.css";

function ModalContent({ toggleModal }) {
  return (
    <aside className="modal-content">
      <div>
        <LogInForm />

        <button className="buttonClose" onClick={() => toggleModal()}>
          Close
        </button>
      </div>
    </aside>
  );
}

export default ModalContent;
