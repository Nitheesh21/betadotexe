import React from "react";
import "../pages-css/Tests.css";
import SubjectBox from "../Components/SubjectBox";

function Tests() {
  return (
    <div className="tests-container">
      <div className="content-wrapper">
        <header className="header"></header>
        <main className="main-content">
          <div className="boxes">
            <SubjectBox title="Data Structures and Algorithms" />
            <SubjectBox title="Artificial Intelligence" />
            <SubjectBox title="Probability" />
            <SubjectBox title="Text" />
            <SubjectBox title="Text" />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Tests;
