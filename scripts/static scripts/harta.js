      const button = document.getElementById("map-button");

      button.addEventListener("click", function () {
        content = document.getElementById("map");
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });