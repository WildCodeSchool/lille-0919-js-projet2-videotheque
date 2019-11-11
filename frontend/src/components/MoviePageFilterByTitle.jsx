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
      videoInfo: {
        results: [""]
      },
      modalIsOpen: false,
      img: "/pictures/play.png"
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  };

  componentDidMount = () => {
    console.log(this.props);
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
    Axios.get(
      `http://api.themoviedb.org/3/movie/${id}/videos?api_key=495d98b77df65d47fbf7eba028518ed7`
    ).then(({ data }) => {
      this.setState({ videoInfo: data });
    });
  };

  addIconsFunction = iconId => {
    let iconType = "";
    switch (iconId) {
      case "toWatch":
        iconType = iconId;
        break;
      case "favorite":
        iconType = iconId;
        break;
      case "dislike":
        iconType = iconId;
        break;
    }

    const { isLoggedIn, user } = this.props;
    if (isLoggedIn) {
      const movieId = this.props.match.params.id;
      const oldArray = user.favoriteMovies;

      if (oldArray.includes(movieId)) {
        console.log("Movie already in list.");
        return;
      }
      const newArray = [...oldArray, movieId];

      Axios({
        method: "patch",
        url: `http://localhost:5000/users/${user.id}`,
        headers: { "content-type": "application/json; charset=utf-8" },
        data: {
          favoriteMovies: newArray
        }
      }).then(({ data }) => {
        this.props.updateUser(data);
      });
    } else {
      console.log("PLease log in, connard!");
    }
  };

  render() {
    console.log(this.props.user);
    //const {movieInfo} = this.state;

    const movieInfo = this.state.movieInfo;
    const videoInfo = this.state.videoInfo;

    return (
      <div id="around">
        <Modal
          ariaHideApp={false}
          isOpen={this.state.modalIsOpen}
          className="modalStyle"
          contentLabel="Trailer Modal"
          onRequestClose={this.toggleModal}
        >
          <iframe
            title="Trailer"
            src={`https://www.youtube-nocookie.com/embed/${videoInfo.results
              .filter((video, i) => {
                return i === 1;
              })
              .map((video, i) => {
                return video.key;
              })}`}
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
            alt={movieInfo.title}
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

            {/* {this.props.isLoggedIn && ( */}
            <div className="movieIconsContainer">
              <img
                id="moviePlusIcons"
                src="/pictures/plusIcon.png"
                alt="plusIcon"
                onClick={() => this.addIconsFunction("toWatch")}
              />
              <img
                id="movieLikeIcons"
                src="/pictures/likeIcon.png"
                alt="likeIcon"
                onClick={() => this.addIconsFunction("favorite")}
              />
              <img
                id="movieNavetIcons"
                src="/pictures/navetIcon.png"
                alt="navetIcon"
                onClick={() => this.addIconsFunction("dislike")}
              />
            </div>
            {/* )} */}
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
