import "./App.css";
import { MovieBoard } from "./components/displayList";
import MovieList from "./data/movies";

function App() {
  let array = MovieList.map((currentItem, index, array) => {
    return {
      key: index,
      image: currentItem["image"],
      title: currentItem["title"],
      year: currentItem["year"],
      runtime: currentItem["runtime"],
      genres: currentItem["genres"],
      rating: currentItem["imdbRating"],
      votes: currentItem["imdbVotes"],
    };
  });
  return (
    <div className="App">
      <section className="movie-list-section">
        {array.map((currentItem, index) => {
          return (
            <MovieBoard
              key={currentItem.key}
              image={currentItem.image}
              title={currentItem.title}
              year={currentItem.year}
              runtime={currentItem.runtime}
              genres={currentItem.genres}
              rating={currentItem.imdbRating}
              vote={currentItem.imdbVotes}
            ></MovieBoard>
          );
        })}
      </section>
    </div>
  );
}

export default App;
