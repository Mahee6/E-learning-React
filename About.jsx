import React from "react";

export const About = () => {
  return (
    <>
      <div id="about" className="aboutsec">
        <h1>About</h1>
        <h2 style={{ textAlign: "center" }}>Our E-Learning Platform</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "20px",
            fontFamily: "cursive",
          }}
        >
          <p
            style={{
              marginTop: "12px",
              border: "2px solid black",
              width: "90%",
              padding: "12px",
              background:"gray"
            }}
          >
            Our e-learning platform is a cutting-edge solution designed to
            provide learners worldwide with access to high-quality educational
            resources. The platform offers a vast array of courses ranging from
            beginner to advanced levels, catering to various interests and
            professional fields. Users can enroll in courses on programming
            languages, data science, digital marketing, and more. With an
            emphasis on user-friendly navigation and engaging content, the
            platform ensures a seamless learning experience for all. Interactive
            quizzes, video tutorials, and hands-on projects are integrated to
            enhance knowledge retention and skill development. Learners can
            study at their own pace, access course materials anytime, and earn
            certifications upon completion. Instructors on the platform are
            industry experts who bring real-world insights into the curriculum.
            Our goal is to empower individuals by making education more
            accessible, affordable, and impactful. Join us today to unlock your
            potential and achieve your career aspirations!
          </p>
        </div>
      </div>
      <br />
    </>
  );
};
