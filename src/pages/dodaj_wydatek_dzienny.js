import { pola, useWydatek,formatujKwote } from "../hooks/formularze";
export default function WydatekDzienny({ handlujDodanieWpisu }) {
  const { wydatek, setWydatek, handlujZmiane, zerujFormularz, handlujOnBlur } =
    useWydatek();

  const dodajWpis = (e) => {
    e.preventDefault();
    const wydatekSformatowany = {
        ...wydatek,
        kwota_wpisu: formatujKwote(wydatek.kwota_wpisu)
    }
    handlujDodanieWpisu(wydatekSformatowany);
    zerujFormularz();
  };

  const kodHTML = (
    <div>
      <form onSubmit={dodajWpis} className="max-w">
        {pola.map((pole) => {
          const { datalist, wartosc_domyslna, label, ...atrybuty } = pole;
          const aktualnaWartosc = wydatek[atrybuty.name];
            // console.log(aktualnaWartosc)
          if (atrybuty.type === "hidden") {
            return (
              <input
                key={atrybuty.id}
                // value={aktualnaWartosc}
                value={aktualnaWartosc}
                onChange={handlujZmiane}
                name={atrybuty.name}
                type="hidden"
              />
            );
          }
          if (atrybuty.type === "list") {
            return (
              <div className="pb-4 flex flex-col" key={atrybuty.id}>
                <label className="mb-1 font-medium" htmlFor={atrybuty.id}>
                  {label}:
                  {/* <input                    
                    className="mt-2 p-2 rounded-md shadow-md w-full"
                    list={atrybuty.id}
                    value={aktualnaWartosc}
                    onChange={handlujZmiane}
                    {...atrybuty}
                    type="text"
                  /> */}
                </label>
                  <select className="mt-2 p-2 rounded-md shadow-md w-full bg-black bg-transparent"
                  id={atrybuty.id}
                  name={atrybuty.id}
                  onChange={handlujZmiane}
                  value={aktualnaWartosc}
                  >
                    {datalist.map((wpisListy) => {
                        console.log(wpisListy)
                        return <option key={wpisListy} value={wpisListy} />;}
                    )}
                  </select>
                {/* <datalist id={atrybuty.id}>
                  {datalist.map((wpisListy) => {
                    return <option key={wpisListy} value={wpisListy} />;
                  })}
                </datalist> */}
              </div>
            );
          }
          return (
            <div key={atrybuty.id} className="pb-4 flex flex-col">
              <label htmlFor={atrybuty.id} className="mb-1 font-medium">
                {label}:
              </label>
              <input
                {...atrybuty}
                value={aktualnaWartosc}
                key={atrybuty.id}
                onChange={handlujZmiane}
                className="p-2 border rounded-md shadow-md w-full"
                onBlur={atrybuty.name === "kwota_wpisu" ? handlujOnBlur : null}
              />
            </div>
          );
        })}
        <button
          type="submit"
          className="flex flex-col hover:bg-emerald-500 shadow-md rounded-xl p-4 justify-center w-full trams"
        >
          Dodaj
        </button>
      </form>
    </div>
  );

  return kodHTML;
}
