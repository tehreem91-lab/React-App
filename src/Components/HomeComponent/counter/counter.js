import React from 'react'
import './counter.css'
import CountUp from 'react-countup'
import {FaUserGraduate} from 'react-icons/fa'
import {GiTeacher,GiBookAura} from 'react-icons/gi'
const Counter =()=>
{
    return(
       <>
          <div className='container-fluid counter-back'>
      
          <div className='container'> 
          <div className='row text-center'> <h2 className='text-white fs-3'>Our Popular Courses</h2> </div> 
          <div className='counter-container '>
             
          <div className='row mt-5'>
          <div className='col-md-4'>
          <FaUserGraduate style={{width:'35%' ,height:'35%',margin:'auto'}} /> <br/>
          <CountUp  end={400} duration={7} className='fs-3 ' />
           <h6 className='text-warning'>Students Enrolled</h6>
        
          </div>
          <div className='col-md-4'><GiTeacher style={{width:'35%' ,height:'35%',margin:'auto'}}/>  <br/>
          <CountUp  end={500} duration={7} className='fs-3' />
          <h6 className='text-warning'>Available Teachers</h6>
          </div>
          <div className='col-md-4'><GiBookAura style={{width:'35%' ,height:'35%',margin:'auto'}}/> <br/>
          <CountUp  end={400} duration={7} className='fs-3'/>
          <h6 className='text-warning'>Course published</h6>
          </div> 
        
          </div>
          </div>

          </div>

          </div>
       </>

      );
}
export default Counter