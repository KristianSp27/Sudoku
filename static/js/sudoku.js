document.querySelector("#dark-mode-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDarkMode = document.body.classList.contains("dark");
  localStorage.setItem("darkmode", isDarkMode);

  document.querySelector('meta[name = "theme-color"').setAttribute("content", isDarkMode ? "#1a1a2e" : "#fff");
});

const name_input = document.querySelector("#input-name");
const start_screen = document.querySelector("#start-screen");

document.querySelector("#btn-play").addEventListener("click", () => {
  if (name_input.value.trim().length > 0) {
    alert("start game");
  } else {
    name_input.classList.add("input-err");
    setTimeout(() => {
      name_input.classList.remove("input-err");
      name_input.focus();
    }, 500);
  }
});

const gateGameInfo = () => JSON.parse(localStorage.getItem("game"));

const init = () => {
  const darkMode = JSON.parse(localStorage.getItem("darkmode"));
  document.body.classList.add(darkMode ? "dark" : "light");
  document.querySelector('meta[name = "theme-color"').setAttribute("content", darkMode ? "#1a1a2e" : "#fff");

  const game = gateGameInfo();

  document.querySelector("btn-continue").style.display = game ? "grid" : "none";
};

init();
