import { pola} from "../hooks/formularze";
export default function OstatnieWpisy({wpisy}) {
  return (
    <table className='text-xs border-collapse w-full leading-none h-min'>
      <thead >
        <tr className="text-left">
          <th className="py-2 px-1.5">Data</th>
          <th className="py-2 px-1.5">PLN</th>
          <th className="py-2 px-1.5">Opis</th>
          <th className="py-2 px-1.5">Kategoria</th>
          <th className="py-2 px-1.5">Okres</th>
        </tr>
      </thead>
      <tbody>
        {wpisy
          .slice(-5)
          .reverse()
          .map((wpis) => {
            return (
              <tr key={wpis.id_wpisu} className="text-left">
                <td className="py-1 px-1.5">{wpis.dzien_wpisu.split("T")[0]}</td>
                <td className="py-1 px-1.5">{wpis.kwota_wpisu}</td>
                <td className="py-1 px-1.5">{wpis.opis_wpisu}</td>
                <td className="py-1 px-1.5">{wpis.kategoria}</td>
                <td className="py-1 px-1.5">{wpis.okres_wpisu}</td>
              </tr>              
            );
          })}
      </tbody>
    </table>
  );
}
