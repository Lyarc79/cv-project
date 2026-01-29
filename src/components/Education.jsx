import SubmitButton from "./SubmitButton";

function Education({ list, onUpdate, onToggle, onAdd, onDelete }) {
  return (
    <fieldset className="form-wrapper">
      <legend>Education</legend>
      {list.map((item) => (
        <div key={item.id} className="education-entry">
          {item.isEditing ? (
            <form onSubmit={(e) => onToggle(item.id, e)} autoComplete="off">
              <label>
                School:
                <input
                  name="schoolName"
                  value={item.schoolName}
                  onChange={(e) => onUpdate(item.id, e)}
                  placeholder="e.g. University of Oxford"
                ></input>
              </label>
              <label>
                Degree:
                <input
                  name="studyTitle"
                  value={item.studyTitle}
                  onChange={(e) => onUpdate(item.id, e)}
                  placeholder="e.g. Bachelor of Computer Science"
                ></input>
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
                <strong>School: </strong>
                {item.schoolName}
              </p>
              <p>
                <strong>Degree: </strong>
                {item.studyTitle}
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
        + Add Education
      </button>
    </fieldset>
  );
}

export default Education;
