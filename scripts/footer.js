let social = [
  "facebook-square-fill.svg",
  "instagram-fill.svg",
  "linkedin-fill.svg",
];

let socialLinks = [
  "https://www.facebook.com/frgimnastica/",
  "https://www.instagram.com/frgimnastica/",
  "https://www.linkedin.com/company/federația-română-de-gimnastică/mycompany/",
];

let icons = ["location2.svg", "mail.svg", "phone.svg"];

let iconLinks = [
  "https://maps.app.goo.gl/bnL3EgM1XLzKwJPb8",
  "mailto:donatii@frgimnastica.com",
  "tel:+40 213 171 112",
];

let paragraf = [
  "Str. Vasile Conta, nr.16, Bucureşti, Romania",
  "donatii@frgimnastica.com",
  "+40 213 171 112 ",
];

footer = document.getElementById("footer");

// Media

let media = document.createElement("div");
media.setAttribute("class", "media-holder");

for (let i = 0; i < social.length; i++) {
  let holder = document.createElement("div");
  holder.setAttribute("class", "media-icon-container");

  let link = document.createElement("a");
  link.setAttribute("href", `${socialLinks[i]}`);

  let image = document.createElement("img");
  image.setAttribute("src", `${navSubfolderPath}/assets/icon/icon-media/${social[i]}`);

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
  locationLink.setAttribute("href", `${iconLinks[j]}`);

  let locationIcon = document.createElement("img");
  locationIcon.setAttribute("src", `${navSubfolderPath}/assets/icon/${icons[j]}`);

  let locationParagraf = document.createElement("p");
  locationParagraf.innerHTML = `${paragraf[j]}`;

  locationLink.appendChild(locationIcon);
  locationLink.appendChild(locationParagraf);
  locationContainer.appendChild(locationLink);
}

footer.appendChild(locationContainer);

// CopyRight

let date = new Date();

let copyRight = document.createElement("div");
copyRight.style.textAlign = "center";
copyRight.style.padding = "1rem";
copyRight.style.marginBottom = "1rem";
copyRight.style.backgroundColor = "rgb(240,240,240)";
copyRight.innerHTML = `Federația Română de Gimnastică ${date.getFullYear()} <br> Toate drepturile rezervate`;

footer.appendChild(copyRight);
