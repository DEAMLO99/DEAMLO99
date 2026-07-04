let games = JSON.parse(localStorage.getItem("games")) || [];

function renderGames() {
  const list = document.getElementById("gameList");
  list.innerHTML = "";
  games.forEach(g => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<h3>${g.name}</h3><p>${g.genre}</p>`;
    list.appendChild(div);
  });
}

function addGame() {
  const name = document.getElementById("gameName").value;
  const genre = document.getElementById("gameGenre").value;

  if (!name) return;

  games.push({ name, genre });
  localStorage.setItem("games", JSON.stringify(games));

  document.getElementById("gameName").value = "";
  document.getElementById("gameGenre").value = "";

  hideAddGame();
  renderGames();
}

function showAddGame() {
  document.getElementById("addGameForm").classList.remove("hidden");
}

function hideAddGame() {
  document.getElementById("addGameForm").classList.add("hidden");
}

renderGames();

