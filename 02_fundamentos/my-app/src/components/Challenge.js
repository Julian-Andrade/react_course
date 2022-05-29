const Challenge = () => {
  let x = 10;
  let y = 20;

  const sumTwoValues = () => {
    const res = x + y;
    console.log(`A soma de ${x} + ${y} é igual a: ${res}.`);
  };

  return (
    <div>
      <div>
        <p>X: {x}</p>
        <p>Y: {y}</p>
        <button onClick={sumTwoValues}>Somar</button>
      </div>
    </div>
  );
};

export default Challenge;
