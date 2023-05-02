import "./style-course-view.css";
import React, { Component } from "react";
import { getCourses } from "../services/courseService";
import CourseHomeBody from "./courseHomeBody";
import SideBar from "./sideBar";

//make sidebar separate component

class CourseHome extends Component {
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
      <body style={{ backgroundColor: "#26394e", minHeight: "100" }}>
        <SideBar />

        <header>
          <div className="container p-4">
            <div className="row-cols-auto">
              <div>
                <h3>Courses</h3>
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

export default CourseHome;
