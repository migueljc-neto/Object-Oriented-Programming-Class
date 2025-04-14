let tasks = [
  {
    title: "Escolha Tema",
    description: "Escolher o tema da App",
    date: "2025-04-02T10:00:00",
    status: "Done",
  },
  {
    title: "Pesquisa",
    description: "Pesquisar inspirações sobre o tema escolhido",
    date: "2025-04-03T19:00:00",
    status: "Done",
  },
  {
    title: "R. Funcionais",
    description: "Definir os requisitos funcionais",
    date: "2025-04-03T08:00:00",
    status: "InProgress",
  },
  {
    title: "Mockups",
    description: "Iniciar o desenho dos Mockups",
    date: "2025-04-12T15:00:00",
    status: "InProgress",
  },
  {
    title: "Prototipagem",
    description: "Prototipagem da App em Figma",
    date: "2025-04-15T14:00:00",
    status: "ToDo List",
  },
];

const form = document.getElementById("idForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let task = {
    title: document.querySelector("#txtActivity").value,
    description: document.querySelector("#txtDescription").value,
    date: document.querySelector("#txtData").value,
    status: document.querySelector("#idStatus").value,
  };

  tasks.push(task);
  renderTable(tasks);
});

const renderTable = function (taskList) {
  const gridEL = document.querySelector("#grid");
  gridEL.innerHTML = "";
  taskList
    .toSorted((a, b) => new Date(a.date) - new Date(b.date))
    .forEach((item, index) => {
      let color = "";
      let status = item.status;
      let title = item.title;
      let desc = item.description;
      let date = item.date;

      if (new Date(date) < new Date()) {
        color = "red";
      }
      switch (status) {
        case "ToDo List":
          color = "yellow";
          break;
        case "In Progress":
          color = "blue";
          break;
        case "In Review":
          color = "purple";
          break;
        case "Done":
          color = "green";
          break;
      }

      gridEL.insertAdjacentHTML(
        "beforeend",
        `<div class="card" style="background-color:${color}">
        <h3>${title}</h3>
        <p>${desc}</p>
        <p>${new Date(date)}</p>
        <p>${status}</p>
      </div>`
      );
    });
};
