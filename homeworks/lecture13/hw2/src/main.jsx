import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Phone from './Phone.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Phone />
  </StrictMode>,
)
