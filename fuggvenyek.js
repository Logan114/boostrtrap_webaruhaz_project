
export function kereses(lista){
    const kereso = $(".in")
        kereso.on("keyup",function(){
            console.log("🦀")
            let keresett = kereso.val()
            const SZURTLiSTA = lista.filter(function (lista) {
                let talalt = lista.nev.includes(keresett);
            });
            
                
            })
        }
    

export function szuresNevSzerint(lista, szurtSzoveg) {
        /* szurtLista - a szűrőbe írt szó alaján kilistázza azokat az adatokat a listából, amelyekben szerepel a név mezőjében az adott szó.  */
        const SZURTLiSTA = lista.filter(function (elem) {
          return elem.nev.includes(szurtSzoveg);
        });
        console.log(SZURTLiSTA);
        return SZURTLiSTA;
      }


