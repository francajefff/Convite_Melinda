document.addEventListener("DOMContentLoaded", () => {
  const portao = document.getElementById("portao");
  const mapa = document.getElementById("mapa");
  const texto = document.getElementById("cliqueTexto");

  portao.addEventListener("click", () => {
    mapa.classList.remove("oculto");
    texto.style.display = "none";
  });
});
