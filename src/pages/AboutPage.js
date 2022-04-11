import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import AboutTop from '../Components/AboutComponent/AboutTop';
import Abouttutor from '../Components/AboutComponent/AboutTutor';
import Footer from '../Components/Footer/Footer'
function About()
{
    return(
        <>
         <Navbar/>
          <AboutTop/>
           <Abouttutor/>
  
            <Footer/>

        </>

    );

}
export default About;