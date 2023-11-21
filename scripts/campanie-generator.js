let cardImage = [];
let cardParagraf = [];
let cardLink = [];

for (let i = 0; i < 10; i++) {
  //col
  let col = document.createElement("div");
  col.setAttribute("class", "col");

  // card

  let cardContainer = document.createElement("div");
  cardContainer.setAttribute("class", "card");

  // image

  let image = document.createElement("img");
  image.setAttribute("class", "card-img-top");
  image.setAttribute("src", "./assets/Main-Photo.jpeg");

  // paragraf

  let cardContent = document.createElement("div");
  cardContent.setAttribute("class", "card-body");

  // title

  let title = document.createElement("h5");
  title.innerHTML = "Card title";

  // paragraf

  let paragraf = document.createElement("p");
  paragraf.innerHTML =
    "Some quick example text to build on the card title and make up the bulk of the card's content. ";

  // button

  let button = document.createElement("a");
  button.setAttribute("class", "btn btn-primary btn-campanie");
  button.setAttribute("href", "#");
  button.innerHTML = "Citește mai mult";

  // append
  cardContent.appendChild(title);
  cardContent.appendChild(paragraf);
  cardContent.appendChild(button);
  cardContainer.appendChild(image);
  cardContainer.appendChild(cardContent);
  col.appendChild(cardContainer);

  // final append
  document.getElementById("card-group").appendChild(col);
}
