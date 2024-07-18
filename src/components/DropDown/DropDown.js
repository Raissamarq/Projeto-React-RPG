import "./DropDown.css";

const DropDown = (props) => {
  return (
    <div className="dropdown">
      <label>{props.label}</label>
      <select
        onChange={(evento) => props.onChange(evento.target.value)}
        required={props.required}
        value={props.value}
      >
        {props.itens.map((item) => (
          <option>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
