import React from 'react'
import { Link } from 'gatsby-plugin-modal-routing'
import ExternalLinkIcon from '../../../static/icons/external-link.svg'

export default function Footer(){

    return (
        <div className='bg-black text-white w-full py-10'>
            <div className='lg:container m-auto flex justify-between px-10 xl:px-0'>
                <div>&copy; 2020 Thomas Fischer</div>
                <div>
                    Fotos von <a href='https://www.evamariajanson.com/' target='_blank' className='text-orange-600'>
                        Eva Maria Janson
                        <ExternalLinkIcon className='fill-current w-3 h-3 inline-block ml-1 align-baseline' />
                    </a>
                    <Link to='legalnotice' className='ml-10 text-orange-600'>Impressum / Haftung</Link>
                </div>
            </div>
        </div>
    )
}