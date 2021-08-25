"use strict";

const select = document.querySelectorAll(".js-currency");
const amount = document.querySelectorAll(".js-amount");
const output = document.querySelectorAll(".js-result");

//El elemento es recogido
console.log(amount);

//El evento se escucha y recoge el valor del input
function modifiedValue(amount) {
  console.log(amount.value);
}

fetch("https://api.frankfurter.app/latest")
  .then((data) => data.json())
  .then((data) => {
    display(data);
  });

function display(data) {
  const entries = Object.entries(data);
  for (let i = 0; i < entries.length; i++) {
    select[0].innerHTML += `<option value="${entries[i][0]}"<${entries[i][0]} :${entries[i][1]}</option>`;
    select[1].innerHTML += `<option value="${entries[i][0]}"<${entries[i][0]} :${entries[i][1]}</option>`;
  }
}

function updatevalue() {
  let currency1 = select[0].value;
  let currency2 = select[1].value;

  let value = number.value;

  if (currency1 != currency2) {
    updatevalue(currency1, currency2, value);
  } else {
    alert("Choose a different currency");
  }
}

function convert(currency1, currency2, value) {
  const host = "api.frankfurter.app";
  fetch(
    `https://${host}/latest?amount=${value}&from=${currency1}&to${currency2}`
  )
    .then((val) => val.json())
    .then((val) => {
      console.log(Object.values(val.rates)[0]);
      output.value = Object.values(val.rates)[0];
    });
}
