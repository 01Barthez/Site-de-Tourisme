import { MdLanguage } from "react-icons/md";
import { GrCurrency } from "react-icons/gr";
import React, { useId } from 'react'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '../../../ui/tabs'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '../../../ui/dropdown-menu'
import { HiOutlineChevronDown } from 'react-icons/hi'
import { TabLangs } from "../../../../global/mocks/MockLanguages";
import CardLang from "../../cards/CardLang";
import { ToggleGroup } from "../../../ui/toggle-group";
import CardCurrency from "../../cards/CardCurrency";
import { TabCurrency } from "../../../../global/mocks/MockCurrency";

/**
 * Functional component for displaying the current language in a dropdown menu.
 * @returns JSX element for the LanguageCurrent component.
 */
const LanguageCurrent: React.FC = () => {
  const id = useId();
  const id2 = useId();
  return (
    <>
      <DropdownMenu>
        {/* Header */}
        <DropdownMenuTrigger className="flex items-center gap-1">
          <span className='font-medium flex gap-1 items-center text-lg text-foreground/80'>
            <MdLanguage />
            <span>/</span>
            <GrCurrency />
          </span>
          <HiOutlineChevronDown className="duration-200 text-foreground/50" />
        </DropdownMenuTrigger>

        {/* Content */}
        <DropdownMenuContent className='mt-5 space-y-2 bg-card rounded-3xl'>
          <Tabs defaultValue="language" className="w-fit">
            <DropdownMenuLabel>
              <TabsList className="bg-foreground/5 rounded-full grid w-fit h-auto grid-cols-2 gap-1">
                <TabsTrigger
                  value="language"
                  className="rounded-full w-fit px-12 py-2.5 hover:text-foreground/80 hover:bg-card/70"
                >
                  Language
                </TabsTrigger>

                <TabsTrigger
                  value="currency"
                  className="rounded-full w-fit px-12 py-2.5 hover:text-foreground/80 hover:bg-card/70"
                >
                  Currency
                </TabsTrigger>
              </TabsList>
            </DropdownMenuLabel>

            <DropdownMenuItem className='focus:bg-transparent'>
              <TabsContent value="language">
                <ToggleGroup
                  type="single"
                  className=" w-full h-auto grid grid-cols-2 gap-y-1 gap-x-2 "
                >
                  {
                    TabLangs.map(el => (
                      <CardLang key={id} lang={el.lang} region={el.region} />
                    ))
                  }
                </ToggleGroup>
              </TabsContent>

              <TabsContent value="currency">
                <ToggleGroup
                  type="single"
                  className=" w-full h-auto grid grid-cols-2 gap-y-1 gap-x-2 "
                >
                  {
                    TabCurrency.map(el => (
                      <CardCurrency key={id2} icon={el.icon} abbrev={el.abbrev} />
                    ))
                  }
                </ToggleGroup>
              </TabsContent>
            </DropdownMenuItem>
          </Tabs >
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default LanguageCurrent
