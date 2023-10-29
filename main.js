import { imdbID } from "./js/imdbID.js";
import { apiKey } from "./js/apiKey.js";
import { createBoxOfficeChart, createImdbVotesChart } from "./js/chart.js";

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
    openModal();
  });

  const movieTitle = document.createElement("div");
  movieTitle.classList.add("movie-title");
  movieTitle.textContent = movie.Title;
  movieInfo.appendChild(movieTitle);
  movieInfo.appendChild(moviePoster);

  return movieInfo;
}

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

  const appendToModal = document.getElementById("right-wrong");
  appendToModal.appendChild(resultMessage);

  saveScoreToLocalStorage();
}

function openModal() {
  var modal = document.getElementById("myModal");
  var imdbRating1Element = document.getElementById("imdbRating1");
  var imdbRating2Element = document.getElementById("imdbRating2");
  var imdbPoster1Element = document.getElementById("imdbPoster1");
  var imdbPoster2Element = document.getElementById("imdbPoster2");

  const imdbRating1 = movieBatch[0].imdbRating;
  const imdbRating2 = movieBatch[1].imdbRating;
  imdbPoster1Element.src = movieBatch[0].Poster;
  imdbPoster2Element.src = movieBatch[1].Poster;

  imdbRating1Element.textContent = imdbRating1;
  imdbRating2Element.textContent = imdbRating2;
  imdbPoster1Element.textContent = imdbPoster1;
  imdbPoster2Element.textContent = imdbPoster2;

  modal.style.display = "block";

  setTimeout(function () {
    closeAndReloadModal();
  }, 50000);

  var closeModalBtn = document.getElementById("closeModal");
  closeModalBtn.addEventListener("click", () => {
    closeAndReloadModal();
  });

  closeModalBtn.addEventListener("click", () => {
    closeAndReloadModal();
  });

  document.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeAndReloadModal();
    }
  });
}

function closeAndReloadModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
  location.reload();
}

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  setTimeout(() => {
    loader.classList.add("loader-hidden");
    loader.addEventListener("transitionend", () => {
      loader.style.display = "none";
    });
  }, 1400);
});

getScoreFromLocalStorage();

const scoreElement = document.getElementById("score");
scoreElement.textContent = "Score: " + score;
window.addEventListener("load", getMovieBatch);
window.localStorage.removeItem("score");
