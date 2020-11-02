import React, { useEffect } from 'react'
import LinkBack from '../components/LinkBack'
import '../css/global.scss'

export default function BoschDesktopApp() {

  return (
    <div className='p-8 container mx-auto'>
      <LinkBack text='Zur Startseite' />
    </div>
  )
}
