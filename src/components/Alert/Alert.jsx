import React from 'react';

export function Alert({ message, style }) {
  let styles = ['p-2', 'rounded', 'border'];

  const primaryStyles = ['bg-blue-200', 'text-blue-800', 'border-blue-800'];
  const secondaryStyles = ['bg-zinc-200', 'text-zinc-800', 'border-zinc-800'];
  const infoStyles = ['bg-cyan-200', 'text-cyan-800', 'border-cyan-800'];
  const successStyles = ['bg-green-200', 'text-green-800', 'border-green-800'];
  const warningStyles = ['bg-yellow-200', 'text-yellow-800', 'border-yellow-800'];
  const dangerStyles = ['bg-red-200', 'text-red-800', 'border-red-800'];

  switch (style) {
    case 'primary':
      styles.push(...primaryStyles);
      break;
    case 'secondary':
      styles.push(...secondaryStyles);
      break;
    case 'info':
      styles.push(...infoStyles);
      break;
    case 'warning':
      styles.push(...warningStyles);
      break;
    case 'success':
      styles.push(...successStyles);
      break;
    case 'danger':
      styles.push(...dangerStyles);
      break;
  }

  const alertStyles = styles.join(' ');

  return (
    <div className={alertStyles} role='alert'>
      <p>{message}</p>
    </div>
  );
}
