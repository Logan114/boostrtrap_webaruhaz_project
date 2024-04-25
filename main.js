import { termekLista } from "./adatlista.js";
import { szortirozasArSzerint, szuresNevSzerint } from "./fuggvenyek.js";
init(termekLista);
function init(lista) {
  const arSzerintHTML = $(".arSzerint");
  let txt = weboldal_letrehozas();
  weboldal_megjelenites(txt)
  szuresKattintasra(termekLista,arSzerintHTML)
  console.log("🦀")
}
function weboldal_megjelenites(txt){
  const termekekHTML=$(".termekek")
  termekekHTML.html(txt)
}
function weboldal_letrehozas() {
  let i = 0;
  let txt = "";
  termekLista.forEach((element, id) => {
    txt += `<div class="card termek${id}">`;
    txt += `<div class="card">`;
    txt += `<img src="${termekLista[id].img}" alt="polo" />`;
    txt += `<h1>${termekLista[id].nev} </h1>`;
    txt += `<h3 class=ar${id}>${termekLista[id].ar} </h3>`;
    txt += `<div class="btn btn-primary btn-block termek${id}">
    <p>kosárba</p>
    </div>`;
    
    txt += `</div>`;
    txt += `</div>`;
  });
  return txt

}

function nevSzuresEsemeny(lista) {
  const szuroELEM = $(".in");
  szuroELEM.on("keyup", function () {
    let szuroSZoveg = szuroELEM.val();
    const LISTA = szuresNevSzerint(lista, szuroSZoveg);
    console.log(LISTA);
    init(LISTA);
  });
}
nevSzuresEsemeny(termekLista);

function szuresKattintasra(lista, htmlElem) {
  htmlElem.on("click", function () {
    const LISTA = szortirozasArSzerint(lista)
    init(LISTA)

  });
}


