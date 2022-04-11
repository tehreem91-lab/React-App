import React from "react";
import './introduction.css';
import innovative from '../../../Assests/Home/innovative.png'
import msg from '../../../Assests/Home/msg.gif'
const Introduction = () => {
  return (
    <div>
      <div className="container_fluid intro-main">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <div className="intro_heading">
                  {/* <img src={msg} alt='' className="w-25 h-25"/> */}
                <span className="text-warning">#Learn Anything, Anytime Anywhere</span>
                <h1 className="fs-1 intro_main_heading">Best Online Learning For Your Future</h1>
                <h6 className="sub_heading">
                Innovative Learning is the best platform for private online lessons with a flexible payment system and affordable prices. Book your first lesson
                  {/* WE Blieve that every one has capacity to creative, Turitor is
                  a place where people Develop their own potential */}
                </h6>
                <button className='btn intro_btn1' onClick='/ourcourse'>View Courses</button>
                <button className='btn  intro_btn2' onClick='/findTutor'>Find Your Tutor</button>
              </div>
            </div>
            <div className="col-md-6 ">
                <div className="image-box m-auto">
                    <img src={innovative} alt="" className="intro_image"/>
                </div>
                

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
