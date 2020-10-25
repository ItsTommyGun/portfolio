import React, { useRef } from 'react';
import animateInView from '../helpers/helpers';
import ContactIcons from '../components/ContactIcons'

export default function Contact({ animationStartFrom }) {
    const inputEl = useRef(null);
    const animationDirection = animateInView(inputEl, animationStartFrom, '.2');
 
    return (
        <div className='mb-10 flex flex-col xl:flex-row mx-auto sm:px-10 xl:p-0' ref={inputEl}>
          <div className='xl:w-1/3 xl:mx-16 mb-12 xl:mb-0 mt-10 xl:mt-32 text-center xl:text-left opacity-0 fadeIn--from-left fadeIn--delay-300'>
              <div className='xl:text-5xl text-5xl leading-tight text-gradient'>
                Lust auf 'nen Kaffee?
              </div>
              <ContactIcons />
          </div>
          <div className='xl:w-2/3 xl:ml-16 opacity-0 fadeIn--from-right fadeIn--delay-delay-300'>
              <img src='./images/THOMI-BW-19.jpg' className='max-h-screen m-auto' />
          </div>
        </div>
    )
}