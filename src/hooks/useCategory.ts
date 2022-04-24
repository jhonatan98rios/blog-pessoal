import React from "react";

export default function useCategory() {
  const [categ, setCateg] = React.useState('');

  React.useEffect(() => {
    const categ = window.location.hash.substr(1)
    setCateg(categ)
  }, []);

  return { categ }
}