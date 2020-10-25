import React, { useRef } from 'react';
import styled from 'styled-components';
import animateInView from '../helpers/helpers';

const Section = styled.section`
    @media screen and (min-width: 1024px) {
        width: 700px;
    }
`;

const Title = styled.h2`
    width: 100%;
    letter-spacing: 0.03em;
    margin-top: .5em;
    margin-bottom: .5em;
`;

const Paragraph = styled.p`
    margin: 50px 0px;
    color: rgb(105, 105, 105);
    width: 100%;
    letter-spacing: 0.03em;
`;

export default function TextContent({children, headline, animationStartFrom, delay }) {
    const inputEl = useRef(null);
    const animationDirection = animateInView(inputEl, animationStartFrom);

    return (
        <Section ref={inputEl}>
            <Title className={`lg:text-4xl text-2xl opacity-0 fadeIn--from-${animationDirection}`}>
                {headline}
            </Title>
            <Paragraph className={`leading-8 opacity-0 fadeIn--from-${animationDirection}`}>
                {children}
            </Paragraph>
        </Section>
    )
}