import { ChangeEvent } from "react";
import "./inputEntry.css";

interface Props {
  label: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

export default function InputEntry({ label, handleChange, name }: Props) {
  return (
    <div className="input-div">
      <label>{label}</label>
      <input onChange={handleChange} required  name={name} />
    </div>
  );
}
