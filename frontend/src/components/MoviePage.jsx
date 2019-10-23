import React from "react";
import "./MoviePage.css";
import "./MoviePageTrailer.css";
import Modal from "react-modal";

class MoviePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({ modalIsOpen: true });
  }
  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div id="around">
        <Modal
          isOpen={this.state.modalIsOpen}
          className="customStyles"
          contentLabel="Example Modal"
          onRequestClose={this.closeModal}
        >
          <iframe
            src="https://www.youtube.com/embed/t433PEQGErc"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <button className="closeTrailer" onClick={this.closeModal}>
            close
          </button>
        </Modal>
        <div id="movieTrailerContainer">
          <img src={this.props.trailerThumb} onClick={this.openModal} />
        </div>
        <div id="movieTitleContainer">
          <div id="movieMainJacket">
            <img
              id="movieMainJacketImg"
              src={this.props.picture}
              alt={this.props.title}
            ></img>
          </div>
          <div id="movieDescAndIcons">
            <div id="movieDescription">
              <h2>{this.props.title}</h2>
              <p>
                <span className="oneRedWord">By</span> {this.props.by}
              </p>
              <p>
                <span className="oneRedWord">With</span> {this.props.with}...
              </p>
              <p>
                <span className="oneRedWord">Genre</span> {this.props.genre}
              </p>
              <p>
                <span className="oneRedWord">Released at</span>{" "}
                {this.props.releasedDate}
              </p>
              <p>
                <span className="oneRedWord">Runtime</span>{" "}
                {this.props.duration}
              </p>
            </div>
            <div id="movieIconsContainer">
              <img id="moviePlusIcons" src="./plusIcon.png" />
              <img id="movieLikeIcons" src="./likeIcon.png" />
              <img id="movieNavetIcons" src="./navetIcon.png" />
            </div>
          </div>
        </div>
        <div id="synopsisContainer">
          <hr />
          <h3>Synopsis</h3>
          <p>{this.props.synopsis}</p>
        </div>
      </div>
    );
  }
}

export default MoviePage;
