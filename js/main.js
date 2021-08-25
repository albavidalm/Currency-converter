"use strict";

const select = document.querySelectorAll(".js-currency");
const amount = document.querySelectorAll(".js-amount");
const output = document.querySelectorAll(".js-result");

const origin = document.querySelector(".js-optionFrom");
const destiny = document.querySelector(".js-optionTo");

const url = "https://api.frankfurter.app/latest";
let currencyData = [];

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    //json recogido y transformado
    //console.log(data);
    currencyData = data;
    console.log(currencyData);
  })
  //Detección de errores con la API
  .catch((error) => console.error(error));

//El evento se escucha y recoge el valor del input
function modifiedValue(amount) {
  //console.log(amount.value);
}

function getCountry(allCurrencies) {
  let htmlSelectOption = "";
  for (const country of allCurrencies)
}