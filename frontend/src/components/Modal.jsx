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
    return (
      <>
        <ModalButton toggleModal={this.toggleModal} />
        {this.state.isOpen && (
          <ModalContent
            toggleModal={this.toggleModal}
            handleLogIn={this.props.handleLogIn}
            notification={this.props.notification}
          />
        )}
      </>
    );
  }
}

export default Modal;
