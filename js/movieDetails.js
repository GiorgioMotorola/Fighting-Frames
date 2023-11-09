function btn() {
  document.addEventListener("DOMContentLoaded", function () {
    const toggleChartsButton = document.getElementById("toggleChartsButton");
    const mainBarContainer = document.querySelector(".main-bar-container");
    const boxOfficeChartContainer = document.getElementById("box-office-chart");
    const imdbVotesChartContainer = document.getElementById("imdb-votes-chart");
    const plotContainer1 = document.getElementById("movie-plot-1");
    const plotContainer2 = document.getElementById("movie-plot-2");
    const titleContainer1 = document.getElementById("movie-title-1");
    const titleContainer2 = document.getElementById("movie-title-2");
    const yearContainer1 = document.getElementById("movie-year-1");
    const yearContainer2 = document.getElementById("movie-year-2");
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
    const detailsContainer1 = document.getElementById("details-container-1");
    const detailsContainer2 = document.getElementById("details-container-2");

    toggleChartsButton.addEventListener("click", function () {
      if (boxOfficeChartContainer.style.display === "none") {
        boxOfficeChartContainer.style.display = "block";
        imdbVotesChartContainer.style.display = "block";
        plotContainer1.style.display = "block";
        plotContainer2.style.display = "block";
        titleContainer1.style.display = "block";
        titleContainer2.style.display = "block";
        yearContainer1.style.display = "block";
        yearContainer2.style.display = "block";
        movieRated1.style.display = "block";
        movieRated2.style.display = "block";
        movieReleased1.style.display = "block";
        movieReleased2.style.display = "block";
        movieRuntime1.style.display = "block";
        movieRuntime2.style.display = "block";
        movieGenre1.style.display = "block";
        movieGenre2.style.display = "block";
        movieDirector1.style.display = "block";
        movieDirector2.style.display = "block";
        movieWriter1.style.display = "block";
        movieWriter2.style.display = "block";
        movieActors1.style.display = "block";
        movieActors2.style.display = "block";
        movieAwards1.style.display = "block";
        movieAwards2.style.display = "block";
        detailsContainer1.style.display = "block";
        detailsContainer2.style.display = "block";
        mainBarContainer.style.height = "auto";
      } else {
        boxOfficeChartContainer.style.display = "none";
        imdbVotesChartContainer.style.display = "none";
        plotContainer1.style.display = "none";
        plotContainer2.style.display = "none";
        titleContainer1.style.display = "none";
        titleContainer2.style.display = "none";
        yearContainer1.style.display = "none";
        yearContainer2.style.display = "none";
        movieRated1.style.display = "none";
        movieRated2.style.display = "none";
        movieReleased1.style.display = "none";
        movieReleased2.style.display = "none";
        movieRuntime1.style.display = "none";
        movieRuntime2.style.display = "none";
        movieGenre1.style.display = "none";
        movieGenre2.style.display = "none";
        movieDirector1.style.display = "none";
        movieDirector2.style.display = "none";
        movieWriter1.style.display = "none";
        movieWriter2.style.display = "none";
        movieActors1.style.display = "none";
        movieActors2.style.display = "none";
        movieAwards1.style.display = "none";
        movieAwards2.style.display = "none";
        detailsContainer1.style.display = "none";
        detailsContainer2.style.display = "none";
        mainBarContainer.style.height = "0";
      }
    });
  });
}

function movieDetailText(movie1, movie2) {
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
}

export { btn, movieDetailText };
