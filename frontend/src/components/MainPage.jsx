import React from "react";
import "./style/MainPage.css";
import MainPageCard from "./MainPageCard";
import axios from "axios";
import Search from "./Search";
import "./style/SearchBar.css";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      query: ""
    };

    this.onInput = this.onInput.bind(this);
  }

  onInput(query) {
    this.setState({
      query
    });

    this.searchMovie(query);
  }

  componentDidMount() {
    this.searchMovie();
  }

  searchMovie(query) {
    let url;
    if (query) {
      url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=495d98b77df65d47fbf7eba028518ed7&language=en-US&include_adult=false`;
      axios.get(url).then(({ data }) => {
        this.setState({
          movies: data.results
        });
      });
    } else {
      for (let i = 1; i <= 2; i++) {
        url = `https://api.themoviedb.org/3/movie/popular?api_key=495d98b77df65d47fbf7eba028518ed7&language=en-US`;
        axios.get(url + `&page=${i}`).then(({ data }) => {
          const { results } = data;
          if (query) {
            this.setState({
              movies: data.results
            });
          } else {
            let tmpMovies = this.state.movies;
            tmpMovies.push(...results);
            this.setState({
              movies: tmpMovies
            });
          }
        });
      }
    }
  }

  render() {
    const { movies, query } = this.state;
    const isSearched = query => item =>
      !query || item.title.toLowerCase().includes(query.toLowerCase());

    return (
      <div className="main-homepage">
        <div className="search-container">
          <Search
            query={query}
            onInput={this.onInput}
            placeholder="Search for Movie Title …"
          />
        </div>
        <div className="main-poster">
          {this.state.movies
            .filter(movie => {
              return (movie.poster_path !== null) & (movie.id !== 399897);
            })
            .sort((a, b) => a.movie1 > b.movie2)
            .map(movie => {
              return (
                <MainPageCard
                  movieData={movie}
                  key={movie.id}
                  movies={movies.filter(isSearched(query))}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default MainPage;
