import SubmitButton from "./SubmitButton";

function Experience({ list, onUpdate, onToggle, onAdd, onDelete }) {
  return (
    <fieldset className="form-wrapper">
      <legend>Experience</legend>
      {list.map((item) => (
        <div key={item.id} className="experience-entry">
          {item.isEditing ? (
            <form onSubmit={(e) => onToggle(item.id, e)} autoComplete="off">
              <label>
                Company:
                <input
                  name="companyName"
                  value={item.companyName}
                  onChange={(e) => onUpdate(item.id, e)}
                  placeholder="Company Name"
                ></input>
              </label>
              <label>
                Position:
                <input
                  name="companyPosition"
                  value={item.companyPosition}
                  onChange={(e) => onUpdate(item.id, e)}
                  placeholder="Job Title"
                ></input>
              </label>
              <label>
                Main Responsibilities:
                <textarea
                  name="responsibilities"
                  value={item.responsibilities}
                  onChange={(e) => onUpdate(item.id, e)}
                  rows="4"
                  placeholder="Describe what you did..."
                ></textarea>
              </label>
              <label>
                From:
                <input
                  type="date"
                  name="startDate"
                  value={item.startDate}
                  onChange={(e) => onUpdate(item.id, e)}
                />
              </label>
              <label>
                To:
                <input
                  type="date"
                  name="endDate"
                  value={item.endDate}
                  onChange={(e) => onUpdate(item.id, e)}
                />
              </label>
              <div className="form-buttons">
                <SubmitButton isEditing={item.isEditing} />
                <button type="button" onClick={() => onDelete(item.id)}>
                  Remove
                </button>
              </div>
            </form>
          ) : (
            <div className="view-mode">
              <p>
                <strong>Company: </strong>
                {item.companyName}
              </p>
              <p>
                <strong>Title: </strong>
                {item.companyPosition}
              </p>
              <p>
                <strong>Responsibilities: </strong>
                {item.responsibilities}
              </p>
              <p>
                <strong>Start Date: </strong>
                {item.startDate}
              </p>
              <p>
                <strong>End Date: </strong>
                {item.endDate}
              </p>
              <div className="form-buttons">
                <SubmitButton
                  isEditing={item.isEditing}
                  onClick={() => onToggle(item.id)}
                />
                <button type="button" onClick={() => onDelete(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
      <button type="button" onClick={onAdd}>
        + Add Experience
      </button>
    </fieldset>
  );
}

export default Experience;
