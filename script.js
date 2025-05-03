// Fecha objetivo del próximo drop
const fechaDrop = new Date("2025-05-03T00:00:00").getTime();

const cuentaRegresiva = setInterval(() => {
  const ahora = new Date().getTime();
  const diferencia = fechaDrop - ahora;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById("cuenta-regresiva").innerHTML =
    dias + "d " + horas + "h " + minutos + "m " + segundos + "s";

  if (diferencia < 0) {
    clearInterval(cuentaRegresiva);
    document.getElementById("cuenta-regresiva").innerHTML = "¡Ya está disponible!";
  }
}, 1000);
