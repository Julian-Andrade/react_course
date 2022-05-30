const UserDetails = ({ name, age, work }) => {
  return (
    <div>
      <ul>
        <li>Nome: {name}</li>
        <li>Idade: {age}</li>
        <li>Profissão: {work}</li>
      </ul>
      {age >= 18 ? (
        <p>"Permitido tirar a carteira de habilitação"</p>
      ) : (
        <p>"Idade não permitida para retirar carteira de habilitação"</p>
      )}
    </div>
  );
};

export default UserDetails;
