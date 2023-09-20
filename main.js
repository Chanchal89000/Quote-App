let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let container = document.querySelector("#Container");

const fetchQuote = async () => {
  const response = await fetch("https://quotable.io/random");
  const data = await response.json();
  h1.innerHTML = data.content;
  h2.innerHTML = data.author;
  btn1.innerText = data.tags;
};

btn2.addEventListener("click", fetchQuote);
