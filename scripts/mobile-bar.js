// get dynamic path

function getScriptPath() {
  const scriptElement = document.currentScript;

  if (scriptElement) {
    const scriptSrc = scriptElement.src;
    return scriptSrc;
  } else {
    console.error("document.currentScript is not supported in this browser.");
    return null;
  }
}

const navScriptPath = getScriptPath();
const navSubfolderPath = navScriptPath.replace(
  `/scripts/${navScriptPath.split("/").pop()}`,
  ""
);

// ico

let ico = document.createElement("link")
ico.setAttribute("rel","icon")
ico.setAttribute("type","image/x-icon")
ico.setAttribute("href",`${navSubfolderPath}/assets/favicon.ico`)
document.getElementsByTagName("head")[0].appendChild(ico)

// mobile header
let container = document.getElementById("donate-button");
container.setAttribute("class", "donate-button");

let bar = document.createElement("a");
bar.href = `${navSubfolderPath}/doneaza/donatii-persoane-fizice.html`;
bar.innerHTML = "DONEAZĂ";

container.appendChild(bar);

document
  .getElementById("404")
  .setAttribute("href", `${navSubfolderPath}/index.html`);
