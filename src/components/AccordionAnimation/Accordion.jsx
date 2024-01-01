import React from 'react'
import './index.scss'
import { useState, useRef, useEffect } from 'react';
import AnimateHeight from 'react-animate-height'; //npm install react-animate-height

function Accordion() {

  const [activeIndex, setActiveIndex] = useState(null);
  const descriptionRef = useRef();


  const handleHeaderClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
   


  return (
    <div className="accordion">
      {Array.from({ length: 4 }).map((_, index) => (
        <div className="accordion-content" key={index}>
          <header onClick={() => handleHeaderClick(index)}>
            <span className="title">What do you mean by Accordion?</span>
            <span className={`fa-solid ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`}>
              {activeIndex === index ? '-' : '+'}
            </span>
          </header>
          <AnimateHeight
          duration={500}
          height={activeIndex === index ? 'auto' : 0}
        >
          <p className="description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nobis ut perspiciatis minima quidem nisi, obcaecati, delectus consequatur fuga nostrum iusto ipsam ducimus quibusdam possimus. Maiores non enim numquam voluptatem?
          </p>
        </AnimateHeight>
          {/* <p ref={descriptionRef} className={`description ${activeIndex === index ? 'open' : ''}`}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nobis ut perspiciatis minima quidem nisi, obcaecati, delectus consequatur fuga nostrum iusto ipsam ducimus quibusdam possimus. Maiores non enim numquam voluptatem?
          </p> */}
        </div>
      ))}
    </div>
  )



  // return (
  //     <div className="accordion">
  //       <div index='1' className="accordion-content">
  //           <header onClick={() => handleHeaderClick('1')}>
  //               <span className="title">What do you mean by Accordion?</span>
  //               <span className="fa-solid fa-plus">{activeIndex === index ? '-' : '+'}</span>
                
  //           </header>
  //           <p className="description">
  //               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nobis ut perspiciatis minima quidem nisi, obcaecati, delectus consequatur fuga nostrum iusto ipsam ducimus quibusdam possimus. Maiores non enim numquam voluptatem?
  //           </p>
  //       </div>
  //       <div className="accordion-content">
  //           <header>
  //               <span className="title">What do you mean by Accordion?</span>
  //               <span className="fa-solid fa-plus">+</span>
  //           </header>
  //           <p className="description">
  //               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nobis ut perspiciatis minima quidem nisi, obcaecati, delectus consequatur fuga nostrum iusto ipsam ducimus quibusdam possimus. Maiores non enim numquam voluptatem?
  //           </p>
  //       </div>
  //       <div className="accordion-content">
  //           <header>
  //               <span className="title">What do you mean by Accordion?</span>
  //               <span className="fa-solid fa-plus">+</span>
  //           </header>
  //           <p className="description">
  //               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nobis ut perspiciatis minima quidem nisi, obcaecati, delectus consequatur fuga nostrum iusto ipsam ducimus quibusdam possimus. Maiores non enim numquam voluptatem?
  //               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto neque, sed inventore illum ut quis ducimus deleniti temporibus maiores? At nisi sed pariatur cupiditate quidem quod adipisci aut, eos quis minima voluptates non veniam ipsam quasi architecto ducimus error eum id ab, suscipit doloribus, ut accusantium consequuntur voluptate! Unde, hic sed rerum officia totam id libero officiis nihil rem sequi porro labore praesentium repudiandae a blanditiis molestias nisi beatae natus! Ea, ut voluptates, natus harum nesciunt odio hic eveniet reprehenderit veritatis, possimus tempora magni soluta eaque quidem neque maxime nostrum sapiente commodi? Earum ex cumque cupiditate dicta, tempora temporibus quaerat.
  //           </p>
  //       </div>
  //       <div className="accordion-content">
  //           <header>
  //               <span className="title">What do you mean by Accordion?</span>
  //               <span className="fa-solid fa-plus">+</span>
  //           </header>
  //           <p className="description">
  //               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nobis ut perspiciatis minima quidem nisi, obcaecati, delectus consequatur fuga nostrum iusto ipsam ducimus quibusdam possimus. Maiores non enim numquam voluptatem?
  //           </p>
  //       </div>
  //     </div>
  // )
}

export default Accordion