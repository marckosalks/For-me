const imagemPerfil = document.querySelector("#profile img");

function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  if (html.classList.contains("light")) {
    imagemPerfil.setAttribute("src", "./assets/light.png");
  } else {
    imagemPerfil.setAttribute("src", "./assets/dark.png");
  }
}
