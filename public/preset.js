const ffDe = document.getElementById("ff-de");
const ffA = document.getElementById("ff-a");
const fcDe = document.getElementById("fc-de");
const fcA = document.getElementById("fc-a");
const fsMayorDe = document.getElementById("fs-mayor-de");

// labels
const lblffdevalue = document.getElementById("lbl-ff-de-value");
const lblffA = document.getElementById("lbl-ff-a");
const lblfcde = document.getElementById("lbl-fc-de");
const lblfca = document.getElementById("lbl-fc-a");
const lblMayorDe = document.getElementById("lbl-mayor-de");
const botonSalir = document.getElementById("boton-salir");

// condiciones iniciales
// recogidas del localStorage
ffDe.value = localStorage.getItem("ffDe");
ffA.value = localStorage.getItem("ffA");
fcDe.value = localStorage.getItem("fcDe");
fcA.value = localStorage.getItem("fcA");
fsMayorDe.value = localStorage.getItem("fsMayorDe");

lblffdevalue.innerHTML = "0" + ffDe.value + "°C";
lblffA.innerHTML = "0" + ffA.value + "°C";
lblfcde.innerHTML = fcDe.value + "°C";
lblfca.innerHTML = fcA.value + "°C";
lblMayorDe.innerHTML = fsMayorDe.value + "°C";

botonSalir.addEventListener("click", () => {
  window.open("./index.html", "_self", "", true);
});

ffDe.addEventListener("mousemove", () => {
  if (ffDe.value < 10) {
    lblffdevalue.innerHTML = "0" + ffDe.value + "°C";
  } else {
    lblffdevalue.innerHTML = ffDe.value + "°C";
  }
  localStorage.setItem("ffDe", ffDe.value);
});

ffDe.addEventListener("change", () => {
  if (ffDe.value < 10) {
    lblffdevalue.innerHTML = "0" + ffDe.value + "°C";
  } else {
    lblffdevalue.innerHTML = ffDe.value + "°C";
  }
  localStorage.setItem("ffDe", ffDe.value);
});

ffA.addEventListener("mousemove", () => {
  if (ffA.value < 10) {
    lblffA.innerHTML = "0" + ffA.value + "°C";
  } else {
    lblffA.innerHTML = ffA.value + "°C";
  }
  localStorage.setItem("ffA", ffA.value);
});

ffA.addEventListener("change", () => {
  if (ffA.value < 10) {
    lblffA.innerHTML = "0" + ffA.value + "°C";
  } else {
    lblffA.innerHTML = ffA.value + "°C";
  }
  localStorage.setItem("ffA", ffA.value);
});

fcDe.addEventListener("mousemove", () => {
  if (fcDe.value < 10) {
    lblfcde.innerHTML = "0" + fcDe.value + "°C";
  } else {
    lblfcde.innerHTML = fcDe.value + "°C";
  }
  localStorage.setItem("fcDe", fcDe.value);
});

fcDe.addEventListener("change", () => {
  if (fcDe.value < 10) {
    lblfcde.innerHTML = "0" + fcDe.value + "°C";
  } else {
    lblfcde.innerHTML = fcDe.value + "°C";
  }
  localStorage.setItem("fcDe", fcDe.value);
});

fcA.addEventListener("mousemove", () => {
  if (fcA.value < 10) {
    lblfca.innerHTML = "0" + fcA.value + "°C";
  } else {
    lblfca.innerHTML = fcA.value + "°C";
  }
  localStorage.setItem("fcA", fcA.value);
});

fcA.addEventListener("change", () => {
  if (fcA.value < 10) {
    lblfca.innerHTML = "0" + fcA.value + "°C";
  } else {
    lblfca.innerHTML = fcA.value + "°C";
  }
  localStorage.setItem("fcA", fcA.value);
});

fsMayorDe.addEventListener("mousemove", () => {
  localStorage.setItem("fsMayorDe", fsMayorDe.value);
  lblMayorDe.innerHTML = fsMayorDe.value + "°C";
});

fsMayorDe.addEventListener("change", () => {
  localStorage.setItem("fsMayorDe", fsMayorDe.value);
  lblMayorDe.innerHTML = fsMayorDe.value + "°C";
});
