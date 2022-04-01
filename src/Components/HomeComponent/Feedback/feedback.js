import React, { useState } from "react";
// import feedback from "../../../Assests/Home/Feedback.jpg";
import feedback1 from "../../../Assests/Home/feedback1.jpg";
import { toast } from "react-toastify";
import { auth } from "../../../Api/axios";
import { Textarea } from "@chakra-ui/react";
import { Input } from "antd";
import "./feedback.css";
const Feedback = () => {
  const [msgfeedback, setMsgfeedback] = useState("");
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const FEEDBACK = async (e) => {
    e.preventDefault();
    await auth
      .post("/feedback", {
        name: fullName,
        email: email,
        feedback : msgfeedback
      })
      .then((res) => {
         console.log(email,fullName)
         console.log(msgfeedback)
        console.log(res.data);
        toast.success("Thans for Your feedback...!!!");
      })

      .catch((e) => {
        console.log(e);
        toast.error(e.response.data.msg);
      });
  };

  return (
    <>
      <div className="container-fluid bg-white mt-5">
         <div className="main_feedback">
        <div className="row">
          <div className="col-md-5">
          <div className="feedback_image">
                <img src={feedback1} alt="" className=" F_Image" />
              </div>
            {/* <div className="left_feedback bg-danger ">
              
            </div> */}
          </div>
          <div className="col-md-7">
            <div className="right_feedback  ">
              <div className="feedback_form">
                <h1 className="feedback_heading fs-3">Give your feedback</h1>
                <div className="row">
                  <div className="col-md-6">
                    <label className="label_feedback">Full Name:</label>
                    <Input
                      size="large"
                      className="input_feedback mt-2"
                      placeholder="Enter your  name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="label_feedback">Email:</label>
                    <Input
                      size="large"
                      className="input_feedback mt-2"
                      placeholder="Enter your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <label className="label_feedback">Feedback:</label>
                <Textarea
                  size="large"
                  placeholder="Type your message here"
                  className="textarea_feedback mt-2"
                  value={msgfeedback}
                  onChange={(e) => setMsgfeedback(e.target.value)}
                />
                <button className="btn feedback_button" onClick={FEEDBACK}>SEND MESSAGE</button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      {/* <div className="container-fluid">
        <div className="container">
          <div className="main_feedback bg-white">
            <div className="row">
              <div className="col-md-5">
                <div className="left_feedback ">
                  <div className="feedback_image">
                    <img
                      src={feedback}
                      alt=""
                      className="m-auto F_Image"
                     
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="right_feedback">
                  <div className="feedback_form">
                    <div className="row">
                      <div className="col-md-6">
                        <label className="label_feedback">Full Name:</label>
                        <Input
                          size="large"
                          className="input_feedback mt-2"
                          placeholder="Enter your  name"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="label_feedback">Email:</label>
                        <Input
                          size="large"
                          className="input_feedback mt-2"
                          placeholder="Enter your Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    <label className="label_feedback">Feedback:</label>
                    <Textarea
                      size="large"
                      className="textarea_feedback mt-2"
                      value={msgfeedback}
                      onChange={(e) => setMsgfeedback(e.target.value)}
                    />
                    <button className="btn feedback_button">
                    
                      Send Feedback
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Feedback;
