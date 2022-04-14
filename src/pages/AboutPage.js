import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Aboutstart from '../Components/AboutComponent/Aboutstart';
import Aboutmiddle from '../Components/AboutComponent/Aboutmiddle';
import Footer from '../Components/Footer/Footer'
function About()
{
    return(
        <>
         <Navbar/>
         <Aboutstart/>
         <Aboutmiddle/>
          {/* <AboutTop/>
           <Abouttutor/> */}
  
            <Footer/>

        </>

    );

}
export default About;