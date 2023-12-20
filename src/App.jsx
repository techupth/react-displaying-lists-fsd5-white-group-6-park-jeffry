/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "./App.css";
import movies from "./data/movies";

function App() {
  return (
    <div className="App">
      <section
        className="movie-list-section"
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: "Kanit", sans-serif;
          font-size: 2.5rem;
          font-style: normal;
          font-weight: 400;
          margin-bottom: 5rem;
        `}
      >
        <h1>Movie List Section</h1>
        {movies.map((movie, index) => {
          let year;
          if (movie.year.includes("–")) {
            year = movie.year.split("–");
          }

          return (
            <div
              key={index}
              className="movieCardContainer"
              css={css`
                display: flex;
                width: 25rem;
                height: 15.625rem;
                border-radius: 0.625rem;
                background: #fff;
                box-shadow: 0px 4px 40px 0px rgba(145, 124, 124, 0.25);
                margin-top: 5rem;
              `}
            >
              <div
                css={css`
                  width: 35%;
                `}
              >
                <img
                  src={movie.image}
                  alt={`Movie ${index + 1}`}
                  css={css`
                    width: 6.375rem;
                    height: 6.25rem;
                    border-radius: 0.625rem;
                    background: url(<path-to-image>), lightgray 50% / cover no-repeat;
                    object-fit: cover;
                    margin: 1.13rem 17.75rem 8.25rem 0.87rem;
                  `}
                />
              </div>
              <div
                css={css`
                  width: 65%;
                  display: flex;
                  flex-direction: column;
                  width: 15.4375rem;
                  height: 13.1875rem;
                  margin: 0.5rem 2.12rem 1.13rem 0rem;
                  color: #181818;
                  font-family: Kanit;
                  font-size: 1rem;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 2.125rem;
                `}
              >
                <div>Title: {movie.title}</div>
                <div>Year: {year}</div>
                <div>Runtime: {movie.runtime}</div>
                <div>
                  Genres:{" "}
                  <span
                    css={css`
                      width: 4.25rem;
                      height: 1.6875rem;
                      border-radius: 0.625rem;
                      background: #eaac99;
                      padding: 0.2rem 0.7rem 0.2rem 0.7rem;
                    `}
                  >
                    {movie.genres[0]}
                  </span>{" "}
                  <span
                    css={css`
                      width: 4.25rem;
                      height: 1.6875rem;
                      border-radius: 0.625rem;
                      background: #eaac99;
                      padding: 0.2rem 0.7rem 0.2rem 0.7rem;
                    `}
                  >
                    {movie.genres[1]}
                  </span>
                </div>
                <div>IMDB Ratings: {movie.imdbRating}</div>
                <div>IMDB Votes: {movie.imdbVotes}</div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
