// Fetch the JSON data using the Fetch API
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
      carouselCard.setAttribute("class", "main-event container p-0 mt-3 ");
      carouselCard.setAttribute("id", "main-carousel");

      // image

      let imgContainer = document.createElement("div");
      imgContainer.setAttribute("class", "img-container");

      let photo = document.createElement("img");
      photo.setAttribute("class", "img-fluid");
      photo.setAttribute(
        "src",
        `${navSubfolderPath}/assets/campanii-img/${jsonData.Campanii[id].cardImage}`
      );
      photo.setAttribute("alt", "Main Event");

      imgContainer.appendChild(photo);

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
      title.innerHTML = jsonData.Campanii[id].cardTitle;
      textContainer.appendChild(title);

      console.log(title.innerHTML.length )

      if (title.innerHTML.length > 30) {
        textContainer.setAttribute("class", "text-container h-50");
      } else {
        textContainer.setAttribute("class", "text-container h-25");
      }

      // paragraf

      let t = document.createElement("p");
      t.innerHTML = jsonData.Campanii[id].descriere;
      textContainer.appendChild(t);

      // Append

      document.getElementById("paragraf").appendChild(t);

      carouselCard.appendChild(imgContainer);
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
