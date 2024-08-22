import Banner from "./components/Banner/Banner";
import Form from "./components/Form/Form";
import React, { useState } from "react";
import Time from "./components/Time/Time";

function App() {
  const times = [
    {
      nome: "Guerreiro",
      firstColor: "#240000",
      secondColor: "#4f0303",
    },
    {
      nome: "Mago",
      firstColor: "#8e5fbc",
      secondColor: "#3e034f",
    },
    {
      nome: "Ladino",
      firstColor: "#181818",
      secondColor: "#2c2c2c",
    },
    {
      nome: "Clérigo",
      firstColor: "#f3e659",
      secondColor: "#b6ac41",
    },
    {
      nome: "Arqueiro",
      firstColor: "#105109",
      secondColor: "#073402",
    },
  ];

  const [personas, setPersonas] = useState([]);
  const toNewPersona = (persona) => {
    setPersonas([...personas, persona]);
  };

  return (
    <div className="App">
      <Banner></Banner>
      <Form
        times={times.map((time) => time.nome)}
        onPersonaRegistered={(persona) => toNewPersona(persona)}
      ></Form>

      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          firstColor={time.firstColor}
          secondColor={time.secondColor}
          personas={personas.filter((persona) => persona.time === time.nome)}
        />
      ))}
    </div>
  );
}

export default App;
