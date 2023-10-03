"use strict";

import { jokes } from "./data.js";
const dataBase = JSON.parse(jokes);
console.log(dataBase);

const content = document.querySelector(".content");
content.style.display = "flex";
content.style.justifyContent = "center";
content.style.flexWrap = "wrap";
content.style.gap = "10px";

dataBase.forEach(({ id, type, setup, punchline }) => {
  const divJoke = document.createElement("div");
  divJoke.classList.add("joke");
  content.appendChild(divJoke);
  divJoke.style.border = "1px solid red";
  divJoke.style.width = "300px";
//   divJoke.style.margin = "5px";
  divJoke.style.padding = "10px"

  const numberJoke = document.createElement("h5");
  numberJoke.textContent = `Шутка № ${id}`;
  divJoke.appendChild(numberJoke);

  const joke = document.createElement("p");
  joke.textContent = setup;
  divJoke.appendChild(joke);

  const smile = document.createElement("h3");
  smile.textContent = punchline;
  divJoke.appendChild(smile);
});
