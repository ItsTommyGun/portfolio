import React, { useEffect } from 'react'
import LinkBack from '../components/LinkBack'
import '../css/global.scss'

export default function NotFound() {

  return (
    <div className='p-8 container mx-auto'>
        <LinkBack text='Zur Startseite' />
        <h1 className='text-3xl'>404</h1>

        <h2 className='my-4'>Die Seite gibt's net!</h2>
        <p>Klick oben auf den Pfeil, um zur Startseite zu gelangen!</p>
    </div>
  )
}
