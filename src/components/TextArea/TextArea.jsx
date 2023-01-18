import React from 'react';

export function TextArea({ label, name, rows, value }) {
  return (
    <div className='mb-2'>
      <label className='font-semibold text-xs capitalize pl-1 text-zinc-500' htmlFor={name}>
        {label}
      </label>
      <textarea
        className='w-full border rounded p-1'
        name={name}
        rows={rows}
        defaultValue={value}
      />
    </div>
  );
}
