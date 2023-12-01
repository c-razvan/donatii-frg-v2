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

// mobile header
let container = document.getElementById("donate-button");
container.setAttribute("class", "donate-button");

let bar = document.createElement("a");
bar.href = "#sustine";
bar.innerHTML = "DONEAZĂ";

container.appendChild(bar);
