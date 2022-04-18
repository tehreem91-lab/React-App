import React from "react";
// import { Card } from "react-bootstrap";
import "./course.css";
import NineClass from "../../utils/class9th";
import TenClassData from "../../utils/class10th";
import ElevenClassData from "../../utils/class11";
import TwelveClassData from "../../utils/class12";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
const Course = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Nine Class Card */}
      {/* <div>
        <div className="container-fluid">
          <div className="container">
            {" "}
            <br />
            <h1 className="class-heading  ">Class 9th</h1>
          </div>
        </div>
        <div className="container-fluid">
          <div className="container ">
            <div className="card-container">
              {NineClass.map((item) => {
                return (
                  <>
                    <Card
                      style={{ width: "18rem" }}
                      className="text-center  card1"
                      onClick={() => {
                        navigate(`/detail/download/${item.id}/${item.name}`, {
                          state: [
                            item.image,
                            item.author,
                            item.edition,
                            item.downloads,
                            item.book,
                            item.keybook,
                          ],
                        });
                      }}
                    >
                      <Card.Body>
                        <Card.Title className="mt-2">
                          <h4 style={{ color: "white" }}>{item.name}</h4>{" "}
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div> */}
      {/* 9th class */}
      <div>
        <div className="container-fluid">
          <div className="container">
            <h1 className="class-heading">Class 9th</h1>
          </div>
        </div>
        <div className="container-fluid">
          <div className="container ">
            <div className="card-container">
              {NineClass.map((item) => {
                return (
                  <>
                    <div className="card bg-white">
                      <div className="card_icon">
                        <h4 className="card_icons">{item.icon}</h4>
                      </div>
                      <div className="card_title">
                        <h4 className="card_heading">{item.name}</h4>
                        <p className="mt-2">
                          Subjects in Matriculation Certificate There are
                          various subjects that need to be studied for a
                          matriculation certificate
                        </p>
                      </div>
                      <button
                        className="card_arrow btn"
                        onClick={() => {
                          navigate(`/detail/download/${item.id}/${item.name}`, {
                            state: [
                              item.image,
                              item.author,
                              item.edition,
                              item.downloads,
                              item.book,
                              item.keybook,
                            ],
                          });
                        }}
                      >
                        <AiOutlineArrowRight className="m_arrow" />
                      </button>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Ten Class Card */}
      <div>
        <div className="container-fluid">
          <div className="container">
            <h1 className="class-heading">Class 10th</h1>
          </div>
        </div>
        <div className="container-fluid">
          <div className="container ">
            <div className="card-container">
              {TenClassData.map((item) => {
                return (
                  <>
                    <div className="card bg-white">
                      <div className="card_icon">
                        <h4 className="card_icons">{item.icon}</h4>
                      </div>
                      <div className="card_title">
                        <h4 className="card_heading">{item.name}</h4>
                        <p className="mt-2">
                          Subjects in Matriculation Certificate There are
                          various subjects that need to be studied for a
                          matriculation certificate
                        </p>
                      </div>
                      <button
                        className="card_arrow btn"
                        onClick={() => {
                          navigate(`/detail/download/${item.id}/${item.name}`, {
                            state: [
                              item.image,
                              item.author,
                              item.edition,
                              item.downloads,
                              item.book,
                              item.keybook,
                            ],
                          });
                        }}
                      >
                        <AiOutlineArrowRight className="m_arrow" />
                      </button>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* Eleven class card */}
      <div>
        <div className="container-fluid">
          <div className="container">
            <h1 className="class-heading">Class 11th</h1>
          </div>
        </div>
        <div className="container-fluid">
          <div className="container ">
            <div className="card-container">
              {ElevenClassData.map((item) => {
                return (
                  <>
                    <div className="card bg-white">
                      <div className="card_icon">
                        <h4 className="card_icons">{item.icon}</h4>
                      </div>
                      <div className="card_title">
                        <h4 className="card_heading">{item.name}</h4>
                        <p className="mt-2">
                          Subjects in Matriculation Certificate There are
                          various subjects that need to be studied for a
                          matriculation certificate
                        </p>
                      </div>
                      <button
                        className="card_arrow btn"
                        onClick={() => {
                          navigate(`/detail/download/${item.id}/${item.name}`, {
                            state: [
                              item.image,
                              item.author,
                              item.edition,
                              item.downloads,
                              item.book,
                              item.keybook,
                            ],
                          });
                        }}
                      >
                        <AiOutlineArrowRight className="m_arrow" />
                      </button>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Twelve class */}
      <div>
        <div className="container-fluid">
          <div className="container">
            <h1 className="class-heading">Class 12th</h1>
          </div>
        </div>
        <div className="container-fluid">
          <div className="container ">
            <div className="card-container">
              {TwelveClassData.map((item) => {
                return (
                  <>
                    <div className="card bg-white">
                      <div className="card_icon">
                        <h4 className="card_icons">{item.icon}</h4>
                      </div>
                      <div className="card_title">
                        <h4 className="card_heading">{item.name}</h4>
                        <p className="mt-2">
                          Subjects in Matriculation Certificate There are
                          various subjects that need to be studied for a
                          matriculation certificate
                        </p>
                      </div>
                      <button
                        className="card_arrow btn"
                        onClick={() => {
                          navigate(`/detail/download/${item.id}/${item.name}`, {
                            state: [
                              item.image,
                              item.author,
                              item.edition,
                              item.downloads,
                              item.book,
                              item.keybook,
                            ],
                          });
                        }}
                      >
                        <AiOutlineArrowRight className="m_arrow" />
                      </button>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Course;
