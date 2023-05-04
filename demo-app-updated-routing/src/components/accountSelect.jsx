import React, { Component } from "react";
import professorlogo from "../img/professorIcon.jpeg";
import studentlogo from "../img/studentIcon.png";
import { Link } from "react-router-dom";

class AccountSelect extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <body id="loginBody">
        <div className="background">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>

          <main>
            <div class="container" style={{ marginTop: 150 }}>
              <div class="row align-items-center">
                <div class="col-3 mx-auto">
                  <div class="card shadow border" id="courseCard"
                  onClick={() => window.location='/login'}>
                    <div
                      class="card-body d-flex flex-column align-items-center"
                      id="courseCardBody"
                    >
                      <img
                        src={professorlogo}
                        alt="Logo"
                        className="bd-placeholder-img card-img-top"
                        style={{ borderRadius: 0 }}
                      />
                      <div className="card-body" id="courseCardBody">
                        <p className="card-text fw-bold fs-4">
                          <strong>Professor</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-3 mx-auto">
                  <div class="card shadow border" id="courseCard"
                  onClick={() => window.location='/login'}>
                    <div
                      class="card-body d-flex flex-column align-items-center"
                      id="courseCardBody"
                    >
                      <img
                        src={studentlogo}
                        alt="Logo"
                        className="bd-placeholder-img card-img-top"
                        style={{ borderRadius: 0 }}
                      />

                      <div className="card-body" id="courseCardBody">
                        <p className="card-text fw-bold fs-4">
                          <strong>Student</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <footer>
            <div className="text-center fixed-bottom pb-3" id="loginFooter">
              Chris Rocco - Emily Balboni - Amber Kusma &copy; Quinnipiac 2023
            </div>
          </footer>
        </div>
      </body>
    );
  }
}

export default AccountSelect;
