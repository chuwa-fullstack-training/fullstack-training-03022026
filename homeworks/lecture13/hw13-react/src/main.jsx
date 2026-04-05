import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import './hw2.css'
import App from './App.jsx'
import Todo from './Todo.jsx'
import PhoneLayout from './PhoneLayout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Todo />
    {/* <PhoneLayout /> */}
  </StrictMode>,
)
