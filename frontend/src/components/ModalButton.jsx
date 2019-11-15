import React from "react";

function ModalButton(props) {
  const { toggleModal } = props;
  return (
    <div>
      <img
        id="logoUser"
        alt="logoUser"
        src="/pictures/logoUser.png"
        onClick={() => toggleModal()}
      />
    </div>
  );
}

export default ModalButton;
