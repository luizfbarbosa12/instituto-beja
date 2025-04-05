import './main.css'
import App from './App.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../public/fonts/fonts.css'
import FirstSection from './components/FirstSection.jsx'
import RebrandingSection from './components/RebrandingSection.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirstSection/>
    <App />
    <RebrandingSection/>
  </StrictMode>,
)
