import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Fontes auto-hospedadas (eixo de peso apenas; sem itálico) — direção "Monolito".
import '@fontsource-variable/martian-mono/wght.css'
import '@fontsource-variable/geist/wght.css'
import '@fontsource-variable/jetbrains-mono/wght.css'

import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
