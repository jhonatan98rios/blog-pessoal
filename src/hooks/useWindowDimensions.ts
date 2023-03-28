import { useState, useEffect } from 'react';

function getWindowDimensions() {
  return {
    width: typeof window !== "undefined" ? window.innerWidth: 1025,
    height: typeof window !== "undefined" ? window.innerHeight: 1025
  }
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
