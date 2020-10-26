import React, { useEffect } from 'react'
import { Link } from 'gatsby-plugin-modal-routing'
import ArrowLeft from '../../static/icons/arrow-left.svg'

export default function LinkBack({text}) {
    return (
        <Link className='my-16 flex flex-row' to="/">
            <ArrowLeft className='h-6 w-6 mr-5' /> <span>{text}</span>
        </Link>
    )
}