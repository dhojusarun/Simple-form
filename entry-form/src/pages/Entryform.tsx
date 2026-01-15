import { useState } from "react";
import FormInput from "./../components/Forminput"
import FormResult from "./../components/Formresult";
import "./Entryform.css";

function Entryform() {
  const [fullname, setFullname] = useState("");
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
        <h1>Registration Form</h1>

        <FormInput
          label="Full Name"
          type="text"
          name="fullname"
          placeholder="Enter full name"
          value={fullname}
          onChange={setFullname}
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
          options={["Maths","Social", "English", "Nepali"]}
          values={subjects}
          onChange={setSubjects}
        />

        <button type="submit">Submit</button>

        {submitted && (
          <FormResult
             description={fullname}
            gender={gender}
            subjects={subjects}
          />
        )}
      </form>
    </div>
  );
}

export default Entryform;
