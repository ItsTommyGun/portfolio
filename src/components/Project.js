import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import animateInView from '../helpers/helpers'

const Case = styled.div`
    a:hover {
        border-bottom: 2px solid #dd6b20;
    }
`;

export default function Project({title, types, stack, customer, children, image, textRight, link, animationStartFrom}) {
    const inputEl = useRef(null);
    const animationDirection = animateInView(inputEl, animationStartFrom, '.2');    

    return (
        <Case className='my-32 lg:flex flex-1' ref={inputEl}>
            <div className={`lg:w-1/2 ${textRight ? 'order-2' : ''} opacity-0 fadeIn--from-${textRight ? 'right': 'left'}`}>
                <div className='text-2xl muli leading-relaxed xl:leading-none'>{title}</div>
                <div className='flex flex-col md:flex-row mt-8 mb-4 text-sm'>
                    <div className='md:w-1/3'><strong>ROLLE</strong></div>

                    <div className='md:hidden'>
                        {types.map((type) => {
                            return <div className='pb-0' key={type}>{type}</div>
                        })}
                    </div>

                    <div className='md:w-1/3 w-1/2 mt-6 md:mt-0'><strong>STACK</strong></div>
                    <div className='md:hidden'>
                        {stack.map((tech) => {
                            return <div className='pb-0' key={tech}>{tech}</div>
                        })}
                    </div>
                    <div className='md:w-1/3 w-1/2 mt-6 md:mt-0'><strong>KUNDE</strong></div>
                    <div className='md:hidden'>{customer}</div>
                </div>
                <div className='mb-8 text-sm hidden md:flex'>
                    <div className='w-1/3'>
                        {types.map((type) => {
                            return <div className='pb-2' key={type}>{type}</div>
                        })}
                    </div>
                    <div className='w-1/3'>
                        {stack.map((tech) => {
                            return <div className='pb-2' key={tech}>{tech}</div>
                        })}
                    </div>
                    <div className='w-1/3'>{customer}</div>
                </div>
                <div className='leading-8'>
                    <p>{children}</p>
                </div>
                {link &&
                    <div className='my-8'>
                        <a href={link} target='_blank' className='text-sm text-orange-600'>ZUR WEBSITE <span className='text-lg'>›</span></a>
                    </div>
                }
            </div>
            <div className={`lg:w-1/2 lg:px-10 mt-4 md:mt-0 ${textRight ? 'order-1' : ''} opacity-0 fadeIn--from-${textRight ? 'left': 'right'}`}>
                <img src={image} />
            </div>
        </Case>
    )
}