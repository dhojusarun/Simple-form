import React from "react";

type BaseProps<T> = {
  label: string;
  name: string;
  onChange: (value: T) => void;
};

type TextInputProps = BaseProps<string> & {
  type: "text";
  value: string;
  placeholder?: string;
};

type RadioInputProps = BaseProps<string> & {
  type: "radio";
  value: string;
  options: string[];
};

type CheckboxInputProps = BaseProps<string[]> & {
  type: "checkbox";
  values: string[];
  options: string[];
};

type FormInputProps =
  | TextInputProps
  | RadioInputProps
  | CheckboxInputProps;

const FormInput: React.FC<FormInputProps> = (props) => {
  if (props.type === "radio") {
    const { label, name, value, options, onChange } = props;
    return (
      <div className="form-group">
        <label>{label}</label>
        {options.map((opt) => (
          <label key={opt}>
            <input
              type="radio"
              name={name}
              value={opt}
              checked={value === opt}
              onChange={(e) => onChange(e.target.value)}
            />
            {opt}
          </label>
        ))}
      </div>
    );
  }

  if (props.type === "checkbox") {
    const { label, values, options, onChange } = props;
    return (
      <div className="form-group">
        <label>{label}</label>
        {options.map((opt) => (
          <label key={opt}>
            <input
              type="checkbox"
              checked={values.includes(opt)}
              onChange={() =>
                onChange(
                  values.includes(opt)
                    ? values.filter((v) => v !== opt)
                    : [...values, opt]
                )
              }
            />
            {opt}
          </label>
        ))}
      </div>
    );
  }

  // text input
  const { label, value, placeholder, onChange } = props;
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
  
export default FormInput;
