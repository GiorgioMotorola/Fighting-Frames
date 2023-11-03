function createBoxOfficeChart(movie1, movie2) {
  const boxOffice1 = parseInt(movie1.BoxOffice.replace(/\D/g, ""), 10);
  const boxOffice2 = parseInt(movie2.BoxOffice.replace(/\D/g, ""), 10);

  const xValues = [movie1.Title, movie2.Title];
  const yValues = [boxOffice1, boxOffice2];
  const barColors = ["rgba(43, 45, 66, 0.7)", "rgba(43, 45, 66, 0.7)"];

  new Chart("box-office-chart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues,
          barThickness: 100,
          borderWidth: 2,
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Box Office",
        fontColor: "black",
        font: {
          color: "black",
        },
      },
    },
  });
}

function createImdbVotesChart(movie1, movie2) {
  const imdbVotes1 = parseInt(movie1.imdbVotes.replace(/\D/g, ""), 10);
  const imdbVotes2 = parseInt(movie2.imdbVotes.replace(/\D/g, ""), 10);

  const xValues = [movie1.Title, movie2.Title];
  const yValues = [imdbVotes1, imdbVotes2];
  const barColors = ["rgba(43, 45, 66, 0.7)", "rgba(43, 45, 66, 0.7)"];

  new Chart("imdb-votes-chart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues,
          barThickness: 100,
          borderWidth: 2,
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Number of Votes",
        fontColor: "black",
      },
    },
  });
}

export { createBoxOfficeChart, createImdbVotesChart };
