import React, { useState, useEffect } from "react";
import "./tutorsearch.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
// import img1 from "../../Assests/Tutor/img1.jpg";
// import img2 from "../../Assests/Tutor/img2.jpeg";
// import img3 from "../../Assests/Tutor/img3.jpeg";
import { SchoolRounded } from "@material-ui/icons";
import { Form, FormControl } from "react-bootstrap";
const Tutorsearch = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  // const [loading, setLoading] = useState(false);
  const { teacherdata } = useSelector((state) => state.FeedbackReducer);

  useEffect(() => {
    const getTeacher = async () => {
      // setLoading(true);
      await axios
        .get(
          "https://updated-innovative-server.herokuapp.com/api/user/teachers"
        )
        .then((res) => {
          dispatch({ type: "GET_TEACHER", payload: { teacherdata: res.data } });
        })
        .catch((e) => console.log(e));
    };
    getTeacher();
  }, []);

  // const TutorData = [
  //   {
  //     name: "Brandon Savage",
  //     email: "abc123@gmail.com",
  //     rate: "250 Rs",
  //     contact: "+923064723479",
  //     qualification: "BSCS Computer Science",
  //     subject: "computer Science",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
  //     image: img1,
  //   },
  //   {
  //     name: "Steve Burns",
  //     rate: "250 Rs",
  //     email: "abc123@gmail.com",
  //     qualification: "MS Phyics",
  //     subject: "Science",
  //     contact: "+92312171136",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
  //     address: "USA",
  //     image: img2,
  //   },
  //   {
  //     name: "Kevin Canlas",
  //     rate: "250 Rs",
  //     email: "abc123@gmail.com",
  //     subject: "Chemistry",
  //     contact: "+923064723479",
  //     qualification: "MS Chemistry",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
  //     address: "USA",
  //     image: img3,
  //   },
  //   {
  //     name: "Steve Burns",
  //     rate: "250 Rs",
  //     email: "abc123@gmail.com",
  //     subject: "English",
  //     contact: "+923064723479",
  //     qualification: "MA English",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
  //     image: img1,
  //   },
  // ];
  // const FindNow = () => {
  //   TutorData.filter((data) => {
  //     if (search === "") {
  //       return data;
  //     } else if (data.subject.toLowerCase().includes(search.toLowerCase())) {
  //       return data;
  //     }
  //   });
  //   console.log("button clicked");
  // };
  return (
    <div>
      <div className="tutorheader_section">
        <div className="tutor_text">
          <span className="text-info fs-6">Private and Personal Tutor</span>
          <h1 className="main_tutorheading text-white fs-1">
            Find Private Tutor Online.
          </h1>
        </div>
      </div>
      <div className="container_fluid">
        <div className="container">
          <div className="search_box">
            <div className="container">
              <div className="row">
                <div className="col-md-2 text-center fs-4 text-warning ">
                  Find Your Tutor
                </div>
                <div className="col-md-10 search_back ">
                  <Form className="d-flex">
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className="search_bar"
                      aria-label="Search"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container_fluid" style={{ marginTop: "70px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 ">
              {teacherdata === undefined ? (
                "loading...."
              ) : (
                <>
                  {
                    teacherdata
                      .filter((data) => {
                        if (search === "") {
                          return data;
                        } else if (
                          data.subject
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                          data.name.toLowerCase().includes(search.toLowerCase())
                        ) {
                          return data;
                        }
                      })
                      .map((data) => {
                        return (
                          <>
                            <div className="tutor_card mt-4 ">
                              <div className="row">
                                <div className="col-md-3">
                                  <div className="tutor_left">
                                    <div className="tutor_image">
                                      Top Tutor
                                      <img
                                        src={data.pic}
                                        alt=""
                                        style={{
                                          width: "100%",
                                          height: "150px",
                                          borderRadius: "0px 0px 10px 10px",
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-9">
                                  <div className="card_text">
                                    <div className="row">
                                      <div className="col-8">
                                        <h1 className="card_title fs-2">
                                          {data.name}
                                        </h1>
                                        <span className="tutor_qulaification">
                                          {" "}
                                          <SchoolRounded /> {data.qualification}
                                        </span>
                                      </div>
                                      <div className="col-4 text-center">
                                        <span className="tutor_rate text-warning">
                                          {data.rate} <br />
                                          Per hour
                                        </span>
                                      </div>
                                    </div>
                                    <div className="tutor_contact mt-3">
                                      Contact: {data.contact}
                                    </div>
                                    <h3 className="tutor_email mt-1 text-info">
                                      Email:{" "}
                                      <a
                                        href="https://gmail.com"
                                        target="blank"
                                      >
                                        {data.email}
                                      </a>
                                    </h3>
                                    <p className="description mt-2 ">
                                      {data.desc}
                                    </p>

                                    <div className="tutor_subject">
                                      <div className="row">
                                        <div className="col-md-8">
                                          <h4 className="text-warning fs-4 mt-2">
                                            Subject:
                                          </h4>
                                          {data.subject}
                                        </div>
                                        <div className="col-md-4 text-center">
                                          <button className="btn tutor_message ">
                                            Mesaage
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}
                </>
              )}
            </div>

            <div className="col-md-4">
              <div className=" tutor_right">
                <h1 className="fs-4 text-center">Subject</h1>

                <div className="tutor_right_subject">
                  <span onClick={() => setSearch("computer science")}>
                    computer science
                  </span>
                  <span onClick={() => setSearch("Mathematics")}>
                    Mathematics
                  </span>
                  <span onClick={() => setSearch("Statistics")}>
                    Statistics
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorsearch;
