export interface IFormInputProps {
  inputType: string;
  placeholder: string;
  options?: string[];
  handleInput: (input: string) => void;
  name: string;
}

const FormInput = ({
  inputType,
  placeholder,
  options,
  handleInput,
  name,
}: IFormInputProps) => {
  const selectElement = (
    <select name={name}>
      <option value="" disabled selected>
        {placeholder}
      </option>
      {options?.map((option, idx) => (
        <option key={idx} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
  const inputElement = (
    <input
      type={inputType}
      placeholder={placeholder}
      onChange={(e) => handleInput(e.target.value)}
      name={name}
    />
  );
  return <>{inputType === "select" ? selectElement : inputElement}</>;
};

export default FormInput;
