// element define

let elements = {
  photo: ["Main-Photo.jpeg", "3,5-mobil.png", "20-mobil.png"],
  line: ["red", "blue", "yellow"],
  title: [
    "Donează Pentru Federația Română de Gimnastică",
    "Direcționează 3,5% Din Impozitul Pe An",
    "Direcționează 20% Din Impozitul Pe Profit",
  ],
  paragraf: [
    "Dacă ție îți pasă, atunci cu siguranță lucrurile vor deveni mai bune. Avem nevoie de tine!",
    "PF. Alege să direcționezi 3,5% din acesta către gimnastică! ",
    "În luna decembrie, compania ta plătește impozitul pe profit. Alege să direcționezi 20% din acesta către gimnastică! ",
  ],
  link: ["#campaniile-noastre", "${navSubfolderPath}/redirectioneaza/redirectionare-3,5.html", `${navSubfolderPath}/redirectioneaza/redirectionare-20.html`],
};

for (let i = 0; i < elements.title.length; i++) {
  // carousel
  carousel = document.createElement("div");
  carousel.setAttribute("class", "carousel-item");

  if (i === 0) {
    carousel.setAttribute("class", "carousel-item active");
  }

  // carouselCard

  carouselCard = document.createElement("div");
  carouselCard.setAttribute("class", "main-event container p-0 mt-3 ");
  carouselCard.setAttribute("id", "main-carousel");

  // image

  let imgContainer = document.createElement("div");
  imgContainer.setAttribute("class", "img-container");

  let photo = document.createElement("img");
  photo.setAttribute("class", "img-fluid");
  photo.setAttribute("src", `${navSubfolderPath}/assets/${elements.photo[i]}`);
  photo.setAttribute("alt", "Main Event");

  imgContainer.appendChild(photo);

  // textContainer

  let textContainer = document.createElement("div");
  textContainer.setAttribute("class", "text-container");
  textContainer.setAttribute("id", "text-container");

  // line

  let lineContainer = document.createElement("div");
  lineContainer.setAttribute("class", "line-container-spacer mb-3");

  let line = document.createElement("div");

  line.setAttribute("class", `event-line event-line-${elements.line[i]}`);

  lineContainer.appendChild(line);
  textContainer.appendChild(lineContainer);

  // title

  let title = document.createElement("h1");
  title.innerHTML = elements.title[i];
  textContainer.appendChild(title);

  // paragraf

  let paragraf = document.createElement("p");
  paragraf.innerHTML = elements.paragraf[i];
  textContainer.appendChild(paragraf);

  // link
  let link = document.createElement("a");
  link.innerHTML = "Aflați mai multe";
  link.setAttribute("class", `link-carousel event-line-${elements.line[i]}`);
  if (elements.link[i] !== "") {
    link.setAttribute("href", `${elements.link[i]}`);
    textContainer.appendChild(link);
  }

  // Append

  carouselCard.appendChild(imgContainer);
  carouselCard.appendChild(textContainer);
  carousel.appendChild(carouselCard);
  document.getElementById("main-container").appendChild(carousel);
}

let script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.7.0.min.js";
document.getElementsByTagName("head")[0].appendChild(script);

setInterval(() => {
  jQuery(".carousel-control-next").trigger("click");
}, 15000);
