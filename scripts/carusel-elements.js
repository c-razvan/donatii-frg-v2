let elements = {
  photo: ["Main-Photo.jpeg", "20.png"],
  title: ["", "Direcționează 20% Din Impozitul Pe Profit"],
  paragraf: [
    "",
    "În luna decembrie, compania ta plătește impozitul pe profit. Alege să direcționezi 20% din acesta către gimnastică! Împreună susținem efortul colectiv de reconstrucție a gimnasticii românești. Dacă iubești gimnastica și îți dorești să te alături proiectelor noastre, cu siguranță contribuția ta va aduce un aport pozitiv în procesul de redresare și ocrotire a sportivilor generației de astăzi și de mâine! ",
  ],
};

for (let i = 0; i < elements.title.length; i++) {
  // carousel
  carousel = document.createElement("div");
  carousel.setAttribute("class", "carousel-item active");

  // carouselCard

  carouselCard = document.createElement("div");
  carouselCard.setAttribute("class", "main-event container p-0 mt-3");
  carouselCard.setAttribute("id", "main-carousel");

  // image

  let imgContainer = document.createElement("div");
  imgContainer.setAttribute("class", "img-container");

  let photo = document.createElement("img");
  photo.setAttribute("class", "img-fluid");
  photo.setAttribute("src", `./assets/${elements.photo[i]}`);
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
  line.setAttribute("class", "event-line");

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

  // Append

  carouselCard.appendChild(imgContainer);
  carouselCard.appendChild(textContainer);
  carousel.appendChild(carouselCard);
  document.getElementById("main-container").appendChild(carousel);
}
