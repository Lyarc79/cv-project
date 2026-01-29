import SubmitButton from "./SubmitButton";

function GeneralInfo({ data, onChange, isEditing, onToggle }) {
  return (
    <fieldset className="form-wrapper">
      <legend>General Information</legend>

      {isEditing ? (
        <form onSubmit={onToggle} autoComplete="off">
          <label htmlFor="name">
            Your Name:
            <input
              type="text"
              id="name"
              name="name"
              value={data.name}
              onChange={onChange}
              placeholder="John Doe"
            ></input>
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              id="email"
              name="email"
              value={data.email}
              onChange={onChange}
              placeholder="john.doe@example.com"
            ></input>
          </label>
          <label htmlFor="phone">
            Phone:
            <input
              type="text"
              id="phone"
              name="phone"
              value={data.phone}
              onChange={onChange}
              placeholder="(123) 456-7890"
            ></input>
          </label>
          <SubmitButton isEditing={isEditing}></SubmitButton>
        </form>
      ) : (
        <div>
          <p>
            <strong>Name: </strong>
            {data.name}
          </p>
          <p>
            <strong>Email: </strong>
            {data.email}
          </p>
          <p>
            <strong>Phone: </strong>
            {data.phone}
          </p>
          <SubmitButton isEditing={isEditing} onClick={onToggle}></SubmitButton>
        </div>
      )}
    </fieldset>
  );
}

export default GeneralInfo;
