function alternarTexto(idDaLetra, btn) {
  const texto = document.getElementById(idDaLetra);

  if (texto.style.display === "none") {
    texto.style.display = "inline";
    btn.innerHTML = "Ocultar Letra";
  } else {
    texto.style.display = "none";
    btn.innerHTML = "Exibir Letra";
  }
}
