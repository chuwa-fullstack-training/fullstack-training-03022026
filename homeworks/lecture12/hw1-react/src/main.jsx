import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import FrontendInfo from './FrontendInfo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FrontendInfo />
  </StrictMode>,
)
