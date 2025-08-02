import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PlanetProvider from '../contexts/PlanetProvider.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PlanetProvider>
        <App />
      </PlanetProvider>
    </BrowserRouter>
  </StrictMode>,
)
