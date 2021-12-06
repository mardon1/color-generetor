import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ color, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const { rgb, weight } = color;
  const bcg = rgb.join(',');
  const hex = rgbToHex(...rgb);
  const clipboard = () => {
    setAlert(true);
    navigator.clipboard.writeText(hex);
  };
  useEffect(() => {
    const timeout = setInterval(() => {
      setAlert(false);
    }, 3000);
    return () => {
      clearTimeout(timeout);
      
    };
  });
  return (
    <article className={`color ${index > 10 && 'color-light'}`} style={{ backgroundColor: `rgb(${bcg})` }} onClick={clipboard}>
      <p className="percent-value">{weight}%</p>
      <p classNam e="color-value">{hex}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
