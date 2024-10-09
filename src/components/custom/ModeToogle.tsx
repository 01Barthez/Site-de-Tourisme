import { Moon, Sun } from "lucide-react"
import { Button } from "../ui/button"
import { useTheme } from "../../hooks/useTheme"
import { useState } from "react"

export function ModeToggle() {
  const { setTheme } = useTheme()
  const [isLight, setLight] = useState<boolean>(true)
  const changeTheme = () => {
    setLight(prev => !prev)
    {
      isLight ? setTheme("light") : setTheme("dark")
    }
  }
  return (
    <>
      <Button
        variant='outline'
        size="icon"
        onClick={changeTheme}
      >
        {
          isLight ?
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            :
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        }
      </Button>
    </>
  )
}
