import { GET } from "./api.js";
import { qS,cE,movieCardGen,qSA,modalGen } from "./utils.js";
const topReatedEl = qS(".top-rated");

GET("movie", "top_rated").then
((data)=>data.results.map(movie=>topReatedEl.append(movieCardGen(movie))))
.then(() => {
    const movieEls = qSA(".movie");

    movieEls.forEach((movie) =>
      movie.addEventListener("click", () =>
        GET("movie", movie.id).then((selectedMovie) => {
          modalEl.appendChild(modalGen(selectedMovie));
          modalEl.style.display = "flex";
        })
      )
    );
  });

modalOverlay.addEventListener("click", () => {
  const modalMovieEl = qS(".movie-modal");

  modalEl.style.display = "none";
  modalMovieEl.remove();
});
