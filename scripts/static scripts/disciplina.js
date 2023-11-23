let cardDisciplina = ["GAF","GAM","AER","TRA","ACRO","PK","GFA"];

let linkDisciplina = ["https://frgimnastica.com/disciplines?disciplineId=3","https://frgimnastica.com/disciplines?disciplineId=4","https://frgimnastica.com/disciplines?disciplineId=5","https://frgimnastica.com/disciplines?disciplineId=6","https://frgimnastica.com/disciplines?disciplineId=7","https://frgimnastica.com/disciplines?disciplineId=9","https://frgimnastica.com/disciplines?disciplineId=8"];

for (let i = 0; i < cardDisciplina.length; i++) {
  // col
  let col = document.createElement("div");
  col.setAttribute("class", "col");

  // card

  let cardContainer = document.createElement("a");
  cardContainer.setAttribute("class", "disciplina");
  cardContainer.target = "blank";
  cardContainer.href = `${linkDisciplina[i]}`

  // image

  let image = document.createElement("img");
  image.setAttribute("class", "img-fluid");
  image.setAttribute("src", `./assets/assets-static/Discipline Gimnastica/${cardDisciplina[i]}.png`);

  // append

  cardContainer.appendChild(image);
  col.appendChild(cardContainer);

  // final append
  document.getElementById("card-group").appendChild(col);
}
