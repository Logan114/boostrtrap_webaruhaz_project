import { termekLista } from "./adatlista.js";
import { szuresNevSzerint, szortirozasArSzerint, kosarListaEloszedes, szortirozasNevSzerint } from "./fuggvenyek.js";

let kosarLista = [];

const arSzerintHTML = $(".arSzerint");
const nevSzerintHTML = $(".nevSzerint");


window.kosarba = function(id) {
  kosarLista.push(id);
  console.log(id);
  console.log(kosarLista);  
  localStorage.setItem("kosarLista", JSON.stringify(kosarLista));
}


init(termekLista);
nevSzuresEsemeny(termekLista);
szuresKattintasra(termekLista, arSzerintHTML,nevSzerintHTML);

function init(lista) {
  let txt = weboldal_letrehozas(lista);
  weboldal_megjelenites(txt);
}

function weboldal_megjelenites(txt,`.termekek`) {
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
    txt += `<h3 class="ar${id}">${termek.ar}Ft </h3>`;
    txt += `<button type="button" class="btn btn-primary btn-block termek${id} kosar" onclick="kosarba(${id})"> Kosárba</button>`;
    txt += `</div>`;
  });
  return txt;
}

function nevSzuresEsemeny(lista) {
  const szuroELEM = $(".in");
  ffffZoveg = szuroELEM.val();
    const szurtLista = szuresNevSzerint(lista, szuroSZoveg);
    init(szurtLista);
  };


function szuresKattintasra(lista, arszerintGomb,nevszerintGomb) {
  arszerintGomb.on("click", function () {
    const arrendezettLista = szortirozasArSzerint(lista);
    init(arrendezettLista);
  nevszerintGomb.on("click",function(){
    const nevrendezettLista = szortirozasNevSzerint(lista);
    init(nevrendezettLista);
  })
  });
}
kosarListaEloszedes()