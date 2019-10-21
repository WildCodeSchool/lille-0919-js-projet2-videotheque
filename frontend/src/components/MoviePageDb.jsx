import React from "react";
import MoviePage from "./MoviePage";

const MovieList = [
  {
    title: "Joker",
    picture:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/lbGzEyESjANpOeD48aROlc3X7aa.jpg",
    duration: "2h32",
    genre: "Horror",
    synopsis:
      "Encore profondément marqué par le traumatisme qu'il a vécu, enfant, à l'Overlook Hotel, Dan Torrance a dû se battre pour tenter de trouver un semblant de sérénité. Mais quand il rencontre Abra, courageuse adolescente aux dons extrasensoriels, ses vieux démons resurgissent. Car la jeune fille, consciente que Dan a les mêmes pouvoirs qu'elle, a besoin de son aide : elle cherche à lutter contre la redoutable Rose Claque et sa tribu du Nœud Vrai qui se nourrissent des dons d'innocents comme elle pour conquérir l'immortalité. Formant une alliance inattendue, Dan et Abra s'engagent dans un combat sans merci contre Rose. Face à l'innocence de la jeune fille et à sa manière d'accepter son don, Dan n'a d'autre choix que de mobiliser ses propres pouvoirs, même s'il doit affronter ses peurs et réveiller les fantômes du passé… ",
    releasedDate: "1 january, 2019",
    with: "Anna Blanders, Jim Carrey",
    by: "John Café"
  }
];

const MoviePageDb = () => (
  <div className="MoviePageDb">
    <h1>Genre</h1>
    {MovieList.map(moviePage => (
      <MoviePage
        key={moviePage.title}
        title={moviePage.title}
        releasedDate={moviePage.releasedDate}
        with={moviePage.with}
        by={moviePage.by}
        genre={moviePage.genre}
        duration={moviePage.duration}
        picture={moviePage.picture}
        synopsis={moviePage.synopsis}
      />
    ))}
  </div>
);

export default MoviePageDb;
