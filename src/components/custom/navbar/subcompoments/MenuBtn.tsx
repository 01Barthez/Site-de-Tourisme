import { AiOutlineMenu } from "react-icons/ai";
import React from 'react'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../../../ui/sheet";
import { Button } from "../../../ui/button";
import { Label } from "../../../ui/label";
import { Input } from "../../../ui/input";


/**
 * Functional component representing a menu button in a React application.
 * @returns JSX element that renders a button with an icon for the menu.
 */
const MenuBtn: React.FC = () => {
    return (
        <>
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant='outline'
                        size="icon"
                        className="relative w-auto h-auto p-3 text-xl border-none bg-transparent shadow-none rounded-full hover:bg-foreground/5 duration-200"
                    >
                        {/* Icon Menu */}
                        <AiOutlineMenu className='text-2xl' />
                    </Button>
                </SheetTrigger>

                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Edit profile</SheetTitle>
                        <SheetDescription>
                            Make changes to your profile here. Click save when you're done.
                        </SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input id="name" value="Pedro Duarte" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Username
                            </Label>
                            <Input id="username" value="@peduarte" className="col-span-3" />
                        </div>
                    </div>
                    <SheetFooter>
                        <SheetClose asChild>
                            <Button type="submit">Save changes</Button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>




        </>
    )
}

export default MenuBtn