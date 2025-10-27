export default function Cialo({ tablicaWierszy, tablicaKolumn }) {
  return (
    <tbody>
      {tablicaWierszy.map((wierszTablicy) => {
        return (
          <tr key={wierszTablicy.klucz}>
            {tablicaKolumn.map((kolumna) => {
              const daneWpisu = wierszTablicy[kolumna.klucz] ? wierszTablicy[kolumna.klucz] : "-";
              return <td key={kolumna.klucz}>daneWpisu</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
}
