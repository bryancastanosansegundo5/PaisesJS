import { countries } from "./countries.js";

let paises_total = document.querySelector(".paises-total");
let paises = document.querySelector(".paises");
let startingButton = document.querySelector(".starting");
let withButton = document.querySelector(".with");
let sortButton = document.querySelector(".sort");
let input = document.querySelector(".input");
let letras_rojo = document.querySelector(".letras-rojo");
let letras_verde = document.querySelector(".letras-verdes");

let busqueda = document.querySelector(".busqueda");
let resultados;

// el load
window.addEventListener("load", () => {
  paises_total.textContent = countries.length;
  sortButton.innerHTML = `<i
  class="fa-solid fa-arrow-down-a-z"></i>`;
  // cargamos los paises en el grid
  pintarPaises(countries);
});

input.addEventListener("input", () => {
  if (startingButton.classList.contains("pulsado")) {
    // boton starting
    letras_rojo.textContent = input.value;
    let empieza = input.value.toLowerCase();
    resultados = countries.filter((elemento) =>
      elemento.toLowerCase().startsWith(empieza)
    );
    letras_rojo.textContent = input.value;
    letras_verde.textContent = resultados.length;
    busqueda.innerHTML = `Países que empiezano por <span class="letras-rojo">${letras_rojo.textContent}</span> son <span class="letras-verdes">${letras_verde.textContent}</span>`;
    pintarPaises(resultados);
  } else if (withButton.classList.contains("pulsado")) {
    // boton with
    letras_rojo.textContent = input.value;
    let empieza = input.value.toLowerCase();

    resultados = countries.filter((elemento) =>
      elemento.toLowerCase().includes(empieza)
    );
    letras_rojo.textContent = input.value;
    letras_verde.textContent = resultados.length;
    busqueda.innerHTML = `Países que contienen <span class="letras-rojo">${letras_rojo.textContent}</span> son <span class="letras-verdes">${letras_verde.textContent}</span>`;
    pintarPaises(resultados);
  }
});

startingButton.addEventListener("click", () => {
  startingButton.classList.toggle("pulsado");
  withButton.classList.remove("pulsado");
});

withButton.addEventListener("click", () => {
  startingButton.classList.remove("pulsado");
  withButton.classList.toggle("pulsado");
});

// boton sort
var ordenAlfabetico = false;

sortButton.addEventListener("click", () => {
  let orden;
  if (resultados === undefined || resultados === null) {
    resultados = countries
  }
  if (ordenAlfabetico) {
    orden = resultados.sort();
    sortButton.innerHTML = `<i
    class="fa-solid fa-arrow-down-a-z"></i>`;
  } else {
  console.log(orden)

    orden = resultados.reverse();
    sortButton.innerHTML = `<i class="fa-solid fa-arrow-up-a-z"></i>`;
  }
  ordenAlfabetico = !ordenAlfabetico;
  pintarPaises(orden);
});

function pintarPaises(array) {
  paises.textContent = "";
  let fragment = document.createDocumentFragment();
  for (let index = 0; index < array.length; index++) {
    let item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = array[index];
    fragment.appendChild(item);
  }
  paises.appendChild(fragment);
}
