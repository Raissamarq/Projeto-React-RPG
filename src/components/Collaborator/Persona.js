import "./Persona.css";

const Persona = ({ nome, imagem, cargo, backgroundColor }) => {
  return (
    <div className="persona">
      <div className="cabecalho" style={{ backgroundColor: backgroundColor }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

export default Persona;
