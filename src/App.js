import Banner from "./components/Banner/Banner";
import Form from "./components/Form/Form";
import React, { useState } from "react";
import Time from "./components/Time/Time";

function App() {
  const times = [
    {
      nome: "Duelistas",
      firstColor: "#c25757",
      secondColor: "#ff9d9d",
    },
    {
      nome: "Controlador",
      firstColor: "#c2bd57",
      secondColor: "#fdff9d",
    },
    {
      nome: "Iniciador",
      firstColor: "#6757c2",
      secondColor: "#b09dff",
    },
    {
      nome: "Sentinela",
      firstColor: "#62c257",
      secondColor: "#9dff9d",
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
