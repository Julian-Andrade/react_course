// CSS
import "./MyForm.module.css";

// useState
import { useState } from "react";

const MyForm = ({ user }) => {
  // Gerenciamento de Dados
  const [name, setName] = useState(user ? user.name : ``);
  const [email, setEmail] = useState(user ? user.email : ``);
  const [textarea, setTextarea] = useState(user ? user.textarea : ``);
  const [role, setRole] = useState(user ? user.role : ``)

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleTextarea = (e) => {
    setTextarea(e.target.value);
  };

  const handleRole = (e) => {
    setRole(e.target.value);
  };

  //   Envio do formulário
  const submitForm = (e) => {
    e.preventDefault();
    console.log(`Enviando o formulário!`);
    console.log(name, email, textarea, role);

    // Limpando Form
    setName(``);
    setEmail(``);
    setTextarea(``);
  };

  return (
    <div onSubmit={submitForm}>
      {/* Envio de formulário */}
      {/* Criaçaro de Form */}
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            value={name}
          />
        </div>
        {/* Label envolvendo input */}
        <label>
          {/* Simplificação de manipulação de state */}
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            placeholder="Digite o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        {/* Textarea */}
        <label>
          <span>Bio:</span>
          <textarea
            name="id"
            placeholder="Descrição do usuário"
            onChange={handleTextarea}
            value={textarea}
          ></textarea>
        </label>
        {/* Select */}
        <label>
          <span>Função no Sistema</span>
          <select name="role" onChange={handleRole} value={role}>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
