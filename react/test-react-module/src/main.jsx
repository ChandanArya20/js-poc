import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App, {App2} from './App.jsx'
import './index.css'
import { person } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <h4 style={{color:'red'}}>
      {
        person.name+person.age
      }
    </h4>
    <App2 />
  </StrictMode>,
)
