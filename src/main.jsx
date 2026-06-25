import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './index.css'

console.log("%cArnav","color: #FF6B6B; font-size: 70px; font-weight: bold;");
console.log("%chttps://rnv.is-a.dev", "font-size: 20px;");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
