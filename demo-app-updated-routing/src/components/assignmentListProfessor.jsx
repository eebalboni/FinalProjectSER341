import React from "react";
import "./AssignmentList.css"; // import CSS stylesheet

const assignments = [
  {
    id: 1,
    title: "Assignment 1",
    name: "lorem lorem lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus nostrum laboriosam tenetur nihil similique maxime eligendi, dolore animi fugiat incidunt veniam quaerat hic sint maiores nobis rem sunt consequuntur!",
    date: "3/30/23",
  },
  {
    id: 2,
    title: "Assignment 2",
    name: "lorem lorem lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus nostrum laboriosam tenetur nihil similique maxime eligendi, dolore animi fugiat incidunt veniam quaerat hic sint maiores nobis rem sunt consequuntur!",
    date: "3/30/23",
  },
  {
    id: 3,
    title: "Assignment 3",
    name: "lorem lorem lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus nostrum laboriosam tenetur nihil similique maxime eligendi, dolore animi fugiat incidunt veniam quaerat hic sint maiores nobis rem sunt consequuntur!",
    date: "3/30/23",
  },
];

function AssignmentListProfessor() {
  return (
    <div className="assignment-list-container">
      <h1>Assignments</h1>
      {/* <button
      onClick={window.location='/professor/createAssignment'}>Create Assignment</button> */}
      {assignments.map((assignment) => (
        <div key={assignment.id} className="assignment-item"
        onClick={() => { window.location ='/professor/assignment'  }}>
            
          <h2>{assignment.title}</h2>
          <p>{assignment.name}</p>
          <p>{assignment.description}</p>
          <p className="due-date">Due Date: {assignment.date}</p>
        </div>
       
      ))}
    <button onClick={() => window.location='/professor/createAssignment'}>Add assignment</button>
    </div>
    
  );
}

export default AssignmentListProfessor;
