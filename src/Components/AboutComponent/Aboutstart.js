import React from "react";
import "./aboutstart.css";
import { IoSchoolOutline, IoTrophyOutline } from "react-icons/io5";
import { MdOutlineApproval } from "react-icons/md";
import { Link } from "react-router-dom";
import about4 from "../../Assests/About/about4.png";

const Aboutstart = () => {
  return (
    <>
    {/* 1st part */}
      <div className="container_fluid about_upper">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about_left bg-warning">
                <h2 className="text-warning">Our Services</h2>
                <span className="fs-4">What we do</span>
                <h1 className="fs-1 about_main_heading">
                  Learn Something New and Grow Your Skills
                </h1>
                <p className="about_sub_heading">
                  Innovative Learning is the best platform for private online
                  lessons with a flexible payment system and affordable prices.
                  WE Blieve that every one has capacity to creative, Turitor is
                  a place where people Develop their own potential so booked
                  your first lesson
                  {/* WE Blieve that every one has capacity to creative, Turitor is
                  a place where people Develop their own potential */}
                </p>
                <Link to="/ourcourse" className="btn intro_btn1">
                  View Courses
                </Link>
                <Link to="/findtutor" className="btn  intro_btn2">
                  Find Your Tutor
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about_right">
                <img src={about4} alt="" className="abouttop_image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 2nt part */}
      <div className="container_fluid about_back ">
        <div className="container ">
          <div className="about_back1">
          <span className="text-light">All Tutor Are Guaranteed by Us </span>
          <h1 className="aboutback_heading">
            100% <span style={{ color: "#f46b3e" }}>Guarantee</span>
          </h1>
          <div className="table_section">
            <div className="row">
              <div className="col-md-1 ">
                <IoSchoolOutline className="table_icon" />
              </div>
              <div className="col-md-3">
                <h2 className="table_heading">Professional Tutor</h2>
                <p className="mt-2 text-white">
                  Professional teachers have training as educators and/or
                  extensive professional teaching experience
                </p>
              </div>
              <div className="col-md-1">
                <IoTrophyOutline className="table_icon" />
              </div>
              <div className="col-md-3">
                <h2 className="table_heading">Real Result Only</h2>
                <p className="mt-2 text-white">
                  Real result measures that indicate how much work is done and
                  define what is produced.
                </p>
              </div>
              <div className="col-md-1 ">
                <MdOutlineApproval className="table_icon" />
              </div>
              <div className="col-md-3">
                <h2 className="table_heading">University Approve</h2>
                <p className="mt-2 text-white">
                  {" "}
                  A certified teacher is an educator who has earned credentials
                  from an authoritative source, such as the government.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

    </>
  );
};

export default Aboutstart;
