import { imdbID } from "./imdbID.js";
import { apiKey } from "./apiKey.js";
import { createBoxOfficeChart, createImdbVotesChart } from "./chart.js";
import { openModal, closeAndReloadModal } from "./modal.js";
import { btn } from "./movieDetails.js";

let score = 0;
let movieBatch = [];
let highScore = 0;

function getRandomImdbID() {
  const randomIndex = Math.floor(Math.random() * imdbID.length);
  const randomImdbID = imdbID[randomIndex];
  imdbID.splice(randomIndex, 1);
  return randomImdbID;
}

async function getRandomMovie() {
  const randomImdbID = getRandomImdbID();
  const url = `${apiKey}&i=${randomImdbID}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("lol", error);
  }
}

function getMovieBatch() {
  movieBatch = [];
  const promises = [];

  for (let i = 0; i < 2; i++) {
    const promise = getRandomMovie().then((movie) => {
      movieBatch.push(movie);
    });

    promises.push(promise);
  }

  Promise.all(promises).then(() => {
    compareMovies(movieBatch[0], movieBatch[1]);
  });
}

function compareMovies(movie1, movie2) {
  const movieList = document.querySelector(".movieList");
  movieList.innerHTML = "";

  const movieInfo1 = createMovieInfo(movie1);
  const movieInfo2 = createMovieInfo(movie2);

  movieInfo1.addEventListener("click", () =>
    handleGuess(1, movie1.imdbRating, movie2.imdbRating)
  );
  movieInfo2.addEventListener("click", () =>
    handleGuess(2, movie1.imdbRating, movie2.imdbRating)
  );

  movieList.appendChild(movieInfo1);
  movieList.appendChild(movieInfo2);

  const moviePlot1 = document.getElementById("movie-plot-1");
  const moviePlot2 = document.getElementById("movie-plot-2");
  const movieTitle1 = document.getElementById("movie-title-1");
  const movieTitle2 = document.getElementById("movie-title-2");
  const movieYear1 = document.getElementById("movie-year-1");
  const movieYear2 = document.getElementById("movie-year-2");
  const movieRated1 = document.getElementById("movie-rated-1");
  const movieRated2 = document.getElementById("movie-rated-2");
  const movieReleased1 = document.getElementById("movie-released-1");
  const movieReleased2 = document.getElementById("movie-released-2");
  const movieRuntime1 = document.getElementById("movie-runtime-1");
  const movieRuntime2 = document.getElementById("movie-runtime-2");
  const movieGenre1 = document.getElementById("movie-genre-1");
  const movieGenre2 = document.getElementById("movie-genre-2");
  const movieDirector1 = document.getElementById("movie-director-1");
  const movieDirector2 = document.getElementById("movie-director-2");
  const movieWriter1 = document.getElementById("movie-writer-1");
  const movieWriter2 = document.getElementById("movie-writer-2");
  const movieActors1 = document.getElementById("movie-actors-1");
  const movieActors2 = document.getElementById("movie-actors-2");
  const movieAwards1 = document.getElementById("movie-awards-1");
  const movieAwards2 = document.getElementById("movie-awards-2");

  movieTitle1.textContent = movie1.Title;
  movieTitle2.textContent = movie2.Title;

  moviePlot1.innerHTML =
    "<span class='movie-detail-description'>PLOT:&nbsp;</span> " + movie1.Plot;
  moviePlot2.innerHTML =
    "<span class='movie-detail-description'>PLOT:&nbsp;</span> " + movie2.Plot;

  movieYear1.innerHTML =
    "<span class='movie-detail-description'>YEAR:&nbsp;</span> " + movie1.Year;
  movieYear2.innerHTML =
    "<span class='movie-detail-description'>YEAR:&nbsp;</span> " + movie2.Year;

  movieRated1.innerHTML =
    "<span class='movie-detail-description'>RATED:&nbsp;</span> " +
    movie1.Rated;
  movieRated2.innerHTML =
    "<span class='movie-detail-description'>RATED:&nbsp;</span> " +
    movie2.Rated;

  movieReleased1.innerHTML =
    "<span class='movie-detail-description'>RELEASED:&nbsp;</span> " +
    movie1.Released;
  movieReleased2.innerHTML =
    "<span class='movie-detail-description'>RELEASED:&nbsp;</span> " +
    movie2.Released;

  movieRuntime1.innerHTML =
    "<span class='movie-detail-description'>RUNTIME:&nbsp;</span> " +
    movie1.Runtime;
  movieRuntime2.innerHTML =
    "<span class='movie-detail-description'>RUNTIME:&nbsp;</span> " +
    movie2.Runtime;

  movieGenre1.innerHTML =
    "<span class='movie-detail-description'>GENRE:&nbsp;</span> " +
    movie1.Genre;
  movieGenre2.innerHTML =
    "<span class='movie-detail-description'>GENRE:&nbsp;</span> " +
    movie2.Genre;

  movieDirector1.innerHTML =
    "<span class='movie-detail-description'>DIRECTOR:&nbsp;</span> " +
    movie1.Director;
  movieDirector2.innerHTML =
    "<span class='movie-detail-description'>DIRECTOR:&nbsp;</span> " +
    movie2.Director;

  movieWriter1.innerHTML =
    "<span class='movie-detail-description'>WRITER:&nbsp;</span> " +
    movie1.Writer;
  movieWriter2.innerHTML =
    "<span class='movie-detail-description'>WRITER:&nbsp;</span> " +
    movie2.Writer;

  movieActors1.innerHTML =
    "<span class='movie-detail-description'>ACTORS:&nbsp;</span> " +
    movie1.Actors;
  movieActors2.innerHTML =
    "<span class='movie-detail-description'>ACTORS:&nbsp;</span> " +
    movie2.Actors;

  movieAwards1.innerHTML =
    "<span class='movie-detail-description'>AWARDS:&nbsp;</span> " +
    movie1.Awards;
  movieAwards2.innerHTML =
    "<span class='movie-detail-description'>AWARDS:&nbsp;</span> " +
    movie2.Awards;

  setTimeout(function () {
    createBoxOfficeChart(movie1, movie2);
    createImdbVotesChart(movie1, movie2);
  }, 1350);
}

function createMovieInfo(movie) {
  const movieInfo = document.createElement("div");
  movieInfo.classList.add("movie-info");

  const moviePoster = document.createElement("img");
  moviePoster.src = movie.Poster;
  moviePoster.classList.add("movie-poster");
  moviePoster.addEventListener("click", () => {
    openModal(movieBatch);
  });

  const movieTitle = document.createElement("div");
  movieTitle.classList.add("movie-title");
  movieTitle.textContent = movie.Title;

  movieInfo.appendChild(movieTitle);
  movieInfo.appendChild(moviePoster);

  return movieInfo;
}

function handleGuess(userGuess, rating1, rating2) {
  const resultMessage = document.createElement("div");
  resultMessage.classList.add("result-message");

  const correctAnswer = rating1 > rating2 ? 1 : 2;
  const isCorrect = userGuess === correctAnswer;

  if (isCorrect) {
    score += 1;
    resultMessage.textContent = "Correct!";
    resultMessage.style.color = "green";
  } else {
    score = 0;
    resultMessage.textContent = "Wrong!";
    resultMessage.style.color = "red";
  }

  setTimeout(function () {
    const appendToModal = document.getElementById("right-wrong");
    appendToModal.appendChild(resultMessage);

    resultMessage.style.opacity = 0;

    setTimeout(function () {
      resultMessage.style.opacity = 1;
    }, 1800);
  }, 0);

  saveScoreToLocalStorage();
}

/* local storage functions*/

function saveScoreToLocalStorage() {
  localStorage.setItem("score", score.toString());

  if (score > highScore) {
    highScore = score;
    localStorage.setItem("highScore", highScore.toString());
  }
}

function getHighScoreFromLocalStorage() {
  const storedHighScore = localStorage.getItem("highScore");
  if (storedHighScore) {
    highScore = parseInt(storedHighScore, 10);
  }
}

function updateHighScore() {
  const highScoreElement = document.getElementById("highScore");
  highScoreElement.textContent = "Best: " + highScore;
}

getHighScoreFromLocalStorage();
updateHighScore();
function getScoreFromLocalStorage() {
  const storedScore = localStorage.getItem("score");
  if (storedScore) {
    score = parseInt(storedScore, 10);
  }
}
/* local storage functions*/

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  setTimeout(() => {
    loader.classList.add("loader-hidden");
    loader.addEventListener("transitionend", () => {
      loader.style.display = "none";
    });
  }, 1400);
});

btn();
getScoreFromLocalStorage();
const scoreElement = document.getElementById("score");
scoreElement.textContent = "Score: " + score;
window.addEventListener("load", getMovieBatch);
window.localStorage.removeItem("score");
