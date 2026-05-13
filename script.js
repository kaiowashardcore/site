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
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.classList.add('glitch');

    setTimeout(() => {
      btn.classList.remove('glitch');
    }, 200);
  });
});