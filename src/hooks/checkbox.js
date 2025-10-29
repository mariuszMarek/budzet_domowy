import { useState } from 'react'
import { Checkbox, Field, Label} from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/16/solid'

export default function CustomCheckbox({nazwa, zaznaczony, gdyZmiana}) {  
    const handlujZmianeCheckboxa = (nowaWartoscBoolean) => {    
    const event = {
      target: {
        name: nazwa,
        value: nowaWartoscBoolean,
        type: 'check_box'
      }
    };    
    gdyZmiana(event);
  };
  return (
    <Field className="flex items-center gap-2">
      <Checkbox
        checked={zaznaczony}
        onChange={handlujZmianeCheckboxa}
        className="group block size-4 rounded border bg-white data-checked:bg-blue-500"
      >
        <CheckIcon className="hidden size-4 fill-black group-data-checked:block" />
        <svg className="stroke-white opacity-0 group-data-checked:opacity-100" viewBox="0 0 14 14" fill="none">
          <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Checkbox>
      <Label>Opłacony?</Label>
    </Field>
  )
}