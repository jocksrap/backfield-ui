import React from 'react';

export default function Button({ label, shape, size, style, title, type }) {
  let styles = ['inline-block font-semibold rounded'];

  const primaryClasses = ['bg-blue-600', 'text-white', 'hover:bg-blue-700', 'active:bg-blue-600'];
  const secondaryClasses = [
    'bg-zinc-300',
    'text-zinc-800',
    'hover:bg-zinc-400',
    'active:bg-zinc-300',
  ];
  const infoClasses = ['bg-cyan-600', 'text-white', 'hover:bg-cyan-700', 'active:bg-cyan-600'];
  const successClasses = [
    'bg-green-600',
    'text-white',
    'hover:bg-green-700',
    'active:bg-green-600',
  ];
  const warningClasses = [
    'bg-yellow-500',
    'text-white',
    'hover:bg-yellow-600',
    'active:bg-yellow-500',
  ];
  const dangerClasses = ['bg-red-600', 'text-white', 'hover:bg-red-700', 'active:bg-red-600'];
  const darkClasses = ['bg-zinc-700', 'text-white', 'hover:bg-zinc-600', 'active:bg-zinc-700'];
  const squareClasses = ['px-1', 'py-1'];
  const pillClasses = ['px-2', 'py-1'];

  switch (shape) {
    case 'square':
      styles.push(...squareClasses);
      break;
    default:
      styles.push(...pillClasses);
      break;
  }

  switch (size) {
    case 'sm':
      styles.push('text-xs');
      break;
    case 'md':
      styles.push('text-base');
      break;
    case 'lg':
      styles.push('text-lg');
      break;
  }

  switch (style) {
    case 'secondary':
      styles.push(...secondaryClasses);
      break;
    case 'info':
      styles.push(...infoClasses);
      break;
    case 'success':
      styles.push(...successClasses);
      break;
    case 'warning':
      styles.push(...warningClasses);
      break;
    case 'danger':
      styles.push(...dangerClasses);
      break;
    case 'dark':
      styles.push(...darkClasses);
      break;
    default:
      styles.push(...primaryClasses);
      break;
  }

  const buttonStyles = styles.join(' ');

  return (
    <button className={buttonStyles} type={type} title={title}>
      {label}
    </button>
  );
}
