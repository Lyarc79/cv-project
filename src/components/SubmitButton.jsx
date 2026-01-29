export default function SubmitButton({ isEditing, onClick }) {
  return (
    <button type={isEditing ? "submit" : "button"} onClick={onClick}>
      {isEditing ? "Submit" : "Edit"}
    </button>
  );
}
