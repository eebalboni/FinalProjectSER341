import React, { Component } from "react";
import { getCourses } from "../services/courseService";
import CourseHomeBody from "./courseHomeBody";
import SideBar from "./sideBar";

//make sidebar separate component

class CourseHomeProfessor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: getCourses(),
      query: "",
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch = (event) => {
    this.setState({ query: event.target.value });
  };
  
  render() {
    return (
      <body id="courseBody">
        <SideBar />

        <header id="courseHeader">
          <div className="container p-4">
            <div className="row-cols-auto">
              <div>
                <h3 id="courseTitle">Courses</h3>
              </div>
            </div>
          </div>
        </header>

        <React.Fragment>
          <table className="container mt-5">
            <CourseHomeBody courses={this.state.courses} />
          </table>
        </React.Fragment>


      </body>
    );
  }
}

export default CourseHomeProfessor;
