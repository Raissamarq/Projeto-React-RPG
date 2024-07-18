import "./TextField.css";

const TextField = (props) => {
  const placeholderModificada = `${props.placeholder}`;

  const onTyped = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <div className="field-text">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={onTyped}
        required={props.required}
        placeholder={props.placeholder}
      ></input>
    </div>
  );
};

export default TextField;
