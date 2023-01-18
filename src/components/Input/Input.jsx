import React from 'react';

export function Input({ label, name, placeholder, required, type, value }) {
  return (
    <div className='mb-2'>
      <label className='font-semibold text-xs capitalize pl-1 text-zinc-500' htmlFor={name}>
        {label}
      </label>
      <input
        className='border rounded p-1 text-xl w-full placeholder:capitalize'
        name={name}
        placeholder={placeholder}
        required={required}
        type={type}
        defaultValue={value}
      />
    </div>
  );
}
