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
        className='bg-transparent group text-xl border-none shadow-none h-auto w-auto p-3 rounded-full duration-200 hover:bg-foreground/5'
        >
        {
          isLight ?
            <BsSun className="group-hover:-rotate-[25deg] duration-500"/>
            :
            <BsFillMoonFill className="group-hover:-rotate-[25deg] duration-500"/>
        }
      </Button>
    </>
  )
}
