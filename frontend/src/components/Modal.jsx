import React from "react";
import ModalButton from "./ModalButton";
import ModalContent from "./ModalContent";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { buttonTxt } = this.props;
    console.log(this.state.isOpen);
    return (
      <>
        <ModalButton toggleModal={this.toggleModal} openBtnTxt={buttonTxt} />
        {this.state.isOpen && <ModalContent toggleModal={this.toggleModal} />}
      </>
    );
  }
}

export default Modal;
