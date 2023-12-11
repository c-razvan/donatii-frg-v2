fetch(jsonFilePath)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to fetch ${jsonFilePath}`);
    }
    return response.json();
  })
  .then((jsonData) => {
    // Generator

    let donatii = {
      tipDonatii: {
        title: "Doriți să ne susțineți lunar?",
        valori: [
          ["Singular", "no"],
          ["Recurent", "yes"],
        ],
      },
      valDonatie: {
        title: "Suma donației",
        valori: ["30", "50", "100", "altasuma"],
      },
      moneda: {
        title: "Plata în",
        valori: ["ron", "eur", "usd"],
      },
    };

    let datePersonaleNecesare = [
      ["Nume", "fnume"],
      ["Prenume", "lnume"],
      ["Numele Companiei", ""],
      ["e-Mail", "email"],
      ["Telefon", "phone"],
    ];

    // define page

    let typeCampanie =
      document.getElementById("main-container");

    let type =
      document.getElementById("title").firstElementChild.attributes[1].value;

    let log = "";

    if (type === "pf") {
      log = "Persoane Fizice";
    } else {
      log = "Persoane Juridice";
    }

    if (typeCampanie !== null) {
      pentrCeDonez = jsonData.Campanii[typeCampanie.attributes[2].value].cardTitle
    } else {
      pentrCeDonez = log;
    }


    // title

    let title = document.createElement("h6");
    title.setAttribute("class", "d-flex");
    let subtitle = document.createElement("p");
    subtitle.setAttribute("class", "define-button");
    subtitle.innerHTML = `pentru ${log}`;

    title.appendChild(subtitle);
    document.getElementById("title").appendChild(title);

    // section

    let section = document.createElement("section");
    section.setAttribute("class", "donation-form-body d-flex flex-wrap");

    // wrapper1

    let wrapperDonatie = document.createElement("div");
    wrapperDonatie.setAttribute("class", "wrapper");

    let boxStyleDonatie = document.createElement("div");
    boxStyleDonatie.setAttribute("class", "section");

    let boxTitle = document.createElement("h2");
    boxTitle.setAttribute("class", "mb-3");
    boxTitle.innerHTML = "Susține Performanța!";

    // recurenta
    let donatiaTa = document.createElement("div");
    donatiaTa.setAttribute("class", "mb-3");

    let t1 = document.createElement("h6");
    t1.innerHTML = donatii.tipDonatii.title;

    let container1 = document.createElement("div");
    container1.setAttribute("class", "d-flex");

    for (i = 0; i < donatii.tipDonatii.valori.length; i++) {
      let cut = donatii.tipDonatii.valori;
      //input
      let input = document.createElement("input");
      input.setAttribute("class", "btn-check");
      input.setAttribute("name", "recurent");
      input.setAttribute("type", "radio");
      input.setAttribute("id", `${cut[i][1]}`);
      if (i === 0) {
        input.setAttribute("checked", `yes`);
      }

      //label
      let label = document.createElement("label");
      label.setAttribute("class", "btn btn-secondary btn-donatie w-50 border rounded me-1");
      label.setAttribute("for", `${cut[i][1]}`);
      label.innerHTML = `${cut[i][0]}`;

      // append
      container1.appendChild(input);
      container1.appendChild(label);
    }

    // append

    donatiaTa.appendChild(t1);
    donatiaTa.appendChild(container1);

    // voloare donatie

    let valoareDonatie = document.createElement("div");
    valoareDonatie.setAttribute("class", "mb-3");

    let t2 = document.createElement("h6");
    t2.innerHTML = donatii.valDonatie.title;

    let containerBig = document.createElement("div");

    let container2 = document.createElement("div");
    container2.setAttribute("class","row row-cols-5 mx-1")

    for (i = 0; i < donatii.valDonatie.valori.length; i++) {
      let cut = donatii.valDonatie.valori;
      //input
      let input = document.createElement("input");
      input.setAttribute("class", "btn-check");
      input.setAttribute("name", "suma");
      input.setAttribute("type", "radio");
      input.setAttribute("id", `${cut[i]}`);
      input.setAttribute("value", `${cut[i]}`);

      //label
      let label = document.createElement("label");
      label.setAttribute("class", "btn btn-secondary btn-donatie border rounded col me-1");
      label.setAttribute("onclick", `fill(${cut[i]})`);
      label.setAttribute("for", `${cut[i]}`);
      label.innerHTML = `${cut[i]}`;

      if (i === 3) {
        label.setAttribute("class", `btn btn-secondary btn-donatie border rounded col-4 me-1`);
        label.setAttribute("onclick", `choose()`);
        label.innerHTML = `Altă Sumă`;
      }

      // append
      container2.appendChild(input);
      container2.appendChild(label);
    }

    let introducereSuma = document.createElement("div");
    introducereSuma.setAttribute("class", "mt-3");
    introducereSuma.setAttribute("id", "cadru-amount");
    introducereSuma.style.display = "none";

    let t3 = document.createElement("p");
    t3.innerHTML = "Introduceti suma";

    let textField = document.createElement("input");

    textField.setAttribute("class", "form-control");
    textField.setAttribute("name", "amount");
    textField.setAttribute("type", "number");
    textField.setAttribute("id", `amount`);
    textField.setAttribute("min", `1`);
    textField.setAttribute("required", `yes`);

    introducereSuma.appendChild(t3);
    introducereSuma.appendChild(textField);

    let containerLittle = document.createElement("div")

    //append
    containerBig.appendChild(container2);
    containerLittle.appendChild(introducereSuma);

    valoareDonatie.appendChild(t2);
    valoareDonatie.appendChild(containerBig);
    valoareDonatie.appendChild(containerLittle);

    // moneda

    let monedaContainer = document.createElement("div");
    monedaContainer.setAttribute("class", "mb-3");

    let t4 = document.createElement("h6");
    t4.innerHTML = donatii.moneda.title;

    let container3 = document.createElement("div");
    container3.setAttribute("class", "d-flex");

    for (i = 0; i < donatii.moneda.valori.length; i++) {
      let cut = donatii.moneda.valori;
      //input
      let input = document.createElement("input");
      input.setAttribute("class", "btn-check");
      input.setAttribute("name", "curr");
      input.setAttribute("type", "radio");
      input.setAttribute("id", `curr-${cut[i]}`);
      input.setAttribute("value", `${cut[i].toUpperCase()}`);

      //label
      let label = document.createElement("label");
      label.setAttribute("class", "btn btn-secondary btn-donatie w-50 border rounded me-1");
      label.setAttribute("for", `curr-${cut[i]}`);
      label.innerHTML = `${cut[i].toUpperCase()}`;

      if (i === 0) {
        input.setAttribute("checked", `checked`);
      }

      // append
      container3.appendChild(input);
      container3.appendChild(label);
    }

    // append

    monedaContainer.appendChild(t4);
    monedaContainer.appendChild(container3);

    //final append

    boxStyleDonatie.appendChild(boxTitle);
    boxStyleDonatie.appendChild(donatiaTa);
    boxStyleDonatie.appendChild(monedaContainer);
    boxStyleDonatie.appendChild(valoareDonatie);
    wrapperDonatie.appendChild(boxStyleDonatie);
    section.appendChild(wrapperDonatie);
    document.getElementById("form").appendChild(section);

    /////////////////////////////////////////////////////////////////////////////

    let destinatieDonatieContainer = document.createElement("div");
    destinatieDonatieContainer.setAttribute("class", "d-none");

    let destinatieDonatieWheel = document.createElement("select");
    destinatieDonatieWheel.setAttribute("name", "desc");
    destinatieDonatieWheel.setAttribute("required", "yes");

    let destinatieDonatie = document.createElement("option");
    destinatieDonatie.setAttribute("selected", "yes");
    destinatieDonatie.setAttribute("value", `Donație - ${pentrCeDonez}`);
    destinatieDonatie.innerHTML = `Donație - ${pentrCeDonez}`;

    destinatieDonatieWheel.appendChild(destinatieDonatie);
    destinatieDonatieContainer.appendChild(destinatieDonatieWheel);
    boxStyleDonatie.appendChild(destinatieDonatieContainer);

    /////////////////////////////////////////////////////////////////////////////

    // wrapper2

    let wrapperDate = document.createElement("div");
    wrapperDate.setAttribute("class", "wrapper w-section-2");

    let boxStyleDate = document.createElement("div");
    boxStyleDate.setAttribute("class", "section datepersonale");

    let boxTitleDate = document.createElement("h2");
    boxTitleDate.setAttribute("class", "mb-3");
    boxTitleDate.innerHTML = "Date Donator";

    // date personale
    let dateleTale = document.createElement("div");
    dateleTale.setAttribute("class", "mb-3");

    boxStyleDate.appendChild(boxTitleDate);

    for (i = 0; i < datePersonaleNecesare.length; i++) {
      //pj
      if (log === "Persoane Fizice" && i === 2) {
        i++;
      }
      //container
      let container5 = document.createElement("div");
      container5.setAttribute("class", "mb-3");
      //input
      let input = document.createElement("input");
      input.setAttribute("class", "form-control");
      input.setAttribute("name", `${datePersonaleNecesare[i][1]}`);
      input.setAttribute("type", `text`);
      input.setAttribute("id", `${datePersonaleNecesare[i][0]}`);
      input.setAttribute("required", `true`);
      if (datePersonaleNecesare[i][0] === "Telefon") {
        input.setAttribute("type", `number`);
      }

      //label
      let label = document.createElement("label");
      label.setAttribute("for", `${datePersonaleNecesare[i][0]}`);
      label.innerHTML = `${datePersonaleNecesare[i][0]}`;

      // append
      container5.appendChild(label);
      container5.appendChild(input);
      dateleTale.appendChild(container5);
    }

    //////////////////////////////////////////////////////////////////

    let container7 = document.createElement("div");
    container7.setAttribute("class", "d-flex");

    let termeniSiConditiiCaseta = document.createElement("input");
    termeniSiConditiiCaseta.setAttribute("class", "form-check-input me-2");
    termeniSiConditiiCaseta.setAttribute("type", "checkbox");
    termeniSiConditiiCaseta.setAttribute("required", "yes");
    termeniSiConditiiCaseta.setAttribute("id", "termeni");

    let termeniSiConditii = document.createElement("label");
    termeniSiConditii.setAttribute("class", "form-check-label");
    termeniSiConditii.setAttribute("for", "termeni");
    termeniSiConditii.innerHTML = `Plasând o donație sunt de acord cu <a style="text-decoration:none;" href=\"./politica.html\">politica de confidențialitate.</a>`;

    container7.appendChild(termeniSiConditiiCaseta);
    container7.appendChild(termeniSiConditii);

    //append

    boxStyleDate.appendChild(dateleTale);
    boxStyleDate.appendChild(container7);
    wrapperDate.appendChild(boxStyleDate);

    section.appendChild(wrapperDate);

    ////////////////////////////////////////////////////////////////

    //submit

    let buttonSection = document.createElement("div");
    buttonSection.setAttribute(
      "class",
      "d-flex justify-content-center my-5 w-100"
    );

    let buttonDonare = document.createElement("input");
    buttonDonare.setAttribute("class", "action-button");
    buttonDonare.setAttribute("name", "Doneaza");
    buttonDonare.setAttribute("value", "Doneaza!");
    buttonDonare.setAttribute("type", "submit");

    buttonSection.appendChild(buttonDonare);
    section.appendChild(buttonSection);

    // Alternativ

    let alternativ = document.createElement("h5");
    let linkFormular = document.createElement("a");
    if (log === "Persoane Fizice") {
      alternativ.innerHTML = "Sunteti Persoană Juridică?";
      linkFormular.setAttribute(
        "href",
        `${navSubfolderPath}/doneaza/donatii-persoane-juridice.html`
      );
    } else {
      alternativ.innerHTML = "Sunteti Persoană Fizică?";
      linkFormular.setAttribute(
        "href",
        `${navSubfolderPath}/doneaza/donatii-persoane-fizice.html`
      );
    }
    linkFormular.setAttribute("class", "define-button text-decoration-none");
    linkFormular.innerHTML = "Apasați aici pentru formular";

    document.getElementById("switch").appendChild(alternativ);
    document.getElementById("switch").appendChild(linkFormular);

    // sestinere

    let catreRedirectionari = document.createElement("h5");
    catreRedirectionari.setAttribute("class","mt-5 text-center")
    let linkRedirectionari= document.createElement("a");
    if (log === "Persoane Fizice") {
      catreRedirectionari.innerHTML = "Dorți să ne sprijiniți prin redirecționarea impozitului?";
      linkRedirectionari.setAttribute(
        "href",
        `${navSubfolderPath}/redirectioneaza/redirectionare-3,5.html`
      );
    } else {
      catreRedirectionari.innerHTML = "Reprezentați o companie si doriți să ne susțineți?";
      linkRedirectionari.setAttribute(
        "href",
        `${navSubfolderPath}/redirectioneaza/redirectionare-20.html`
      );
    }
    linkRedirectionari.setAttribute("class", "define-button text-decoration-none mb-3");
    linkRedirectionari.innerHTML = "Apasați aici pentru campanie";

    document.getElementById("switch").appendChild(catreRedirectionari);
    document.getElementById("switch").appendChild(linkRedirectionari);


  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });

  function fill(number) {
    document.getElementById("amount").value = number;
    document.getElementById("cadru-amount").style.display = "none";
  }
  function choose() {
    document.getElementById("amount").value = 0;
    document.getElementById("cadru-amount").style.display = "block";
  }