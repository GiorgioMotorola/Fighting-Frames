function toggleCharts(buttonId) {
  document.addEventListener("DOMContentLoaded", function () {
    const toggleChartsButton = document.getElementById(buttonId);
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
        setDisplay("block");
        mainBarContainer.style.height = "auto";
      } else {
        setDisplay("none");
        mainBarContainer.style.height = "0";
      }
    });

    function setDisplay(displayValue) {
      const elementsToDisplay = [
        boxOfficeChartContainer,
        imdbVotesChartContainer,
        plotContainer1,
        plotContainer2,
        titleContainer1,
        titleContainer2,
        yearContainer1,
        yearContainer2,
        movieRated1,
        movieRated2,
        movieReleased1,
        movieReleased2,
        movieRuntime1,
        movieRuntime2,
        movieGenre1,
        movieGenre2,
        movieDirector1,
        movieDirector2,
        movieWriter1,
        movieWriter2,
        movieActors1,
        movieActors2,
        movieAwards1,
        movieAwards2,
        detailsContainer1,
        detailsContainer2,
      ];

      elementsToDisplay.forEach((element) => {
        element.style.display = displayValue;
      });
    }
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

export { movieDetailText, toggleCharts };
