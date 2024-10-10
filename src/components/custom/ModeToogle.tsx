import { BsFillMoonFill } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import { Button } from "../ui/button"
import { useTheme } from "../../hooks/useTheme"
import { useState } from "react"

export function ModeToggle() {
  const { setTheme } = useTheme()
  const [isLight, setLight] = useState<boolean>(true)

  const changeTheme = () => {
    setTheme(isLight ? "dark" : "light");
    setLight((prev) => !prev);
  };

  return (
    <>
      <Button
        variant='outline'
        size="icon"
        onClick={changeTheme}
        className="border-none bg-transparent shadow-none rounded-full hover:bg-gray-100 dark:hover:bg-primary-foreground/10"
      >
        {
          isLight ?
            <BsSun className="h-[1.3rem] w-[1.3rem] transition-all"/>
            :
            <BsFillMoonFill className="absolute h-[1.3rem] w-[1.3rem] transition-all"/>
        }
      </Button>
    </>
  )
}
