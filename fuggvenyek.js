export function kereses(lista) {
  const kereso = $(".in");
  kereso.on("keyup", function () {
    console.log("🦀");
    let keresett = kereso.val();
    const SZURTLiSTA = lista.filter(function (lista) {
      let talalt = lista.nev.includes(keresett);
    });
  });
}
export function weboldal_megjelenites(txt,modositandoHTML) {
  modositandoHTML = $(".termekek");
  modositandoHTML.html(txt);
}


export function szuresNevSzerint(lista, szurtSzoveg) {
  /* szurtLista - a szűrőbe írt szó alaján kilistázza azokat az adatokat a listából, amelyekben szerepel a név mezőjében az adott szó.  */
  const SZURTLiSTA = lista.filter(function (elem) {
    return elem.nev.includes(szurtSzoveg);
  });
  console.log(SZURTLiSTA);
  return SZURTLiSTA;
}

export function szortirozasArSzerint(lista) {
  lista.sort(function (a, b) {
    if (a.ar < b.ar) {
      return -1;
    } else {
      return 1;
    }
  });
  return lista}

export function szortirozasNevSzerint(lista){
  lista.sort(function(a,b){
    if (a.nev < b.nev) {
      return -1
    }
    else {
      return 1
    }
  })
  return lista
}
export function kosarListaEltarolas(){}
export function kosarListaEloszedes(){
  const storedKosarLista = localStorage.getItem('kosarLista');
  if (storedKosarLista){
    const kosarLista=JSON.parse(storedKosarLista)
    console.log(kosarLista)
    return kosarLista

  }
  else{console.log("Nincs tárolt kosár")}
}