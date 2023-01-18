import React from 'react';

export function Badge({ label, style }) {
  let badgeStyle;
  switch (style) {
    case 'primary':
      badgeStyle = 'bg-blue-600';
      break;
    case 'secondary':
      badgeStyle = 'bg-zinc-300';
      break;
    case 'info':
      badgeStyle = 'bg-cyan-600';
      break;
    case 'success':
      badgeStyle = 'bg-green-600';
      break;
    case 'warning':
      badgeStyle = 'bg-yellow-500';
      break;
    case 'danger':
      badgeStyle = 'bg-red-600';
      break;
    case 'dark':
      badgeStyle = 'bg-zinc-700';
      break;
  }

  return (
    <span className={`${badgeStyle} rounded px-2 py-1 text-white text-xs font-bold uppercase`}>
      {label}
    </span>
  );
}
