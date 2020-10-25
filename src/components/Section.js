import React from 'react'
import styled from 'styled-components'

const Block = styled.div`
    &.last {
        margin-bottom: 0;
    }
`;

export default function Section({last, classes, children}) {
    return (
        <Block className={`mt-20 mb-24 xl:mt-40 xl:mb-40 ${last ? 'last' : '' } ${classes ? classes : ''}`}>
            {children}
        </Block>        
    )
}