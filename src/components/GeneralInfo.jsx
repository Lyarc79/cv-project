import useState from "react";

function GeneralInfo() {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <fieldset>
      <legend>General Information</legend>

      <label htmlFor="name">
        First Name:
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
        ></input>
      </label>
    </fieldset>
  );
}

export default GeneralInfo;
