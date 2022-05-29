const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);
    console.log(`Ativou o meu evento!`);
  };

  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizando isso!</h1>;
    } else {
      return <h1>Também posso renderizar isso!</h1>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique Aqui</button>
      </div>
      <div>
        <button onClick={() => console.log(`Clicou!`)}>
          Clique Aqui Também!
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            if (true) {
              console.log(`Isso não deveria existir!`);
            }
          }}
        >
          Clicar aqui, por favor!
        </button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
