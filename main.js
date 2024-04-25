import { termekLista } from "./adatlista.js"
import { szuresNevSzerint } from "./fuggvenyek.js"
init(termekLista)

function init(lista) {
  let txt = weboldal_letrehozas(lista);

}

function weboldal_letrehozas(lista){
    const termekekHTML = $(".termekek")
    let i=0
    let txt =""
    lista.forEach((element,id) => {
        txt +=(`<div class="card termek${id}">`)
        txt +=(`<div class="card">`)
        txt +=(`<img src="${lista[id].img}" alt="polo" />`)
        txt +=(`<h1>${lista[id].nev} </h1>`)
        txt +=(`<h3 class=ar${id}>${lista[id].ar} </h3>`)
        txt +=(`<div class="btn btn-primary btn-block termek${id}">
        <p>kosárba</p>
      </div>`)
      
        txt +=(`</div>`)
        txt +=(`</div>`)
    });
    termekekHTML.html(txt)
    
}


function nevSzuresEsemeny(lista) {
  const szuroELEM = $(".in");
  szuroELEM.on("keyup", function () {
    let szuroSZoveg = szuroELEM.val();
    const LISTA = szuresNevSzerint(lista, szuroSZoveg);
    console.log(LISTA)
    init(LISTA)
  });
}
nevSzuresEsemeny(termekLista)

