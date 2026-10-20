import "./inputField.style.css";

export function InputField(property) {
  return <input className="input-field"{...property}></input>;
}
