import React, { useRef } from 'react';
import animateInView from '../helpers/helpers';

export default function Slogan({ text, animationStartFrom, delay }) {
    const inputEl = useRef(null);
    const animationDirection = animateInView(inputEl, animationStartFrom);
 
    return (
        <div className='lg:w-1/2 w-full mt-4 mb-4 lg:mt-0 lg:flex items-center justify-center' ref={inputEl}>
            <div className={`lg:text-4xl sm:text-3xl text-2xl leading-none text-center muli opacity-0 fadeIn--from-${animationDirection} ${delay && `fadeIn--delay-${delay}`}`}>
                {text}
            </div>
        </div>
    )
}