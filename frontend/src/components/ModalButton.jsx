import React from "react";

function ModalButton(props) {
  const { toggleModal, openBtnTxt } = props;
  return <button onClick={() => toggleModal()}>{openBtnTxt}</button>;
}

export default ModalButton;
