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

      //parasare


      //col
      let col = document.createElement("div");
      col.setAttribute("class", "col");
    
      // card
    
      let cardContainer = document.createElement("div");
      cardContainer.setAttribute("class", "card");
    
      // image
    
      let image = document.createElement("img");
      image.setAttribute("class", "card-img-top");
      image.setAttribute("src", `./assets/campanii-img/${jsonData.Campanii[i].cardImage}`);
    
      // paragraf
    
      let cardContent = document.createElement("div");
      cardContent.setAttribute("class", "card-body");
    
      // title
    
      let title = document.createElement("h5");
      title.innerHTML = `${jsonData.Campanii[i].cardTitle}`;
    
      if (title.innerHTML == "undefined") {
        title.innerHTML = "Campanie în lucru!";
      }
    
      // paragraf
    
      let paragraf = document.createElement("p");
      paragraf.innerHTML = jsonData.Campanii[i].descriere;
    
      if (paragraf.innerHTML.length > 95) {
        paragraf.innerHTML =
        jsonData.Campanii[i].descriere.substring(0, 120) + "..."
      }
    
      // button
    
      let button = document.createElement("a");
      button.setAttribute("class", "btn btn-primary btn-campanie");
      button.setAttribute("href", `./Campanii/${jsonData.Campanii[i].cardLink}`);
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


  })

  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });