import React from 'react';

export default function Welcome({upperText,lowerText, delay}) {

    return (
        <div className='min-h-screen flex flex-col lg:flex-row mx-auto px-10 lg:p-0'>
            <div className='lg:w-3/5 xl:w-1/2 lg:ml-8 order-2 lg:order-1'>
                <img src='./images/THOMI-2.jpg' alt='Thomas Fischer - Webentwickler aus Stuttgart' className='fadeIn fadeIn--from-left delay-300 max-h-screen m-auto' loading="lazy" />
            </div>
            <div className='lg:w-2/5 xl:w-1/2 lg:mx-12 mb-12 lg:mb-0 mt-10 lg:mt-32 order-1 lg:order-2 lg:text-left'>
                <div className={`lg:text-8xl text-5xl leading-tight text-gradient fadeIn fadeIn--from-right ${delay && `fadeIn--delay-${delay}`}`}>
                    Hey! <br />Ich bin Thomas
                </div>
                <div className={`lg:text-4xl text-2xl leading-tight lg:leading-normal mt-4 lg:mt-12 fadeIn fadeIn--from-right ${delay && `fadeIn--delay-${delay}`}`}>
                    Webentwickler aus Stuttgart
                </div>
            </div>
        </div>
    )
}
