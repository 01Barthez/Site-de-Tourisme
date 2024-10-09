import React from 'react'
import { ThemeProvider } from './hooks/useTheme'
import { ModeToggle } from './components/custom/ModeToogle'

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        App

        <ModeToggle/>
      </div>
    </ThemeProvider>
  )
}

export default App