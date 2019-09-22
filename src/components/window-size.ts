import React, { useState, useEffect } from 'react';

interface WindowSize {
  innerHeight: number;
  innerWidth: number;
  outerHeight: number;
  outerWidth: number;
}

function getSize() {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  };
}

export default function useWindowSize(): WindowSize | string {
  let [windowSize, setWindowSize] = useState((typeof window != 'undefined') ? getSize() : "");

  function handleResize() {
    setWindowSize(getSize());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}
