import { tab } from "@testing-library/user-event/dist/tab";

export default function Naglowek({ tablicaKolumn, sterowanieSzerokoscia }) {
  return (
    <thead>
      <tr>
        {tablicaKolumn.map((wpis) => {
          // var wartoscKlasy = "py-2 pl-2";
          var wartoscKlasy = sterowanieSzerokoscia;
          wartoscKlasy += wpis.klucz === "kwota_wpisu" ? "text-right" :"text-left";
          return(<th className={wartoscKlasy} key={wpis.klucz}>{wpis.napis}</th>);
        })}
      </tr>
    </thead>
  );
}
