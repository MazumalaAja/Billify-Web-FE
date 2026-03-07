// IMPORTS
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'

// MY-CODE
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
