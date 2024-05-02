import { termekLista } from "./adatlista.js";
import { szuresNevSzerint, szortirozasArSzerint } from "./fuggvenyek.js";
init(termekLista);
let kosarLista = [ ]

function init(lista) {
  let txt = weboldal_letrehozas(lista);
  const arSzerintHTML = $(".crab");
  weboldal_megjelenites(txt);
  szuresKattintasra(termekLista, arSzerintHTML);
  console.log("🦀");
}

function weboldal_megjelenites(txt) {
  const termekekHTML = $(".termekek");
  termekekHTML.html(txt);
}
function weboldal_letrehozas(lista) {
  let i = 0;
  let txt = "";
  termekLista.forEach((element, id) => {
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
    weboldal_megjelenites(txt)
  });
}
nevSzuresEsemeny(termekLista);

function szuresKattintasra(lista, htmlElem) {
  htmlElem.on("click", function () {
    const LISTA = szortirozasArSzerint(lista);
    init(LISTA);
  });
}