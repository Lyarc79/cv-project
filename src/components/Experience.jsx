import { useState } from "react";

function Experience() {
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    tasks: "",
    date: "",
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
      <legend>Experience</legend>
      <label htmlFor="company">
        Company:
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
        ></input>
      </label>
      <label htmlFor="position">
        Position:
        <input
          type="text"
          id="position"
          name="position"
          value={formData.position}
          onChange={handleChange}
        ></input>
      </label>
      <label htmlFor="tasks">
        Main Responsibilities:
        <textarea
          type="text"
          id="tasks"
          name="tasks"
          value={formData.tasks}
          onChange={handleChange}
        ></textarea>
      </label>
    </fieldset>
  );
}

export default Experience;
