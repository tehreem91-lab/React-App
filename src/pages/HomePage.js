import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import CarouselContainer from '../Components/HomeComponent/carousel/CarouselContainer';
import Subject from '../Components/HomeComponent/carousel/subjectchart/subject';
import Counter from '../Components/HomeComponent/counter/counter';
import Testimonial from '../Components/HomeComponent/Testimonial/Testimonial';
import Feedback from '../Components/HomeComponent/Feedback/feedback';
// import Owlcarousal from '../Components/HomeComponent/owlcarousal/owlcarousal';
 import Footer from '../Components/Footer/Footer'

function Home()
{
    return(
          <>
         <Navbar/>
         <CarouselContainer/> 
         <Subject/>
         <Counter/>
         <Feedback/>
         <Testimonial/>
         {/* <Owlcarousal/> */}
         <Footer/>
         </>

    );

}
export default Home;