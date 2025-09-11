import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from "./Greeting.jsx";
import { Food, Drink } from './Food.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Greeting />
    <Food /> 
    <Drink />
  </StrictMode>,
)

