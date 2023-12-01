// generator

const jsonFilePath = `${navSubfolderPath}/paragrafe/descrieri.json`;

// Fetch the JSON data using the Fetch API
fetch(jsonFilePath)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to fetch ${jsonFilePath}`);
    }
    return response.json();
  })
  .then((jsonData) => {
    // Generator
    for (let i = 0; i < jsonData.Campanii.length; i++) {
      //col
      let col = document.createElement("a");
      col.setAttribute("class", "col-lg-3");
      col.setAttribute("char", `${jsonData.Campanii[i].userId}`);

      // card

      let cardContainer = document.createElement("div");
      cardContainer.setAttribute("class", "card");

      // image contanier

      let imageBox = document.createElement("div");
      imageBox.setAttribute("class","imgBox")

      // image

      let image = document.createElement("img");
      image.setAttribute("class", "card-img-top");
      image.setAttribute(
        "src",
        `${navSubfolderPath}/assets/campanii-img/${jsonData.Campanii[i].cardImage}`
      );

      imageBox.appendChild(image)

      // paragraf

      let cardContent = document.createElement("div");
      cardContent.setAttribute("class", "card-body");

      // title

      let title = document.createElement("h5");
      title.setAttribute("class", "text-start");
      title.innerHTML = `${jsonData.Campanii[i].cardTitle}`;

      if (title.innerHTML == "undefined") {
        title.innerHTML = "Campanie în lucru!";
      }

      // button

      col.setAttribute("class", "btn btn-primary btn-campanie");
      col.setAttribute(
        "href",
        `${navSubfolderPath}/campanii-pages/${jsonData.Campanii[i].cardLink}`
      );

      // append
      cardContent.appendChild(title);
      cardContainer.appendChild(imageBox);
      cardContainer.appendChild(cardContent);
      col.appendChild(cardContainer);

      // final append
      document.getElementById("card-group").appendChild(col);
    }
  })

  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });
