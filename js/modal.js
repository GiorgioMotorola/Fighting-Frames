function openModal(movieBatch) {
  var modal = document.getElementById("myModal");
  var imdbRating1Element = document.getElementById("imdbRating1");
  var imdbRating2Element = document.getElementById("imdbRating2");
  var imdbPoster1Element = document.getElementById("imdbPoster1");
  var imdbPoster2Element = document.getElementById("imdbPoster2");

  const imdbRating1 = movieBatch[0].imdbRating;
  const imdbRating2 = movieBatch[1].imdbRating;
  imdbPoster1Element.src = movieBatch[0].Poster;
  imdbPoster2Element.src = movieBatch[1].Poster;

  imdbRating1Element.textContent = "0";
  imdbRating2Element.textContent = "0";

  const updateCounter = (element, target) => {
    let current = 0;
    const increment = target / 250;

    const update = () => {
      if (current < target) {
        current += increment;
        element.textContent = current.toFixed(1);
        setTimeout(update, 5);
      } else {
        element.textContent = target;
      }
    };

    update();
  };

  updateCounter(imdbRating1Element, imdbRating1);
  updateCounter(imdbRating2Element, imdbRating2);

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

export { openModal, closeAndReloadModal };
