import { termekLista } from "./adatlista.js";
import { szuresNevSzerint, szortirozasArSzerint } from "./fuggvenyek.js";
let kosarLista = [ ]
const arSzerintHTML = $(".arSzerint");
const nevSzerintHTML = $(".nevSzerint")
init(termekLista);
nevSzuresEsemeny(termekLista);
szuresKattintasra(termekLista, arSzerintHTML);

function init(lista) {
  let txt = weboldal_letrehozas(lista);
  weboldal_megjelenites(txt);
  console.log("🦀");
}

function weboldal_megjelenites(txt) {
  const termekekHTML = $(".termekek");
  termekekHTML.html(txt);
}
function weboldal_letrehozas(lista) {
  let i = 0;
  let txt = "";
  lista.forEach((element, id) => {
    txt += `<div class="card termek${id}">`;
    txt += `<div class="card">`;
    txt += `<img src="${termekLista[id].img}" alt="polo" />`;
    txt += `<h1>${termekLista[id].nev} </h1>`;
    txt += `<h3 class=ar${id}>${termekLista[id].ar} </h3>`;
    txt += `<button type="button" class="btn btn-primary btn-block termek${id} kosar" onclick="kosarLista.push(${id})"> kosarba</button>
    </div>`;

    txt += `</div>`;
    txt += `</div>`;
  });
  return txt;
}
function kosargomb(gomb){
  const gombHTML =$(".kosar")
  console.log(kosarLista)
}

function nevSzuresEsemeny(lista) {
  const szuroELEM = $(".in");
  szuroELEM.on("keyup", function () {
    let szuroSZoveg = szuroELEM.val();
    const LISTA = szuresNevSzerint(lista, szuroSZoveg);
    console.log(LISTA);
    init(LISTA)
  });
}


function szuresKattintasra(lista, htmlElem) {
  htmlElem.on("click", function () {
    console.log(lista)
    const LISTA = szortirozasArSzerint(lista);
    init(LISTA);
  });
}