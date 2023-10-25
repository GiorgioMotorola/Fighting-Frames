function createBoxOfficeChart(movie1, movie2) {
  const boxOffice1 = parseInt(movie1.BoxOffice.replace(/\D/g, ""), 10);
  const boxOffice2 = parseInt(movie2.BoxOffice.replace(/\D/g, ""), 10);

  const xValues = [movie1.Title, movie2.Title];
  const yValues = [boxOffice1, boxOffice2];
  const barColors = ["rgba(10, 135, 74, 0.5", "rgba(10, 131, 135, 0.5)"];

  new Chart("box-office-chart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues,
          barThickness: 100,
          backgroundColor: "rgba(248,243,43,0.2)",
          borderColor: "rgba(248,243,43,1)",
          borderWidth: 2,
          hoverBackgroundColor: "rgba(248,243,43,0.4)",
          hoverBorderColor: "rgba(248,243,43,1)",
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
        fontColor: "white",
      },
    },
  });
}

function createImdbVotesChart(movie1, movie2) {
  const imdbVotes1 = parseInt(movie1.imdbVotes.replace(/\D/g, ""), 10);
  const imdbVotes2 = parseInt(movie2.imdbVotes.replace(/\D/g, ""), 10);

  const xValues = [movie1.Title, movie2.Title];
  const yValues = [imdbVotes1, imdbVotes2];
  const barColors = ["rgba(10, 135, 74, 0.5", "rgba(10, 131, 135, 0.5)"];

  new Chart("imdb-votes-chart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues,
          barThickness: 100,
          backgroundColor: "rgba(248,243,43,0.2)",
          borderColor: "rgba(248,243,43,1)",
          borderWidth: 2,
          hoverBackgroundColor: "rgba(248,243,43,0.4)",
          hoverBorderColor: "rgba(248,243,43,1)",
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
        fontColor: "white",
      },
    },
  });
}

export { createBoxOfficeChart, createImdbVotesChart };
