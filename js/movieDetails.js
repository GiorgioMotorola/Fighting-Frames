function btn() {
  document.addEventListener("DOMContentLoaded", function () {
    const toggleChartsButton = document.getElementById("toggleChartsButton");
    const mainBarContainer = document.querySelector(".main-bar-container");
    const boxOfficeChartContainer = document.getElementById("box-office-chart");
    const imdbVotesChartContainer = document.getElementById("imdb-votes-chart");

    toggleChartsButton.addEventListener("click", function () {
      if (boxOfficeChartContainer.style.display === "none") {
        boxOfficeChartContainer.style.display = "block";
        imdbVotesChartContainer.style.display = "block";
        mainBarContainer.style.height = "auto";
      } else {
        boxOfficeChartContainer.style.display = "none";
        imdbVotesChartContainer.style.display = "none";
        mainBarContainer.style.height = "0";
      }
    });
  });
}

export { btn };
