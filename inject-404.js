const h = document.getElementsByTagName("head")[0]

let m = ["bootstrap","style-nav","buttons-donatii","style-footer"]

for (let i = 0; i<m.length; i++){
    let link = document.createElement("link")
    link.setAttribute("rel",`stylesheet`)
    link.setAttribute("href",`${navSubfolderPath}/css/${m[i]}.css`)

    h.appendChild(link)
}

let j = ["bootstrap","nav-bar-element","botton-generator","footer"]

for (let i = 0; i<j.length; i++){
    let link = document.createElement("script")
    link.defer = true
    link.setAttribute("src",`${navSubfolderPath}/scripts/${j[i]}.js`)

    h.appendChild(link)
}