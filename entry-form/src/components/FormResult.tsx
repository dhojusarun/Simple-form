type FormResultProps = {
  description: string;
  gender: string;
  subjects: string[];
};

const FormResult: React.FC<FormResultProps> = ({
  description,
  gender,
  subjects,
}) => {
  return (
    <div className="result">
      {description && (
        <p><strong>Description:</strong> {description}</p>
      )}

      {gender ? (
        <p><strong>Gender:</strong> {gender}</p>
      ) : (
        <p className="error">Please select gender</p>
      )}

      {subjects.length > 0 && (
        <p><strong>Subjects:</strong> {subjects.join(", ")}</p>
      )}
    </div>
  );
};

export default FormResult;