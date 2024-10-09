import React from 'react'
import { ThemeProvider } from './hooks/useTheme'

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        App
      </div>
    </ThemeProvider>
  )
}

export default App