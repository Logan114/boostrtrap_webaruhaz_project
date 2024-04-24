import { termekLista } from "./adatlista.js"
function weboldal_letrehozas(){
    const termekekHTML = $(".termekek")
    let i=0
    termekLista.forEach((element,id) => {
        termekekHTML.append(`<div class="card termek${id}">`)
        termekekHTML.append(`<div class="card">`)
        termekekHTML.append(`<img src="${termekLista[id].img}" alt="polo" />`)
        termekekHTML.append(`<h1>${termekLista[id].nev} </h1>`)
        termekekHTML.append(`<h3>${termekLista[id].ar} </h3>`)
        termekekHTML.append(`<div class="btn btn-primary btn-block termek${id}">
        <p>kosárba</p>
      </div>`)
        
        termekekHTML.append(`</div">`)
        termekekHTML.append(`</div">`)
    });
    
}

weboldal_letrehozas()

