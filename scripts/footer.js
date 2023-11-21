let social = [
  "facebook-square-fill.svg",
  "instagram-fill.svg",
  "linkedin-fill.svg",
];

let icons = ["location2.svg", "mail.svg", "phone.svg"];
let paragraf = [
  "Str. Vasile Conta, nr.16, Bucureşti, Romania",
  "frgimnastica@frgimnastica.com",
  "+40 213 171 112 ",
];

footer = document.getElementById("footer");

// Media

let media = document.createElement("div");
media.setAttribute("class", "media-holder");

console.log("Hello!");

for (let i = 0; i < social.length; i++) {
  let holder = document.createElement("div");
  holder.setAttribute("class", "media-icon-container");

  let link = document.createElement("a");
  link.setAttribute("href", `${social[i]}`);

  let image = document.createElement("img");
  image.setAttribute("src", `./assets/icon/icon-media/${social[i]}`);

  link.appendChild(image);
  holder.appendChild(link);
  media.appendChild(holder);
}

footer.appendChild(media);

// Divider

separator = document.createElement("div");
separator.setAttribute("class", "d-flex justify-content-center separator");
footer.appendChild(separator);

// Contact

let locationContainer = document.createElement("div");
locationContainer.setAttribute("class", "footer-container");

for (let j = 0; j < icons.length; j++) {
  let locationLink = document.createElement("a");
  locationLink.setAttribute("class", "footer-link");
  locationLink.setAttribute("href", `${icons[j]}`);

  let locationIcon = document.createElement("img");
  locationIcon.setAttribute("src", `./assets/icon/${icons[j]}`);

  let locationParagraf = document.createElement("p");
  locationParagraf.innerHTML = `${paragraf[j]}`;

  locationLink.appendChild(locationIcon);
  locationLink.appendChild(locationParagraf);
  locationContainer.appendChild(locationLink);
}

footer.appendChild(locationContainer);
