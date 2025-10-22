import { pola, useWydatek } from "../hooks/formularze";
export default function WydatekDzienny({ onSubmit }) {
  const { wydatek, setWydatek, handlujZmiane, zerujFormularz } = useWydatek();

  const dodajWpis = (e) => {
    e.preventDefault();
    onSubmit(wydatek);
    zerujFormularz();
  };

  const kodHTML = (
    <div>
      <form onSubmit={dodajWpis} className="space-y-4 max-w-lg">
        {Object.entries(pola).map((pole) => {
          const { datalist, value: defaultValue, ...listaAtrybuty } = pole;
          const atrybuty = listaAtrybuty[1]
        //   console.log(atrybuty[1])
          if (atrybuty.type === "hidden") {
            return <input className="flex flex-col" {...atrybuty} onChange={handlujZmiane} />;
          }
          if (atrybuty.type === "list") {
            return <input className="flex flex-col" type="text" value="dupa" placeholder="ELO" />;
          }
          return (
            <div key={atrybuty.id} className="flex flex-col">
              <label htmlFor={atrybuty.id} className="mb-1 font-medium">
                {atrybuty.placeholder}: {/* Używamy placeholder jako labelki */}
              </label>
              <input
                {...atrybuty} // Przekazuje name, id, type, required, placeholder, step, min...
                value={wydatek[atrybuty.name]} // Wartość ZAWSZE ze stanu
                onChange={handlujZmiane}
                className="p-2 border rounded-md shadow-sm"
              />
            </div>
          );
        })}
        <input type="submit" />
      </form>
    </div>
  );

  return kodHTML;
}
