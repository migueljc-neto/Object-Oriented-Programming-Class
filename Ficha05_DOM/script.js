// elements
// înputs
const nameInput = document.querySelector("#nameInput");
const yearInput = document.querySelector("#yearInput");
const genreInput = document.querySelector("#genreInput");
const platformInput = document.querySelector("#platformInput");
const ratingInput = document.querySelector("#ratingInput");

let lGames = [];

const addGame = function (e) {
  e.preventDefault();
  let game = {
    name: nameInput.value,
    year: yearInput.value,
    genre: genreInput.value,
  };

  console.log(game);
};
