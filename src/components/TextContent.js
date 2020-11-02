import React, { useRef } from 'react';
import styled from 'styled-components';
import animateInView from '../helpers/helpers';

const Title = styled.h2`
    letter-spacing: 0.03em;
    margin-top: .5em;
    margin-bottom: .5em;
`;

const Paragraph = styled.p`
    margin: 50px 0px;
    color: rgb(105, 105, 105);
    letter-spacing: 0.03em;
`;

export default function TextContent({children, headline, animationStartFrom, delay }) {
    const inputEl = useRef(null);
    const animationDirection = animateInView(inputEl, animationStartFrom);

    return (
        <div ref={inputEl} className='lg:w-3/5 w-full'>
            <Title className={`lg:text-4xl text-2xl opacity-0 fadeIn--from-${animationDirection}`}>
                {headline}
            </Title>
            <Paragraph className={`leading-8 opacity-0 fadeIn--from-${animationDirection}`}>
                {children}
            </Paragraph>
        </div>
    )
}