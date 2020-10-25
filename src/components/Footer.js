import React from 'react'
import { Link } from 'gatsby-plugin-modal-routing'

export default function Footer(){

    return (
        <div className='bg-black text-white w-full py-10'>
            <div className='lg:container m-auto flex justify-between px-10 xl:px-0'>
                <div>&copy; 2020 Thomas Fischer</div>
                <div>
                    <Link to='imprint' asModal>Impressum</Link>
                </div>
            </div>
        </div>
    )
}