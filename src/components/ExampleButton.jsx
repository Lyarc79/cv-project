const sampleData = {
  generalInfo: {
    name: "John Doe",
    email: "john.doe@techcorp.com",
    phone: "123-456-7890",
  },

  education: [
    {
      id: crypto.randomUUID(),
      schoolName: "University of Oxford",
      studyTitle: "Bachelor of Science in Computer Science",
      startDate: "2017-09-01",
      endDate: "2021-06-15",
      isEditing: false,
    },
  ],

  experience: [
    {
      id: crypto.randomUUID(),
      companyName: "Creative Web Agency",
      companyPosition: "Junior Web Developer",
      responsibilities:
        "Built responsive websites using HTML, CSS and JavaScript\nAssisted in the migration of legacy projects to modern React frameworks\nFixed 50+ high-priority bugs during the initial launch phase",
      startDate: "2021-08-10",
      endDate: "2022-06-30",
      isEditing: false,
    },
    {
      id: crypto.randomUUID(),
      companyName: "TechCorp Solutions",
      companyPosition: "Senior Frontend Developer",
      responsibilities:
        "Developed and maintained +15 React components for the core product\nCollaborated with UI/UX designers to improve user engagement by 25%\nMentored junior developers and conducted weekly code reviews\nOptimized application performance, reducing load times by 40%",
      startDate: "2022-07-01",
      endDate: "Present",
      isEditing: false,
    },
  ],
};

export default function SampleDataButton({ onLoad }) {
  return <button onClick={() => onLoad(sampleData)}>Load Example</button>;
}
