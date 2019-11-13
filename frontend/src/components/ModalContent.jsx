import React from "react";
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";
import "./style/LogInForm.css";

class ModalContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { signUpActive: false };
  }

  toggleSignUp = () => {
    this.setState({ signUpActive: !this.state.signUpActive });
  };

  render() {
    const { toggleModal, handleLogIn, notification } = this.props;
    return (
      <aside className="modal-content">
        <div>
          {this.state.signUpActive ? (
            <SignUpForm
              toggleSignUp={this.toggleSignUp}
              toggleModal={toggleModal}
              handleLogIn={handleLogIn}
              notification={notification}
            />
          ) : (
            <LogInForm
              toggleSignUp={this.toggleSignUp}
              toggleModal={toggleModal}
              handleLogIn={handleLogIn}
              notification={notification}
            />
          )}

          <button className="buttonClose" onClick={() => toggleModal()}>
            <img alt="close log In" src="/pictures/Red-Cross.png" />
          </button>
        </div>
      </aside>
    );
  }
}

export default ModalContent;
