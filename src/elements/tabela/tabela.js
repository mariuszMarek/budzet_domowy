import Cialo from "./cialo";
import Naglowek from "./naglowek";
export default function WlasnaTabela({ tablicaWierszy, tablicaKolumn, handlujAktualizacjeWpisu }) {
  const sterowanieSzerokoscia = "py-0.5 px-2 min-w-[140px] "
  return (
    <table className='text-xs border-collapse leading-none h-min'>
      <Naglowek tablicaKolumn={tablicaKolumn}  sterowanieSzerokoscia={sterowanieSzerokoscia}/>
      <Cialo tablicaWierszy={tablicaWierszy} tablicaKolumn={tablicaKolumn} sterowanieSzerokoscia={sterowanieSzerokoscia} handlujAktualizacjeWpisu={handlujAktualizacjeWpisu}/>
    </table>
  );
}
