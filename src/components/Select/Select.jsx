import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export function Select({ label, name, options, value }) {
  return (
    <div className='mb-2'>
      <label className='font-semibold text-xs capitalize pl-1 text-zinc-500' htmlFor={name}>
        {label}
      </label>
      <div className='flex relative'>
        <select
          className='w-full capitalize appearance-none border p-1 text-xl'
          name={name}
          defaultValue={value}
        >
          {options.map((option) => {
            return (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            );
          })}
        </select>
        <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
          <ChevronDownIcon className='h-5 w-5 text-zinc-500' />
        </span>
      </div>
    </div>
  );
}
