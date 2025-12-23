import { useState } from "react";

function GeneralInfo() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <fieldset>
      <legend>General Information</legend>

      <label htmlFor="name">
        Your Name:
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        ></input>
      </label>

      <label htmlFor="email">
        Email:
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        ></input>
      </label>

      <label htmlFor="phone">
        Phone:
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        ></input>
      </label>
    </fieldset>
  );
}

export default GeneralInfo;
