// elements
// înputs
const submitButton = document.querySelector("#submitButton");
const filterPlatformButton = document.querySelector("#filterPlatform");
const table = document.querySelector("#tableBody");

let lGames = [];

// create game object
submitButton.addEventListener("click", function (e) {
  e.preventDefault();

  // platform multi select
  const platformInput = document.querySelector("#platformInput");
  const platformArray = Array.from(platformInput.options)
    .filter((option) => option.selected)
    .map((option) => option.value);

  const gameObject = {
    name: document.querySelector("#nameInput").value,
    year: document.querySelector("#yearInput").value,
    genre: document.querySelector("#genreInput").value,
    platform: platformArray,
    rating: document.querySelector("#ratingInput").value,
  };

  lGames.push(gameObject);
  console.log(lGames);

  updateTable(lGames);
});

// add row to table
const updateTable = function (list) {
  table.innerHTML = "";

  list.forEach((item) => {
    // create row for each element
    const row = document.createElement("tr");
    for (let i = 0; i < 3; i++) {
      // get value by object index
      const cell = document.createElement("td");
      cell.innerHTML = `${item[Object.keys(item)[i]]}`;

      row.appendChild(cell);
    }

    // create details button
    const detailsB = document.createElement("button");
    detailsB.innerHTML = "details";
    detailsB.onclick = function () {
      alert(
        `Name: ${item.name} \n Year: ${item.year} \n Genre: ${
          item.genre
        } \n Platform: ${[...item.platform].join(" / ")} \n Rating: ${
          item.rating
        }`
      );
    };
    row.appendChild(detailsB);

    const deleteB = document.createElement("button");
    deleteB.innerHTML = "Delete";
    deleteB.onclick = function () {
      this.parentNode.remove();
      lGames.splice(this.parentNode.rowIndex, 1);
    };
    row.appendChild(deleteB);

    table.appendChild(row);
  });
};

filterPlatformButton.addEventListener("click", function (e) {
  e.preventDefault();
  const filter = document.querySelector("#platformInput").value;
  const filterList = lGames.filter((item) => item.platform.includes(filter));
  console.log(filterList);

  updateTable(filterList);
});
