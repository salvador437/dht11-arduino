const socket = io();
const boton = document.getElementById("boton-preset");
const reconnectButton = document.getElementById("reconnect-btn");
const temperatureDisplay = document.getElementById("temperature");
const fondo = document.getElementsByTagName("body")[0];
const titulo = document.querySelector(".container p");
const reloj = document.getElementById("reloj");
const statusElement = document.getElementById("status");

let ffDe = parseInt(localStorage.getItem("ffDe"));
let ffA = parseInt(localStorage.getItem("ffA"));
let fcDe = parseInt(localStorage.getItem("fcDe"));
let fcA = parseInt(localStorage.getItem("fcA"));
let fsMayorDe = parseInt(localStorage.getItem("fsMayorDe"));

if (reconnectButton) {
  reconnectButton.style.display = "flex";
  statusElement.textContent = "Estado: Desconectado";
  reconnectButton.addEventListener("click", () => {
    fetch("/reconnect", { method: "POST" })
      .then((response) => {
        if (response.ok) {
          console.log("Reconexión solicitada");
        } else {
          console.error("Error al solicitar reconexión");
        }
      })
      .catch((error) => console.error("Error:", error));
  });
} else {
  console.error('Elemento con ID "reconnect-btn" no encontrado');
}
// Redirección al hacer clic en el botón
boton.addEventListener("click", () => {
  window.location.href = "./preset.html";
});

// Manejar el evento de recarga desde el servidor
socket.on("reload", () => {
  location.reload();
});

// Manejo de errores de Arduino
socket.on("err", () => mostrarError());
socket.on("error", () => mostrarError());

function mostrarError() {
  temperatureDisplay.innerHTML = "Arduino desconectado";
  reconnectButton.style.display = "flex";
  temperatureDisplay.style.fontSize = "20px";
  window.open("./error404.html", "_self", "", true);
}

// Actualización de la temperatura
socket.on("temp", (data) => {
console.log("desde main data",data)
console.log("desde main temp",data.substring(0,2))
console.log("desde main hum",data.substring(2,5))
  const temperatura = parseInt(data.substring(0,2));
  const hum = `${parseInt(data.substring(2,5))}`;

  temperatureDisplay.innerHTML = ` ${temperatura} °C   ${hum}%`;
  reconnectButton.style.display = "none";
  statusElement.textContent = "Estado: Conectado";
  statusElement.style.color = "white";
  if (temperatura > 30 && temperatura < 40) {
    actualizarEstilos("red", "url('./imagenes/calor-extremo.jpg')", "🔥");
  } else if (temperatura > fcA && temperatura < fsMayorDe) {
    actualizarEstilos("orangered", "url('./imagenes/fondo-calor.jpg')", "🥵");
  } else if (temperatura < fcA && temperatura > fcDe) {
    actualizarEstilos("white", "url('./imagenes/fondo.jpg')", "😎");
  } else if (temperatura < ffA) {
    actualizarEstilos("blue", "url('./imagenes/fondo-frio.jpg')", "🥶");
  }
});

// Función para actualizar estilos
function actualizarEstilos(color, imagen, emoji) {
  temperatureDisplay.style.color = color;
  fondo.style.background = `${imagen} no-repeat center center fixed`;
  titulo.style.color = color;
  reloj.style.color = color;
  temperatureDisplay.style.border = `2px solid ${color}`;
  temperatureDisplay.innerHTML = ` ${temperatura} °C  "  " ${hum}H%}  ${emoji}`;
}

// Función para actualizar el reloj
function actualizarReloj() {
  const ahora = new Date();
  const fecha = `${String(ahora.getDate()).padStart(2, "0")}/${String(
    ahora.getMonth() + 1
  ).padStart(2, "0")}/${ahora.getFullYear()}`;
  const hora = `${String(ahora.getHours()).padStart(2, "0")}:${String(
    ahora.getMinutes()
  ).padStart(2, "0")}:${String(ahora.getSeconds()).padStart(2, "0")}`;

  reloj.innerHTML = `📅 ${fecha}   ⌚${hora}`;
  setTimeout(actualizarReloj, 1000);
}

// Iniciar el reloj
actualizarReloj();
