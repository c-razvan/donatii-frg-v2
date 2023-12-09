// Fetch the JSON data using the Fetch API

const jsonFilePath = `${navSubfolderPath}/redirectioneaza/red.json`;

fetch(jsonFilePath)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to fetch ${jsonFilePath}`);
    }
    return response.json();
  })
  .then((jsonData) => {
    id = document.getElementById("main-container").attributes[2].value;

    if (id === jsonData.Campanii[id].userId) {
      // carousel
      carousel = document.createElement("div");
      carousel.setAttribute("id", `${jsonData.Campanii[id].userID}`);

      // carouselCard

      carouselCard = document.createElement("div");
      carouselCard.setAttribute("class", "main-event container p-0");
      carouselCard.setAttribute("id", "main-carousel");

      // image

      let imgContainer = document.createElement("div");
      imgContainer.setAttribute("class", "img-container");

      let photo = document.createElement("img");
      photo.setAttribute("class", "img-fluid");
      photo.setAttribute(
        "src",
        `${navSubfolderPath}/assets/${jsonData.Campanii[id].cardImage}`
      );
      photo.setAttribute("alt", "Main Event");

      imgContainer.appendChild(photo);

      let imgContainerMobil = document.createElement("div");
      imgContainerMobil.setAttribute("class", "img-container-mobil");

      let photoMobil = document.createElement("img");
      photoMobil.setAttribute("class", "img-fluid");
      photoMobil.setAttribute(
        "src",
        `${navSubfolderPath}/assets/${jsonData.Campanii[id].cardImageMobil}`
      );
      photoMobil.setAttribute("alt", "Main Event");

      imgContainerMobil.appendChild(photoMobil);

      // textContainer

      let textContainer = document.createElement("div");
      textContainer.setAttribute("id", "text-container");

      // line

      let lineContainer = document.createElement("div");
      lineContainer.setAttribute("class", "line-container-spacer mb-3");

      let line = document.createElement("div");

      line.setAttribute(
        "class",
        `event-line event-line-${jsonData.Campanii[id].cardColor}`
      );

      lineContainer.appendChild(line);
      textContainer.appendChild(lineContainer);

      // title

      let title = document.createElement("h1");
      title.setAttribute("class", "display-text");
      title.innerHTML = jsonData.Campanii[id].cardTitle;
      textContainer.appendChild(title);

      if (title.innerHTML.length > 30) {
        textContainer.setAttribute("class", "text-container h-50");
      } else {
        textContainer.setAttribute("class", "text-container h-25");
      }

      let t = document.createElement("p");
      t.innerHTML = jsonData.Campanii[id].descriere;
      document.getElementById("paragraf").appendChild(t);

      let contract = document.createElement("a");
      contract.setAttribute(
        "class",
        `link-carousel w-auto px-3 text-white text-decoration-none event-line-${jsonData.Campanii[id].cardColor}`
      );
      if (jsonData.Campanii[id].userId === "1") {
        console.log("i work")
        contract.setAttribute("class","d-none")
      }
      contract.setAttribute("href", "./spons-frg.docx");
      contract.innerHTML = "Descarcă contractul de sponsorizare";
      document.getElementById("paragraf").appendChild(contract);



      // Append

      carouselCard.appendChild(imgContainer);
      carouselCard.appendChild(imgContainerMobil);
      carouselCard.appendChild(textContainer);
      carousel.appendChild(carouselCard);
      document.getElementById("main-container").appendChild(carousel);

      console.log("OK");
    } else {
      console.log("Error");
    }
  })

  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });
