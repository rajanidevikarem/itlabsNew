import React, { useState } from "react";
import "../components/Accordian.css";
import Modal from "../components/Modal"

const CustomAccordion = ({ title, date, location, jobcode,description, isOpen, toggleAccordion }) => {
  return (
    <div className="w-full px-10 lg:px-28">

 
    <div className={`accordion ${isOpen ? "active" : ""}`}>
      <div className={`accordion-header ${isOpen ? "active" : ""}`} onClick={toggleAccordion}>
        <ul>
          <li>  <p className="text-3xl">{title}</p></li>
          <li> <p className="accordion-subtitle"> Jobcode:{jobcode} | Location: {location} | Date :{date}</p> </li>
        </ul>
      
        
        <span className={`icon ${isOpen ? "open" : ""}`}>
          Read More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </span>
      </div>
      {isOpen && (
        <div className="accordion-content flex flex-col justify-center items-start h-fit">
         
          <h1 className="text-3xl py-4 ">Job Description</h1>
          <ul className="text-white">
            {description.map((item, index) => (
              
              <li key={index} className='flex justify-between items-start my-6 w-fit '>
                      <div className=' px-4 items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
</div>
<div className='w-fit h-fit'> {item}</div>
               </li>
            ))}
          </ul>
          
      
          <Modal />
          

        </div>
      )}
    </div>

    </div>
  );
};

export default CustomAccordion;
