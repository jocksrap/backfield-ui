import React from 'react';

export function Headline({ level, margin, text }) {
  const mb = margin === true ? 'mb-2' : '';

  switch (level) {
    case 1:
      return <h1 className={`font-bold text-5xl ${mb}`}>{text}</h1>;
    case 2:
      return <h2 className={`font-bold text-4xl ${mb}`}>{text}</h2>;
    case 3:
      return <h3 className={`font-bold text-3xl ${mb}`}>{text}</h3>;
    case 4:
      return <h4 className={`font-bold text-2xl ${mb}`}>{text}</h4>;
    case 5:
      return <h5 className={`font-bold text-xl ${mb}`}>{text}</h5>;
    case 6:
      return <h6 className={`font-bold text-lg ${mb}`}>{text}</h6>;
  }
}
