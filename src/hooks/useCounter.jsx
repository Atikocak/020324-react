import { useState } from "react";

export const useCounter = (baslangic = 0, artisMitari = 1) => {
  const [counter, setCounter] = useState(baslangic);

  const arttir = () => {
    setCounter(counter + artisMitari);
  };

  const azalt = () => {
    setCounter(counter - artisMitari);
  };

  const reset = () => {
    setCounter(baslangic);
  };

  return [counter, arttir, azalt, reset];
};
