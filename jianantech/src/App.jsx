import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import DesktopPage from './pages/landing-page/pages/desktop/Desktop'
import MobilePage from './pages/landing-page/pages/mobile/Mobile'
import useWindowDimensions from './utils/helpers'
import './App.css'

export default function App() {
  return (
    <>
      <BrowserRouter>
        {useWindowDimensions().width > 1200 ? <DesktopPage /> : <MobilePage />}
      </BrowserRouter>
    </>
  )
}
