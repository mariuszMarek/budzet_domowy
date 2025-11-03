import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

import EdytowalnaKomorka from "./edytowalna_komorka";
export default function Cialo({ tablicaWierszy, tablicaKolumn, sterowanieSzerokoscia, handlujAktualizacjeWpisu }) {
  console.log(tablicaWierszy)
  return (
    <tbody>
      {tablicaWierszy.map((wierszTablicy) => {
        return (
          <tr key={wierszTablicy.id_wpisu+"_w"}>
            {tablicaKolumn.map((kolumna) => {
              var daneWpisu = "";
              var sterowanieTekstem = sterowanieSzerokoscia;
              if (kolumna.klucz in wierszTablicy) {
                daneWpisu = wierszTablicy[kolumna.klucz];
                const typDanych = typeof daneWpisu;
                // console.log(typDanych)
                sterowanieTekstem = kolumna.klucz === "kwota_wpisu" ? sterowanieTekstem + " text-right" : sterowanieTekstem;
                if (typDanych == "boolean") {
                  // tutaj dodać możliwośc zmiany z false na true, jednorazowo
                  return (
                  <td className="inline-flex w-full justify-center">
                    {daneWpisu ? <CheckCircleIcon className='size-5 text-green-500' title='Opłacony' /> : <XCircleIcon className='size-5 text-red-500' title='Nieopłacony' />}
                  </td>
                );                
                } else {
                  return (
                    <td className={sterowanieTekstem} key={kolumna.klucz+"_K"}>
                      <EdytowalnaKomorka
                        className={sterowanieTekstem}
                        key={kolumna.klucz}
                        initialValue={daneWpisu}
                        rowId={wierszTablicy.id_wpisu+"_e"}
                        fieldMeta={kolumna}
                        handlujAktualizacjeWpisu={handlujAktualizacjeWpisu}
                        nadrzedneSterowanie={sterowanieTekstem}
                        cssSettings={sterowanieTekstem}
                      />
                    </td>
                  );
                }
              }
            })}
          </tr>
        );
      })}
    </tbody>
  );
}
