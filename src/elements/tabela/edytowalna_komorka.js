import { useState, useEffect } from "react";
import { WrenchIcon } from "@heroicons/react/16/solid";

export default function EdytowalnaKomorka({ initialValue, rowId, fieldMeta, handlujAktualizacjeWpisu, cssSettings }) {
//   const [canEdit, setCanEdit] = useState(true);
const [canEdit, setCanEdit] = useState(fieldMeta?.edytowalne || false);
// console.log(fieldMeta)
  const [cellValue, setCellValue] = useState(initialValue);
  const textAlign = cssSettings.includes("text-right") ? "text-right" : "text-left";

  useEffect(() => {
    setCellValue(initialValue);
  }, [initialValue]);

  const handleChange = () => {
    handlujAktualizacjeWpisu(rowId, fieldMeta.klucz, cellValue);
    setCanEdit(false);
  };
  const handlujAktualizacjeWartosciKomorki = (e) => {
    setCellValue(e.target.value);
  };
  //   console.log(canEdit);
  const kodHTML = (
    <div className='inline-flex items-center gap-1'>
      <div 
    //   className='flex-grow'
      >
        {canEdit ? (
          <input 
          className={`min-w-max p-0 m-0 border-none bg-white ${textAlign}`}
          size={1}
          disabled={!canEdit} value={cellValue} onChange={handlujAktualizacjeWartosciKomorki} />
        ) : (
          <div >{cellValue}</div>
        )}
      </div>
      <span onClick={() => setCanEdit(!canEdit)} className='pl-2'>
        <WrenchIcon title='edit' className='size-4 text-gray-400 hover:text-emerald-500' />
      </span>
    </div>
  );
  return <>{kodHTML}</>;
}
