import { Fragment, useState } from "react";
import { Checkbox, Field, Label } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";

export default function CustomCheckbox({ nazwa, zaznaczony, gdyZmiana }) {
  const handlujZmianeCheckboxa = (nowaWartoscBoolean) => {
    const event = {
      target: {
        name: nazwa,
        value: nowaWartoscBoolean,
        type: "check_box",
      },
    };
    gdyZmiana(event);
  };
  return (
    // <div>
      <Field className='flex items-center gap-2'>
        <Checkbox checked={zaznaczony} onChange={handlujZmianeCheckboxa} as={Fragment}>
          {({ checked, disabled }) => (
            <span
              className={clsx(
                "block size-4 rounded border",
                !checked && "bg-white",
                checked && !disabled && "bg-blue-500",
                checked && disabled && "bg-gray-500",
                disabled && "cursor-not-allowed opacity-50"
              )}
            >
              <svg className={clsx("stroke-white", checked ? "opacity-100" : "opacity-0")} viewBox='0 0 14 14' fill='none'>
                <path d='M3 8L6 11L11 3.5' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
              </svg>
            </span>
          )}
        </Checkbox>
        <Label>Opłacony?</Label>
      </Field>
    // /* </div> */
  );
}
