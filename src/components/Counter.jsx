import { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";
import { useCounter } from "../hooks/useCounter";

import "./Counter.css";

export const Counter = ({ title, baslangic, artisMiktari = 1, children }) => {
  const [counter, arttir, azalt, sifirla] = useCounter(
    baslangic || 0,
    artisMiktari
  );
  const [counter2, arttir2, azalt2, sifirla2] = useCounter(100, artisMiktari);
  const [hide, setHide] = useState(false);

  const changeCounter = (val) => {};

  useEffect(() => {
    console.warn(
      "**************** COOUNTER: COMPONENT DID MOUNT ********************"
    );

    return () => {
      console.warn(
        "**************** COOUNTER: COMPONENT WILL UN-MOUNT ********************"
      );
    };
  }, []);

  useEffect(() => {
    // did update did mount fazında da tetiklenir
    console.warn(
      "**************** COOUNTER: COMPONENT DID UPDATE ********************"
    );
  });

  return (
    <>
      <button className="btn" onClick={() => setHide(!hide)}>
        Hide Class - Toggle Counter
      </button>
      <CounterDisplay
        title={title}
        counter={counter}
        artisMiktari={artisMiktari}
        counterArttir={arttir}
        counterAzalt={azalt}
        counterReset={sifirla}
        hide={hide}
      >
        {children}
      </CounterDisplay>
      <CounterDisplay
        title={title}
        counter={counter2}
        artisMiktari={artisMiktari}
        counterArttir={arttir2}
        counterAzalt={azalt2}
        counterReset={sifirla2}
        hide={hide}
      >
        {children}
      </CounterDisplay>
    </>
  );
};
