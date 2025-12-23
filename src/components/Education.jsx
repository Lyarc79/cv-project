import { useState } from "react";

function Education() {
  const [formData, setFormData] = useState({
    schoolName: "",
    studyTitle: "",
    studyDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <fieldset>
      <legend>Education</legend>

      <label htmlFor="schoolName">
        School Name:
        <input
          type="text"
          id="schoolName"
          name="schoolName"
          value={formData.schoolName}
          onChange={handleChange}
        ></input>
      </label>

      <label htmlFor="studyTitle">
        Study Titulation:
        <input
          type="text"
          id="studyTitle"
          name="studyTitle"
          value={formData.studyTitle}
          onChange={handleChange}
        ></input>
      </label>

      <label htmlFor="studyDate">
        Date of Study:
        <input
          type="date"
          id="studyDate"
          name="studyDate"
          value={formData.studyDate}
          onChange={handleChange}
        ></input>
      </label>
    </fieldset>
  );
}

export default Education;
