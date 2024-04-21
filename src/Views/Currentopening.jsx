import React, { useState, useEffect } from 'react';
import CustomAccordion from '../components/Accordian';

const Currentopening = () => {
  const [openAccordionId, setOpenAccordionId] = useState(null);
  const [sheetData, setSheetData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://sheetdb.io/api/v1/xoix6vrnvu6gg');
        const jsonData = await response.json();
        console.log(jsonData);
        setSheetData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleAccordionClick = (accordionId) => {
    setOpenAccordionId(accordionId === openAccordionId ? null : accordionId);
  };

  return (
    <div className='w-full leading-loose'>
    <img className="w-full h-[550px] object-cover left-0" src="assets/header/home_header.jpg" alt='Homeheroimage'/>
 <div className='bg-black/90 absolute left-0 w-full'/>

<div className='absolute w-full h-[550px] flex flex-col justify-center  text-white top-0 text-center lg:text-left' >
<div className=' max-w-[1140px] mx-auto p-4'>
      
      <h1 className='font-medium my-5 mx-auto text-white text-4xl lg:text-5xl py-2 text-center lg:leading-normal'>  Current Openings
     </h1>
      <p> Collaborate with passionate minds and make a real impact on the world through technology.</p>
 <div className='text-center'>

</div>
</div>
  </div>

   
  <section className='py-16 text-white mx-16'>
  <div>
        <p className='my-2.5 text-lg py-16 px-10  md:leading-relaxed'>
          At ITLABS INC, we understand the challenges businesses face in today's dynamic technological landscape. That's why we offer a comprehensive suite of IT solutions and staffing services designed to help you optimize your operations, achieve your goals, and gain a competitive edge.
        </p>
      </div>
  <div className='text-white'>


{sheetData.map((item) => (
  <CustomAccordion
    title={item.title}
    date={item.date}
    jobcode={item.job_code} // Make sure to match with your data structure
    location={item.location}
    description={item.description ? item.description.split('.').slice(0, -1) : []} // Check if description exists before splitting
    skills={item.skills ? item.skills.split(',').map((skill) => ({ label: skill, value: 'Value' })) : []} // Check if skills exists before splitting
    key={item.id}
    isOpen={openAccordionId === item.id}
    toggleAccordion={() => handleAccordionClick(item.id)}
  />
))}
      </div>
  </section>
  
  </div>
  )
}

export default Currentopening