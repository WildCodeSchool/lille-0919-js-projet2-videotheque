import React from "react";
import Axios from "axios";
import "./style/MoviePage.css";
import "./style/MoviePageModalTrailer.css";
import Modal from "react-modal";
import ActorsList from "./ActorsList";

class MoviePageFilterByTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieInfo: {
        title: "",
        overview: "",
        poster_path: "",
        release_date: "",
        genres: []
      },
      castInfo: {
        cast: [],
        crew: []
      },
      modalIsOpen: false,
      img: "/pictures/play.png"
    };
  }

  toggleModal = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  };

  componentDidMount = () => {
    const id = this.props.match.params.id;
    Axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=495d98b77df65d47fbf7eba028518ed7`
    ).then(({ data }) => {
      this.setState({ movieInfo: data });
    });
    Axios.get(
      `http://api.themoviedb.org/3/movie/${id}/credits?api_key=495d98b77df65d47fbf7eba028518ed7`
    ).then(({ data }) => {
      this.setState({ castInfo: data });
    });
  };

  render() {
    //const {movieInfo} = this.state;
    const movieInfo = this.state.movieInfo;
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
            title="modal"
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
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieInfo.backdrop_path}`}
            className="trailerThumb"
            alt={this.props.trailerThumb}
          />
          <div>
            <img
              alt={this.state.img}
              className="playIconOver"
              src={this.state.img}
              onMouseEnter={() => {
                this.setState({
                  img: "/pictures/playHover.png"
                });
              }}
              onMouseOut={() => {
                this.setState({
                  img: "/pictures/play.png"
                });
              }}
            />
          </div>
        </div>
        <div id="movieTitleContainer">
          <div id="movieMainJacket">
            <img
              id="movieMainJacketImg"
              src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`}
              alt={this.props.title}
            ></img>
          </div>
          <div id="movieDescAndIcons">
            <div id="movieDescription">
              <h2>{movieInfo.title}</h2>
              <p>
                <span className="oneRedWord">By </span>
                {this.state.castInfo.crew
                  .filter((person, i) => {
                    return i === 1;
                  })
                  .map((person, i) => {
                    return person.name;
                  })}
              </p>
              <p>
                <span className="oneRedWord">Genre </span>
                {movieInfo.genres.map(genre => {
                  return genre.name + " ";
                })}
              </p>
              <p>
                <span className="oneRedWord">Released at </span>
                {movieInfo.release_date}
              </p>
              <p>
                <span className="oneRedWord">Runtime </span>
                {movieInfo.runtime} minutes
              </p>
            </div>
            <div className="movieIconsContainer">
              <img
                onClick={() => this.addWatch}
                id="moviePlusIcons"
                src="/pictures/plusIcon.png"
                alt="plusIcon"
              />
              <img
                onClick={() => this.addFavorites}
                id="movieLikeIcons"
                src="/pictures/likeIcon.png"
                alt="likeIcon"
              />
              <img
                onClick={() => this.addTurnips}
                id="movieNavetIcons"
                src="/pictures/navetIcon.png"
                alt="navetIcon"
              />
            </div>
          </div>
        </div>
        <div id="synopsisContainer">
          <hr />
          <h3>Synopsis</h3>
          <p>{movieInfo.overview}</p>
        </div>
        <ActorsList castInfo={this.state.castInfo} />
      </div>
    );
  }
}

export default MoviePageFilterByTitle;
