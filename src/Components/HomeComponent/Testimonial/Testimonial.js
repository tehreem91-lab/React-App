import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./testimonial.css";
export default function Testimonial() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { feedback } = useSelector((state) => state.FeedbackReducer);

  useEffect(() => {
    const getFeedback = async () => {
      setLoading(true);
      await axios
        .get(
          "https://updated-innovative-server.herokuapp.com/api/user/getfeedback"
        )
        .then((res) => {
          dispatch({ type: "FEEDBACK", payload: { feedback: res.data } });
          setLoading(false);
        })
        .catch((e) => console.log(e));
    };
    getFeedback();
  }, []);

  // const testiMonials = [
  //   {
  //     name: "Brandon Savage",
  //     heading: '"I Enjoy Every Lessaon"',
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
  //     address: "USA",
  //     img: "https://i.ibb.co/z7Kp6yr/np-file-33188.jpg",
  //   },
  //   {
  //     name: "Steve Burns",
  //     heading: '"it was really interesting"',
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
  //     address: "USA",
  //     img: "https://i.ibb.co/CP5sj7g/2856040-58866808-2560-1440.jpg",
  //   },
  //   {
  //     name: "Kevin Canlas",
  //     heading: '"it was really interesting"',
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
  //     address: "USA",
  //     img: "https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg",
  //   },
  //   {
  //     name: "Steve Burns",
  //     heading: '"I Enjoy Every Lessaon"',
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
  //     address: "USA",
  //     img: "https://i.ibb.co/CP5sj7g/2856040-58866808-2560-1440.jpg",
  //   },
  // ];
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 4000,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <>
      <div className="container-fluid testimonial-back">
        <div className="container ">
          <h4 className="text-center text-warning fs-3 ">Our TESTIMONIALS</h4>
          <div className="text-center ">
            <h3 className="fs-5 text-white mt-2">
              Happy Clients Said About Our Service
            </h3>
          </div>
        </div>
        <div className="container-fluid">
          <div className="container ">
            <div className="row">
              <div className="col-md-12">
                <OwlCarousel
                  id="customer-testimonials"
                  className="owl-carousel owl-theme"
                  {...options}
                >
                  {feedback === [] ? (
                    <>
                      <h1 style={{ color: "white" }}>
                        It seems that nobody has given feedback yet...
                      </h1>
                    </>
                  ) : (
                    <>
                      {feedback &&
                        feedback.map((item) => {
                          return (
                            <>
                              <div class="item">
                                <div class="shadow-effect">
                                  <h6 className="text-white mt-3">
                                    {item.feedback}
                                  </h6>
                                  <div>
                                    <h6 className=" test_email">
                                      <h6 className="fs-5 text-white">Email:</h6>
                                      {item.email}
                                    </h6>
                                  </div>
                                </div>
                                <div class="testimonial-name">
                                  <h5>{item.name}</h5>
                                </div>
                              </div>
                            </>
                          );
                        })}
                    </>
                  )}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container-fluid testimonial-back">
        <div className="container">
          <h4 className="text-center text-warning fs-3">Testimonials</h4>
          <div className="text-center ">
            <h3 className="fs-5 text-white mt-2">
              Happy Clients Said About Our Service
            </h3>
          </div>
        </div>
        <div className="container-fluid">
          <div className="container ">
            <div className="row">
              <div className="col-md-12">
                <OwlCarousel
                  id="customer-testimonoals"
                  className="owl-carousel owl-theme"
                  {...options}
                >
                  <>
                    { feedback === [] ? (
                      <>
                        <h1 style={{color:"white"}}>It seems that nobody has given feedback yet...</h1>
                      </>
                    ) : (
                      <>
                       
                        {feedback &&
                          feedback.map((item) => {
                            return (
                              <>
                                <div class="item">
                                  <div class="shadow-effect">
                                    <h6 className="text-white mt-3">
                                      {item.feedback}
                                    </h6>
                                  </div>
                                  <div class="testimonial-name">
                                    <h5>{item.name}</h5>
                                  </div>
                                </div>
                              </>
                            );
                          })}
                      </>
                    )}
                  </>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
