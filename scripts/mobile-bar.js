// mobile header
let container = document.getElementById("donate-button")
container.setAttribute("class", "donate-button")

let bar = document.createElement("a");
bar.href = "#sustine"
bar.innerHTML = "DONEAZĂ"

container.appendChild(bar)