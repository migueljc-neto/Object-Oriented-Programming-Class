// button
const submitButton = document.querySelector(".submit-button");

// table
const table = document.querySelector("#table");

const addGame = submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  const game = {
    name: document.querySelector(".name-input").value,
    date: document.querySelector(".date-input").value,
    genre: document.querySelector(".genre-input").value,
    platform: document.querySelector(".platform-input").value,
    rate: document.querySelector(".rate-input").value,
  };

  let row = table.insertRow(1);

  let nameCell = row.insertCell(0);
  let dateCell = row.insertCell(1);
  let genreCell = row.insertCell(2);
  let platformCell = row.insertCell(3);
  let rateCell = row.insertCell(4);
  let deleteCell = row.insertCell(5);

  nameCell.innerHTML = game.name;
  dateCell.innerHTML = game.date;
  genreCell.innerHTML = game.genre;
  platformCell.innerHTML = game.platform;
  rateCell.innerHTML = game.rate;
  deleteCell.innerHTML = `<button onclick="deleteFunc()">Delete</button>`;

  const deleteFunc = function () {};
});
