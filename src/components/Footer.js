import React from 'react'
import styled from 'styled-components'

import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import { Link } from 'gatsby-plugin-modal-routing'

const Foot = styled.div`
`;

export default function Footer(){

    return (
        <Foot className='bg-black text-white w-full py-10'>
            <div className='lg:container m-auto flex justify-between px-10 xl:px-0'>
                <div>&copy; 2020 Thomas Fischer</div>
                <div>
                    <Link to='imprint' asModal>Impressum</Link>
                </div>
            </div>
        </Foot>
    )
}