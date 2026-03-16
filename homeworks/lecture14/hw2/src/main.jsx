import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hw2 from './Hw2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Hw2 />
  </StrictMode>,
)
