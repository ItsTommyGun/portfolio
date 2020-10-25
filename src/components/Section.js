import React from 'react'
import styled from 'styled-components'

const Block = styled.div`
    margin: 50px 0px 100px;
    width: 100%;

    @media screen and (min-width: 1280px) {
        margin: 100px 0px 200px;
    }

    &.last {
        margin-bottom: 0;
    }
`;

export default function Section({last, classes, children}) {
    return (
        <Block className={`${last ? 'last' : '' } ${classes ? classes : ''}`}>
            {children}
        </Block>        
    )
}