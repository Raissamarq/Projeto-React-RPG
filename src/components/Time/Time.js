import Persona from "../Collaborator/Persona";
import "./Time.css";

const Time = (props) => {
  const css = { backgroundColor: props.secondColor };

  // Condicional no React
  return props.personas.length > 0 ? (
    <section className="time" style={css}>
      <h3 style={{ borderColor: props.firstColor }}>{props.nome}</h3>
      <div className="personas">
        {props.personas.map((persona) => (
          <Persona
            backgroundColor={props.firstColor}
            key={persona.nome}
            nome={persona.nome}
            cargo={persona.cargo}
            imagem={persona.imagem}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Time;
