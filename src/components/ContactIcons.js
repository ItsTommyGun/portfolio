import React, { useRef } from 'react';
import animateInView from '../helpers/helpers';

import Xing from '../../static/icons/xing.svg'
import Linked from '../../static/icons/linkedin.svg'
import Stack from '../../static/icons/stack-overflow.svg'
import EMail from '../../static/icons/mail.svg'

export default function Contact({ text, animationStartFrom}) {
    const inputEl = useRef(null);
    const animationDirection = animateInView(inputEl, animationStartFrom, '1');
 
    return (
        <div className='leading-tight xl:leading-normal mt-12 xl:mt-24 contact-icons flex justify-evenly xl:justify-between' ref={inputEl}>
            <a href='https://www.xing.com/profile/Thomas_Fischer693/cv' target='_blank' className='opacity-0 fadeIn--from-bottom fadeIn--delay-200'>
                <Xing />
                </a>
            <a href='https://www.linkedin.com/in/thomas-fischer-12a44687/' target='_blank' className='opacity-0 fadeIn--from-bottom fadeIn--delay-400'>
                <Linked />
            </a>
            <a href="https://stackoverflow.com/users/2151913/tommygun" target='_blank' className='opacity-0 fadeIn--from-bottom fadeIn--delay-600'>
                <Stack />
            </a>
            <a href="mailto:thomasfischer1337@gmail.com" target='_blank' className='opacity-0 fadeIn--from-bottom fadeIn--delay-800'>
                <EMail />
            </a>
        </div>
    )
}