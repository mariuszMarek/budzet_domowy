import { useState, useEffect } from "react";
import { WrenchIcon } from "@heroicons/react/16/solid";

export default function EdytowalnaKomorka({
  initialValue,
  rowId,
  fieldMeta,
  handlujAktualizacjeWpisu,
  cssSettings,
}) {  
  const [canEdit, setCanEdit] = useState(fieldMeta?.edytowalne || false);
  const typDanych = typeof initialValue;
  // console.log(initialValue)
  // console.log(typDanych)
  const [cellValue, setCellValue] = useState(initialValue);
  const textAlign = cssSettings.includes("text-right")
    ? "text-right"
    : "text-left";

  useEffect(() => {
    setCellValue(initialValue);
  }, [initialValue]);

  const handleChange = () => {
    //dodać obsługę tej funkcji, chyba musze dodać więcej informacji do tego elementu, np jakiego typu są dane by input temu odpowiadał?
    handlujAktualizacjeWpisu(rowId, fieldMeta.klucz, cellValue);
    setCanEdit(false);
  };
  const handlujAktualizacjeWartosciKomorki = (e) => {
    setCellValue(e.target.value);
  };
  const kodHTML = (
    <div className="inline-flex items-center justify-between w-full gap-2">
      <div>
        {canEdit ? (
          <input
            className={`min-w-max p-0 m-0 border-none bg-white ${textAlign}`}
            size={12}
            disabled={!canEdit}
            value={cellValue}
            onChange={handlujAktualizacjeWartosciKomorki}
          />
        ) : (
          <div>{cellValue}</div>
        )}
      </div>
      <span onClick={() => setCanEdit(!canEdit)} className="ml-4 items-end">
        <WrenchIcon
          title="edit"
          className="size-4 text-gray-400 hover:text-emerald-500"
        />
      </span>
    </div>
  );
  return kodHTML;
}
