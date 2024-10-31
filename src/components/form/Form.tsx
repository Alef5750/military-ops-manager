import { useState } from "react";
import FormInput from "../form-input/FormInput";
import styles from "./Form.module.css";
import { createMission } from "../../api/api";

export interface IFormInputs {
  name: string;
  status: "Pending" | "In Progress" | "Completed";
  priority: "High" | "Medium" | "Low";
  description: string;
}
const Form = () => {
  const [formInputs, setFormInputs] = useState<IFormInputs>({
    name: "",
    status: "Pending",
    priority: "Medium",
    description: "",
  });

  const handleInput = (inputName: keyof IFormInputs, value: string) => {
    setFormInputs((prev) => ({ ...prev, [inputName]: value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e);
    createMission(formInputs);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <FormInput
        name="name"
        inputType="input"
        placeholder="Name..."
        handleInput={(value) => handleInput("name", value)}
      />
      <FormInput
        name="status"
        inputType="select"
        placeholder="Status..."
        handleInput={(value) => handleInput("status", value)}
        options={["Pending", "In Progress", "Completed"]}
      />
      <FormInput
        name="priority"
        inputType="select"
        placeholder="Priority..."
        handleInput={(value) => handleInput("priority", value)}
        options={["High", "Medium", "Low"]}
      />
      <FormInput
        name="description"
        inputType="input"
        placeholder="Description..."
        handleInput={(value) => handleInput("description", value)}
      />
      <button type="submit">Create Mission</button>
    </form>
  );
};

export default Form;
