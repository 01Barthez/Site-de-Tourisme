import { MdLanguage } from "react-icons/md";
import { GrCurrency } from "react-icons/gr";
import React from 'react'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '../../../ui/tabs'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '../../../ui/card'
import { Label } from '../../../ui/label'
import { Input } from '../../../ui/input'
import { Button } from '../../../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '../../../ui/dropdown-menu'
import { HiOutlineChevronDown } from 'react-icons/hi'


const LanguageCurrent: React.FC = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1">
          <span className='font-medium flex gap-1 items-center'>
            <MdLanguage />
            <span>/</span>
            <GrCurrency />
          </span>
          <HiOutlineChevronDown className="duration-200 text-foreground/50" />
        </DropdownMenuTrigger>

        <DropdownMenuContent className=' mt-5 space-y-2 bg-card'>
          <Tabs defaultValue="language" className="w-[400px]">
            <DropdownMenuLabel>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="language">
                  Language
                </TabsTrigger>
                <TabsTrigger value="device">
                  Device
                </TabsTrigger>
              </TabsList>
            </DropdownMenuLabel>

            <DropdownMenuItem className='focus:bg-transparent'>
              <TabsContent value="language">
                <Card>
                  <CardHeader>
                    <CardTitle>language</CardTitle>
                    <CardDescription>
                      Make changes to your language here. Click save when you're done.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" defaultValue="Pedro Duarte" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" defaultValue="@peduarte" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save changes</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="device">
                <Card>
                  <CardHeader>
                    <CardTitle>device</CardTitle>
                    <CardDescription>
                      Change your device here. After saving, you'll be logged out.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="current">Current device</Label>
                      <Input id="current" type="device" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="new">New device</Label>
                      <Input id="new" type="device" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save device</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </DropdownMenuItem>
          </Tabs >
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default LanguageCurrent
