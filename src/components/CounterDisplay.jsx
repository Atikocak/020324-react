const counterTextStyle = {
  backgroundColor: "#333",
  color: "green",
  fontFamily: "Century",
  padding: "1rem 2rem",
  fontSize: "1.5rem",
};

export const CounterDisplay = ({
  children,
  title,
  counter,
  counterArttir,
  artisMiktari,
  counterAzalt,
  counterReset,
  hide = false,
}) => {
  return (
    <div className={`counter ${hide ? "hide" : "show"}`}>
      {children}
      <h3>{title}</h3>
      <h4 style={counterTextStyle}>{counter}</h4>
      <button onClick={counterArttir}>+ {artisMiktari}</button>
      <button onClick={counterReset}>RESET</button>
      <button onClick={counterAzalt}>- {artisMiktari}</button>
    </div>
  );
};
