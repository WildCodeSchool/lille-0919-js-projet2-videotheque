import React from "react";
import "./style/MoviePage.css";
import "./style/MoviePageModalTrailer.css";
import Modal from "react-modal";
import ActorsList from "./ActorsList";

class MoviePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      img: "pictures/play.png"
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  }

  render() {
    return (
      <div id="around">
        <Modal
          ariaHideApp={false}
          isOpen={this.state.modalIsOpen}
          className="modalStyle"
          contentLabel="Example Modal"
          onRequestClose={this.closeModal}
        >
          <iframe
            src={this.props.trailer}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen="1"
          ></iframe>
          <button className="closeTrailer" onClick={this.toggleModal}>
            close
          </button>
        </Modal>
        <div id="movieTrailerContainer" onClick={this.toggleModal}>
          <img src={this.props.trailerThumb} className="trailerThumb" />
          <div>
            <img
              className="playIconOver"
              src={this.state.img}
              onMouseEnter={() => {
                this.setState({
                  img: "pictures/playHover.png"
                });
              }}
              onMouseOut={() => {
                this.setState({
                  img: "pictures/play.png"
                });
              }}
            />
          </div>
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
                <span className="oneRedWord">By </span>
                {this.props.by}
              </p>
              <p>
                <span className="oneRedWord">With </span>
                {this.props.with}...
              </p>
              <p>
                <span className="oneRedWord">Genre </span>
                {this.props.genre}
              </p>
              <p>
                <span className="oneRedWord">Released at </span>
                {this.props.releasedDate}
              </p>
              <p>
                <span className="oneRedWord">Runtime </span>
                {this.props.duration}
              </p>
            </div>
            <div className="movieIconsContainer">
              <img
                id="moviePlusIcons"
                src="./pictures/plusIcon.png"
                alt="plusIcon"
              />
              <img
                id="movieLikeIcons"
                src="./pictures/likeIcon.png"
                alt="likeIcon"
              />
              <img
                id="movieNavetIcons"
                src="./pictures/navetIcon.png"
                alt="navetIcon"
              />
            </div>
          </div>
          <div id="synopsisContainer">
            <hr />
            <h3>Synopsis</h3>
            <p>{this.props.synopsis}</p>
          </div>
          <ActorsList />
        </div>
      </div>
    );
  }
}

export default MoviePage;
