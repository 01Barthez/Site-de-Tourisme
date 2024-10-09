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
        className="hover:bg-gray-200"
      >
        {
          isLight ?
            <BsSun
              className="h-[1.2rem] w-[1.2rem] scale-110 transition-all"
            />
            :
            <BsFillMoonFill
              className="absolute h-[1.2rem] w-[1.2rem] transition-all"
            />
        }
      </Button>
    </>
  )
}
