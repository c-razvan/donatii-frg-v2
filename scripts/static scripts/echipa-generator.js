let team = [
  {
    name: "Norbert Zerkula",
    photo: "NZ.jpg",
  },
  {
    name: "Andreea Petcu",
    photo: "AP.png",
  },
];

for (let i = 0; i < team.length; i++) {
  //person

  let person = document.createElement("div");
  person.setAttribute("class", "person m-3");

  //imagine-cadru

  let photoContainer = document.createElement("div");
  photoContainer.setAttribute("class", "m-3");

  //imagine

  let imaginePersoana = document.createElement("img");
  imaginePersoana.setAttribute("class", "image-fluid");
  imaginePersoana.src = `./assets/assets-static/${team[i].photo}`;
  imaginePersoana.alt = "";

  //nume

  let nameTitle = document.createElement("h5");
  nameTitle.setAttribute("class", "text-center mt-3");
  nameTitle.innerHTML = `${team[i].name}`;

  //append

  photoContainer.appendChild(imaginePersoana);
  person.appendChild(photoContainer);
  person.appendChild(nameTitle);
  document.getElementById("echipa").appendChild(person);
}
