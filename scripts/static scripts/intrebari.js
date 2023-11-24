const QA = [
  {
    title: "Campanii",
    question: [
      "În ce scop sunt folosite Donațiile?",
      "Când va fi disponibilă campania de Redirecționare?",
      "Pot propune o Campanie?",
    ],
    answer: [
      "Donațiile sunt folosite în funcție de cauza spre care alegeți să redirecționați suma de bani alocată. Împreună dezvoltăm gimnastica românească!",
      "Redirecționarea unui procent din impozitul pe venit este cea mai bună metodă prin care puteti ajuta gimnaștii români. Campania pentru redirecționare va începe în anul 2022, iar formularul pentru aceasta va putea fi completat și finalizat exclusiv online.",
      "Puteți propune o cauză cu un e-mail la donatii@frgimnastica.com , iar noi vă vom contacta ulterior.",
    ],
  },
  {
    title: "Ajutor",
    question: [
      "Cum donez?",
      "Când va fi disponibilă campania de Redirecționare?",
      "Pot propune o Campanie?",
    ],
    answer: [
      "La secțiunea `donează` veți regăsi proiectele în derulare. Puteți dona către orice proiect în care v-ar face plăcere să vă implicați și să ajutați accesând pagina acestuia. Fiecare proiect are o cauză și un obiectiv independent, iar dumneavoastră sunteți persoana care alege unde doriți să direcționați fondurile alocate donației.",
      "Datele și securitatea dumneavoastră sunt foarte importante pentru noi! Lucrăm în parteneriat cu procesorul de plăți securizate EuroPayment Services (euplatesc.ro) care asigură siguranță datelor la nivel de sistem informatic și are la dispoziție metode adecvate de securitate în conformitate cu protecția datelor cu caracter personal, a tranzacțiilor și a operațiunilor pe care utilizatorii le efectuează.",
      "În cazul în care întâmpinați alte probleme, vă rugăm se ne contactați. Dacă întâmpinați orice alt tip de dificultate în finalizarea unei donații sau aveți alte întrebări legate de acestea, vă rugăm să ne contactați la adresa de e-mail donatii@frgimnastica.com",
    ],
  },
];

//logic

for (let h = 0; h < QA.length; h++) {
  let state = QA[h];
  let section = document.createElement("div");
  section.setAttribute("class", "w-100 mb-5");

  let sectionTitle = document.createElement("h3");
  sectionTitle.setAttribute("class", "ms-4");
  sectionTitle.innerHTML = state.title;

  //append title
  section.appendChild(sectionTitle);

  for (let j = 0; j < state.question.length; j++) {
    let sectionButton = document.createElement("button");
    sectionButton.setAttribute("class", "accordion");
    sectionButton.innerHTML = state.question[j];

    let panel = document.createElement("div");
    panel.setAttribute("class", "panel mt-3");

    let answer = document.createElement("p");
    // answer.setAttribute("class","ms-3")
    answer.innerHTML = state.answer[j];

    //append
    panel.appendChild(answer);
    section.appendChild(sectionButton);
    section.appendChild(panel);
  }

  document.getElementById("QA").appendChild(section);
}

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
