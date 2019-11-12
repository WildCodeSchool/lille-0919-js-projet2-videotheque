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
    const { toggleModal, handleLogIn } = this.props;
    return (
      <aside className="modal-content">
        <div>
          {this.state.signUpActive ? (
            <SignUpForm
              toggleSignUp={this.toggleSignUp}
              toggleModal={toggleModal}
              handleLogIn={handleLogIn}
            />
          ) : (
            <LogInForm
              toggleSignUp={this.toggleSignUp}
              toggleModal={toggleModal}
              handleLogIn={handleLogIn}
            />
          )}

          <button className="buttonClose" onClick={() => toggleModal()}>
            Close
          </button>
        </div>
      </aside>
    );
  }
}

export default ModalContent;
