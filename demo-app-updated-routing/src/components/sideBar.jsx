import React, { Component } from "react";


class SideBar extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div id="menu">
        <div className="hamburger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="menu-inner">
          <ul className="menu-list">
            <li className="menu-item">
              <a href="../indexes/SignIn.html">Logout</a>
            </li>
            <li className="menu-item">
              <a
                data-bs-toggle="modal"
                data-bs-target="#joincourseModal"
                href="#"
              >
                Join Course
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideBar;
