import React from "react";

function ModalButton(props) {
  const { toggleModal } = props;
  return (
    <button onClick={() => toggleModal()}>
      <img id="logoUser" alt="logoUser" src="pictures/logoUser.jpg" />
    </button>
  );
}

export default ModalButton;
