import React from "react";
import "./middle.css";
import { Link } from "react-router-dom";
import { CheckOutlined } from "@ant-design/icons";
import about1 from "../../Assests/About/about1.png";
import tutor1 from "../../Assests/About/tutor1.PNG";
import tutor2 from "../../Assests/About/tutor2.PNG";
import tutor3 from "../../Assests/About/tutor3.PNG";
const Aboutmiddle = () => {
  const FeatureTutor = [
    {
      name: "Zainul Abidin",
      subject: "Statistics",
      rate: "150Rs",
      image: tutor2,
    },

    {
      name: "Adeela Farooq",
      subject: "English",
      rate: "200Rs",
      image: tutor1,
    },

    {
      name: "Wasim Malik",
      subject: "Mathematics",
      rate: "200Rs",
      image: tutor3,
    },
  ];
  return (
    <>
      {/*3rd part  */}
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <div className="about_tutor_left">
                <img src={about1} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="about_tutor_right">
                <h1 className="about_tutor_main_heading">
                  We are Tutor and Online Learning Community
                </h1>
                <p className="about_tutor_heading mt-3">
                  Professional teachers have training as educators and/or
                  extensive professional teaching experience. Teachers who spend
                  more time focusing on private lessons than regular classes can
                  cause greater inefficiencies in the mainstream school system.
                  Situations in which teachers provide extra private lessons for
                  pupils for whom they are already responsible in the public
                  system can lead to corruption.
                  <div className="row mt-4">
                    <div className="col-6 text-center">
                      <h5>
                        {" "}
                        <CheckOutlined className="about_tutor_icon" /> Expert
                        training
                      </h5>
                    </div>
                    <div className="col-6">
                      <h5>
                        {" "}
                        <CheckOutlined className="about_tutor_icon" /> Life Time
                        Access
                      </h5>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-6 text-center">
                      <h5>
                        {" "}
                        <CheckOutlined className="about_tutor_icon" /> Remote
                        Learning
                      </h5>
                    </div>
                    <div className="col-6">
                      <h5>
                        {" "}
                        <CheckOutlined className="about_tutor_icon" /> Self
                        Development
                      </h5>
                    </div>
                  </div>
                  {/* WE Blieve that every one has capacity to creative, Turitor is
                  a place where people Develop their own potential */}
                </p>
                <Link to="/ourcourse" className="btn intro_btn1 mt-5">
                  View Courses
                </Link>
                <Link to="/findtutor" className="btn  intro_btn2 mt-5">
                  Find Your Tutor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 4th part */}
      {/* <div className="container-fluid  featuretutor_back">
        <div className="container  ">
          <div className="feature_text">
            <span>Find the Right tutor for you</span>
            <h1 className="feature_heading">Featured Tutors</h1>
          </div>
          <div className="fearuretutor_section  ">
            <div className="row">
              {FeatureTutor.map((item) => {
                return (
                  <>
                    <div className="col-md-4">
                      <div className="featuretutor_card">
                        <div className="featuretutor_image_section">
                          <img
                            src={item.image}
                            alt=""
                            className="featuretutor_image"
                          />
                        </div>
                        <div className="featuretutor_card_text">
                          <span style={{ fontSize: "18px" }}>
                            {item.subject}
                          </span>
                          <h5 style={{ fontSize: "15px" }}>
                            {item.rate}/per hour
                          </h5>
                          <h4 className="feature_name">{item.name}</h4>
                          <Link
                            className="btn feature_button mt-2 "
                            to="/findTutor"
                          >
                            Find Your Tutor
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div> */}
      <div className="container_fluid featuretutor_back">
        <div className="container">
          <div className="feature_text">
            <span>Find the Right tutor for you</span>
            <h1 className="feature_heading">Featured Tutors</h1>
          </div>
          <div className="featuretutor_section mt-4">
            <div className="row">
            {FeatureTutor.map((item) => {
                return (
                  <>
                    <div className="col-md-4">
                      <div className="featuretutor_card ">
                        <div className="featuretutor_image_section">
                          <img
                            src={item.image}
                            alt=""
                            className="featuretutor_image"
                          />
                        </div>
                        <div className="featuretutor_card_text">
                          <span style={{ fontSize: "18px" }}>
                            {item.subject}
                          </span>
                          <h5 style={{ fontSize: "15px" }}>
                            {item.rate}/per hour
                          </h5>
                          <h4 className="feature_name">{item.name}</h4>
                          <Link
                            className="btn feature_button mt-2 "
                            to="/findTutor"
                          >
                            Find Your Tutor
                          </Link>
                        </div>
                        </div>
                        </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* 5th section */}
      <div className="container_fluid apply_back">
        <div className="container">
        <h1 className="apply_heading ms-2 ">
            Apply <span className="text-warning"> Now</span>{" "}
          </h1>
          <div className="main_apply">
            <div className="apply_now bg-white">
            <h1 className="subject_heading ">
            Calling <span className="text-warning"><br/> All Experts!</span>{" "}
          </h1>
              <p className="mt-3" style={{textAligne:'justify'}} >When private tutoring is provided by well trained tutor however the effects can be dramatic, with pupils improving performance by two standard deviations. The system of excessive private tutoring will take time for activities such as playing soccer or joining clubs from students.</p>
              {/* <button onClick="/register" className="apply_button">Apply Now</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutmiddle;
