import "./App.css";
import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import SampleDataButton from "./components/ExampleButton";
import ClearButton from "./components/ClearButton";

function App() {
  const formatDate = (dateString) => {
    if (!dateString) return "";
    if (dateString.toLowerCase() === "present") return "Present";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric",
    }).format(date);
  };

  // General Info starts here:
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleGeneralChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [isEditing, setIsEditing] = useState(true);

  const handleEditToggle = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };

  // Education starts here:
  const [educationList, setEducationList] = useState([
    {
      id: crypto.randomUUID(),
      schoolName: "",
      studyTitle: "",
      startDate: "",
      endDate: "",
      isEditing: true,
    },
  ]);

  const handleEducationChange = (id, e) => {
    const { name, value } = e.target;
    setEducationList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, [name]: value } : item
      )
    );
  };

  const buttonToggle = (id, listSetter) => {
    listSetter((prevList) =>
      prevList.map((item) => {
        return item.id === id ? { ...item, isEditing: !item.isEditing } : item;
      })
    );
  };

  const addEducation = () => {
    setEducationList([
      ...educationList,
      {
        id: crypto.randomUUID(),
        schoolName: "",
        studyTitle: "",
        startDate: "",
        endDate: "",
        isEditing: true,
      },
    ]);
  };

  const deleteEducation = (id) => {
    setEducationList((prevList) => prevList.filter((item) => item.id !== id));
  };

  // Experience starts here:
  const [experienceList, setExperienceList] = useState([
    {
      id: crypto.randomUUID(),
      companyName: "",
      companyPosition: "",
      responsibilities: "",
      startDate: "",
      endDate: "",
      isEditing: true,
    },
  ]);

  const addExperience = () => {
    setExperienceList([
      ...experienceList,
      {
        id: crypto.randomUUID(),
        companyName: "",
        companyPosition: "",
        responsibilities: "",
        startDate: "",
        endDate: "",
        isEditing: true,
      },
    ]);
  };

  const deleteExperience = (id) => {
    setExperienceList((prevList) => prevList.filter((item) => item.id !== id));
  };

  const handleExperienceChange = (id, e) => {
    const { name, value } = e.target;
    setExperienceList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, [name]: value } : item
      )
    );
  };

  // Buttons handlers:
  const handleLoadExample = (data) => {
    console.log("Data received:", data);
    setGeneralInfo(data.generalInfo);
    setEducationList(data.education);
    setExperienceList(data.experience);
  };

  const handleClearButton = () => {
    setGeneralInfo({ name: "", email: "", phone: "" });
    setEducationList([]);
    setExperienceList([]);
  };

  return (
    <div className="main-wrapper">
      <h1 className="app-title">CV Application</h1>
      <div className="header-buttons">
        <SampleDataButton onLoad={handleLoadExample} />
        <ClearButton onClear={handleClearButton} />
      </div>
      <div className="cv-container">
        <div className="editor-side">
          <GeneralInfo
            data={generalInfo}
            onChange={handleGeneralChange}
            isEditing={isEditing}
            onToggle={handleEditToggle}
          ></GeneralInfo>
          <Education
            list={educationList}
            onUpdate={handleEducationChange}
            onToggle={(id) => buttonToggle(id, setEducationList)}
            onAdd={addEducation}
            onDelete={deleteEducation}
          ></Education>
          <Experience
            list={experienceList}
            onUpdate={handleExperienceChange}
            onToggle={(id) => buttonToggle(id, setExperienceList)}
            onAdd={addExperience}
            onDelete={deleteExperience}
          ></Experience>
        </div>

        <div className="preview-side">
          <div className="preview-header">
            <h1>{generalInfo.name || "Your Name"}</h1>
            <div className="preview-contact">
              <p>{generalInfo.email}</p>
              <p>{generalInfo.phone}</p>
            </div>
          </div>
          <h2 className="preview-section-title">Education</h2>
          {educationList.map((edu) => (
            <div key={edu.id} className="preview-section-items">
              <div className="preview-section-items-row">
                <strong>{edu.schoolName}</strong>
                <span className="preview-dates">
                  {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                </span>
              </div>
              <p className="studyTitle">{edu.studyTitle}</p>
            </div>
          ))}
          <h2 className="preview-section-title">Experience</h2>
          {experienceList.map((exp) => (
            <div key={exp.id} className="preview-section-items">
              <div className="preview-section-items-row">
                <strong>{exp.companyName}</strong>
                <span className="preview-dates">
                  {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                </span>
              </div>
              <p className="preview-jobtitle">{exp.companyPosition}</p>
              <ul className="preview-responsibilities-list">
                {exp.responsibilities
                  .split("\n")
                  .map((line, i) => line.trim() && <li key={i}>{line}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
