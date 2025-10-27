import Cialo from "./cialo";
import Naglowek from "./naglowek";
export default function WlasnaTabela({ tablicaWierszy, tablicaKolumn }) {
//   console.log("jestem w tabeli");
  return (
    <table className='text-xs border-collapse w-full leading-none h-min'>
      <Naglowek tablicaKolumn={tablicaKolumn} />
      <Cialo tablicaWierszy={tablicaWierszy} tablicaKolumn={tablicaKolumn}/>
      {/* <tbody>
        {tablicaWierszy          
          .reverse()
          .map((wpis) => {
            return (
              <tr key={wpis.id_wpisu} className='text-left'>
                <td className='py-1 px-1.5'>{wpis.dzien_wpisu.split("T")[0]}</td>
                <td className='py-1 px-1.5'>{wpis.kwota_wpisu}</td>
                <td className='py-1 px-1.5'>{wpis.opis_wpisu}</td>
                <td className='py-1 px-1.5'>{wpis.kategoria}</td>
                <td className='py-1 px-1.5'>{wpis.okres_wpisu}</td>
              </tr>
            );
          })}
      </tbody> */}
    </table>
  );
}
