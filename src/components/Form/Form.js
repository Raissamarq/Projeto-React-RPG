import "./Form.css";
import TextField from "../TextField/TextField";
import DropDown from "../DropDown/DropDown";
import Button from "../Button/Button";
import React, { useState } from "react";

const Form = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  function onSave(evento) {
    evento.preventDefault();
    props.onPersonaRegistered({
      nome,
      cargo,
      imagem,
      time,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  }

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card</h2>
        <TextField
          required={true}
          label="Nome"
          placeholder="Digite o nome"
          value={nome}
          onChange={(value) => setNome(value)}
        ></TextField>
        <TextField
          required={true}
          label="Cargo"
          placeholder="Digite o cargo"
          value={cargo}
          onChange={(value) => setCargo(value)}
        ></TextField>
        <TextField
          label="Imagem"
          placeholder="Digite endereço da imagem"
          value={imagem}
          onChange={(value) => setImagem(value)}
        ></TextField>
        <DropDown
          required={true}
          label="Time"
          itens={props.times}
          value={time}
          onChange={(value) => setTime(value)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
