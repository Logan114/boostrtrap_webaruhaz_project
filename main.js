import { termekLista } from "./adatlista.js";
import { szuresNevSzerint, szortirozasArSzerint, kosarListaEloszedes, szortirozasNevSzerint } from "./fuggvenyek.js";

let kosarLista = JSON.parse(localStorage.getItem("kosarLista")) || [];

const arSzerintHTML = $(".arSzerint");
const nevSzerintHTML = $(".nevSzerint");

window.kosarba = function(tsz) {
  kosarLista.push(tsz);
  console.log(tsz);
  console.log(kosarLista);
  localStorage.setItem("kosarLista", JSON.stringify(kosarLista));
}

init(termekLista);
nevSzuresEsemeny(termekLista);
szuresKattintasra(termekLista, arSzerintHTML, nevSzerintHTML);

function init(lista) {
  let txt = weboldal_letrehozas(lista);
  weboldal_megjelenites(txt);
}

function weboldal_megjelenites(txt) {
  const termekekHTML = $(".termekek");
  termekekHTML.html(txt);
}

function weboldal_letrehozas(lista) {
  let i = 0;
  let txt = "";
  lista.forEach((termek, id) => {
    txt += `<div class="card col-lg-4 termek${id}">`;
    txt += `<img src="${termek.img}" alt="polo" />`;
    txt += `<h1>${termek.nev} </h1>`;
    txt += `<h3 class="ar${termekLista[id].szam}">${termek.ar}Ft </h3>`;
    txt += `<button type="button" class="btn btn-primary btn-block termek${termekLista[id].szam} kosar" onclick="kosarba(${termekLista[id].szam})"> Kosárba</button>`;
    txt += `</div>`;
    console.log(termekLista[id].szam)
  });
  return txt;
}

function nevSzuresEsemeny(lista) {
  const szuroELEM = $(".in");
  szuroELEM.on("input", function() {
    ffffZoveg = szuroELEM.val();
    const szurtLista = szuresNevSzerint(lista, szuroSZoveg);
    init(szurtLista);
  });
}

function szuresKattintasra(lista, arszerintGomb, nevszerintGomb) {
  arszerintGomb.on("click", function () {
    const arrendezettLista = szortirozasArSzerint(lista);
    init(arrendezettLista);
  });
  nevszerintGomb.on("click", function() {
    const nevrendezettLista = szortirozasNevSzerint(lista);
    init(nevrendezettLista);
  });
}

kosarListaEloszedes();
