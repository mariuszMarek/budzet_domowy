import { pola, useWydatek, formatujKwote } from "../hooks/formularze";
import CustomCombobox from "../hooks/combox";
import CustomCheckbox from "../hooks/checkbox";

export default function WydatekDzienny({ handlujDodanieWpisu }) {
  const { wydatek, setWydatek, handlujZmiane, zerujFormularz, handlujOnBlur } = useWydatek();

  const dodajWpis = (e) => {
    e.preventDefault();
    const wydatekSformatowany = {
      ...wydatek,
      kwota_wpisu: formatujKwote(wydatek.kwota_wpisu),
    };
    handlujDodanieWpisu(wydatekSformatowany);
    zerujFormularz();    
  };

  const kodHTML = (
    <div className='flex flex-col gap-5 max-w'>
      <form onSubmit={dodajWpis} className=''>
        {pola.map((pole) => {
          const { datalist, wartosc_domyslna, label, ...atrybuty } = pole;
          const aktualnaWartosc = wydatek[atrybuty.name];
          if (atrybuty.type === "hidden") {
            return <input key={atrybuty.id} value={aktualnaWartosc} onChange={handlujZmiane} name={atrybuty.name} type='hidden' />;
          }
          else if (atrybuty.type === "list") {
            return (
              <div className='pb-4 flex flex-col' key={atrybuty.id}>
                <label className='mb-1 font-medium' htmlFor={atrybuty.id}>
                  {label}:
                </label>
                <CustomCombobox daneDoListowania={atrybuty.dataMap} aktualneValue={aktualnaWartosc} gdyZmiana={handlujZmiane} />
              </div>
            );            
          }          
          else if (atrybuty.type == "check_box") {
            // console.log("aktualnaWartosc");
            // console.log(aktualnaWartosc);
            // console.log(atrybuty.type)
            // console.log("#"+aktualnaWartosc+"#")
            return (
              <div key={atrybuty.id} className='pb-4 flex flex-col'>
              <CustomCheckbox nazwa={atrybuty.name} zaznaczony={aktualnaWartosc} gdyZmiana={handlujZmiane}/>
              </div>
               )
          } else {
            return (
              <div key={atrybuty.id} className='pb-4 flex flex-col'>
                <label htmlFor={atrybuty.id} className='mb-1 font-medium'>
                  {label}:
                </label>
                <input
                  {...atrybuty}
                  value={aktualnaWartosc}
                  key={atrybuty.id}
                  onChange={handlujZmiane}
                  className='p-2 border rounded-md shadow-md'
                  onBlur={atrybuty.name === "kwota_wpisu" ? handlujOnBlur : null}
                />
              </div>
            );
          }
        })}
        <button type='submit' className='flex flex-col hover:bg-emerald-500 shadow-md rounded-xl p-4 justify-center transition w-full'>
          Dodaj
        </button>
      </form>
    </div>
  );

  return kodHTML;
}
