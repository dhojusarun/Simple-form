import { useState } from "react";
// import FormInput from "../components/FormInput";
// import Formresult from "../components/Formresult";
import "./FormPage.css";

function Entryform() {
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState("");
  const [subjects, setSubjects] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <form className="form-card" onSubmit={handleSubmit}>
        <h1>Simple Form</h1>

        <FormInput
          label="Description"
          type="text"
          name="description"
          placeholder="Enter description"
          value={description}
          onChange={setDescription}
        />

        <FormInput
          label="Gender"
          type="radio"
          name="gender"
          options={["Male", "Female"]}
          value={gender}
          onChange={setGender}
        />

        <FormInput
          label="Subjects"
          type="checkbox"
          name="subjects"
          options={["Maths", "Science", "Social", "Health", "Computer"]}
          values={subjects}
          onChange={setSubjects}
        />

        <button type="submit">Submit</button>

        {submitted && (
          <FormResult
            description={description}
            gender={gender}
            subjects={subjects}
          />
        )}
      </form>
    </div>
  );
}

export default Entryform;
