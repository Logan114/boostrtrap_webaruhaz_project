import { kosarListaEloszedes } from "./fuggvenyek.js";
import { termekLista } from "./adatlista.js";
let kosarLista = kosarListaEloszedes()
console.log(`kosár lista: ${kosarLista}`)
let id = 0;
let index = 0;
let vegosszeg = 0;
let txt = ``;
function kosarTartalma(idLista){
    kosarLista.forEach((id,index) => { //id ként van eltárolva a lista eleme, index meg egy más tészta
        let listaHtml= $(".kosar")
        console.log(termekLista[id].nev)
        //termekLista[id].ar =+ vegosszeg
        //console.log(vegosszeg) jó ezt majd a ChatGPT megoldja
        txt += `<div class="card col-lg-4 termek${id}">`;
        txt += `<img src="${termekLista[id].img}" alt="polo" />`;
        txt += `<h1>${termekLista[id].nev} </h1>`;
        txt += `<h3 class="ar${id}">${termekLista[id].ar}Ft </h3>`;
        txt += `<button type="button" class="btn btn-primary btn-block termek${id} kosar" onclick="kosarba(${id})"> Kosárba</button>`;
        txt += `</div>`;
        
    });
}


function weboldal_letrehozas(lista) {
    let i = 0;
    let txt = "";
    lista.forEach((termek, id) => {
      
    });
    return txt;
  }
  
kosarTartalma(kosarLista)