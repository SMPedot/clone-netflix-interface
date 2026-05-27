const video = document.getElementById("videoBanner");
const btnSom = document.getElementById("btnSom");
const iconeSom = document.getElementById("iconeSom");

btnSom.addEventListener("click", () => {
  if (video.muted) {
    video.muted = false;
    iconeSom.src = "volume.png";
  } else {
    video.muted = true;
    iconeSom.src = "mute.png";
  }
});

const botaoBusca = document.getElementById("botaoBusca");
const containerBusca = document.getElementById("containerBusca");
const campoBusca = document.getElementById("campoBusca");
const cabecalhoPrincipal = document.getElementById("cabecalhoPrincipal");

botaoBusca.addEventListener("click", () => {
  containerBusca.classList.toggle("ativo");
  if (containerBusca.classList.contains("ativo")) {
    campoBusca.focus();
  }
});

document.addEventListener("click", (event) => {
  if (!containerBusca.contains(event.target)) {
    containerBusca.classList.remove("ativo");
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    cabecalhoPrincipal.classList.add("rolagem");
  } else {
    cabecalhoPrincipal.classList.remove("rolagem");
  }
});