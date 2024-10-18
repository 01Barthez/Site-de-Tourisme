import React, { useMemo, useState } from 'react'
import { AiOutlineShopping } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '../../ui/dropdown-menu'
import { Button } from '../../ui/button'
import useDeviceWidth from '../../../hooks/useGetDeviceWith';
import { Link } from "react-router-dom";
import { ToggleGroup, ToggleGroupItem } from "../../ui/toggle-group";
import { useSetNavbar } from "../../../hooks/useSetNavbar";
import { useNavigate } from "react-router-dom";
import { Value, ValueHome } from "../../../global/interface/interface";
import { createPortal } from 'react-dom';

/**
 * Functional component for a Parameters Button in a React application.
 * This component renders a button with dropdown menu content for selecting values.
 * @returns JSX element for the Parameters Button component.
 */
const ParamsBtn: React.FC = () => {
    const deviceWidth = useDeviceWidth();
    const dropdownWidth = useMemo(() => deviceWidth / 3.3, [deviceWidth]);
    const [selectedValue, setSelectedValue] = useState<Value>('header1');
    const [selectedHome, setSelectedHome] = useState<ValueHome>('home1');
    const { selected1, selected2, selected3 } = useSetNavbar();
    const navigate = useNavigate();

    return createPortal(
        <div className='hidden lg:block fixed z-50 top-40 right-5'>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button
                        variant={'outline'}
                        className='w-auto h-auto p-[.9rem] text-[1.62rem] rounded-xl shadow-lg bg-background dark:bg-primary'
                    >
                        <FiSettings />
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                    style={{ width: `${dropdownWidth}px` }}
                    className='p-0 mt-2 mr-5 rounded-2xl shadow dark:shadow-foreground/20'
                >
                    <div className="p-4">

                        <DropdownMenuLabel className='text-xl py-2'>
                            Customize
                        </DropdownMenuLabel>

                        <DropdownMenuSeparator className='bg-foreground/10' />

                        <DropdownMenuGroup className="py-2 flex flex-col gap-1">
                            {/* HEADER MANAGEMENT */}
                            <DropdownMenuItem
                                onSelect={(e) => e.preventDefault()}
                                className=" py-2 focus:bg-card focus:text-card-foreground hover:bg-transparent dark:hover:bg-transparent flex flex-col gap-2 items-start"
                            >
                                <h4 className="text-sm font-medium">
                                    Header Styles
                                </h4>

                                <ToggleGroup
                                    type="single"
                                    value={selectedValue} onValueChange={(value: Value) => setSelectedValue(value)}
                                >
                                    <ToggleGroupItem
                                        className="p-0 hover:bg-transparent rounded-full h-auto"
                                        value="header1"
                                        aria-label="Toggle header1"
                                    >
                                        <Button
                                            variant={'outline'}
                                            className={`h-auto py-1.5 hover:bg-transparent border-foreground/25 hover:border-foreground/60 text-foreground/75 hover:text-foreground transition-all duration-300 rounded-full text-xs font-base ${selectedValue === 'header1' && 'shadow bg-foreground/90 text-background hover:bg-foreground/85 hover:text-background'}`}
                                            onClick={selected1}
                                        >
                                            Header 1
                                        </Button>
                                    </ToggleGroupItem>

                                    <ToggleGroupItem
                                        className="p-0 hover:bg-transparent rounded-full h-auto"
                                        value="header2"
                                        aria-label="Toggle header2"
                                    >
                                        <Button
                                            variant={'outline'}
                                            className={`h-auto py-1.5 hover:bg-transparent border-foreground/25 hover:border-foreground/60 text-foreground/75 hover:text-foreground transition-all duration-300 rounded-full text-xs font-base ${selectedValue === 'header2' && 'shadow bg-foreground text-background hover:bg-foreground hover:text-background'} `}
                                            onClick={selected2}
                                        >
                                            Header 2
                                        </Button>
                                    </ToggleGroupItem>

                                    <ToggleGroupItem
                                        className="p-0 hover:bg-transparent rounded-full h-auto"
                                        value="header3"
                                        aria-label="Toggle header3"
                                    >
                                        <Button
                                            variant={'outline'}
                                            className={`h-auto py-1.5 hover:bg-transparent border-foreground/25 hover:border-foreground/60 text-foreground/75 hover:text-foreground transition-all duration-300 rounded-full text-xs font-base ${selectedValue === 'header3' && 'shadow bg-foreground text-background hover:bg-foreground hover:text-background'} `}
                                            onClick={selected3}
                                        >
                                            Header 3
                                        </Button>
                                    </ToggleGroupItem>
                                </ToggleGroup>
                            </DropdownMenuItem>

                            {/* HOME MANAGEMENT */}
                            <DropdownMenuItem
                                onSelect={(e) => e.preventDefault()}
                                className=" py-2 focus:bg-card focus:text-card-foreground hover:bg-transparent dark:hover:bg-transparent flex flex-col gap-2 items-start"
                            >
                                <h4 className="text-sm font-medium">
                                    Home Demos
                                </h4>

                                <ToggleGroup
                                    type="single"
                                    value={selectedHome} onValueChange={(value: ValueHome) => setSelectedHome(value)}
                                >
                                    <ToggleGroupItem
                                        className="p-0 hover:bg-transparent rounded-full h-auto"
                                        value="home1"
                                        aria-label="Toggle home1"
                                    >
                                        <Button
                                            variant={'outline'}
                                            className={`h-auto py-1.5 hover:bg-transparent border-foreground/25 hover:border-foreground/60 text-foreground/75 hover:text-foreground transition-all duration-300 rounded-full text-xs font-base ${selectedHome === 'home1' && 'shadow bg-foreground/90 text-background hover:bg-foreground/85 hover:text-background'} `}
                                            onClick={() => navigate("/")}
                                        >
                                            Home Main
                                        </Button>
                                    </ToggleGroupItem>

                                    <ToggleGroupItem
                                        className="p-0 hover:bg-transparent rounded-full h-auto"
                                        value="home2"
                                        aria-label="Toggle home2"
                                    >
                                        <Button
                                            variant={'outline'}
                                            className={`h-auto py-1.5 hover:bg-transparent border-foreground/25 hover:border-foreground/60 text-foreground/75 hover:text-foreground transition-all duration-300 rounded-full text-xs font-base ${selectedHome === 'home2' && 'shadow bg-foreground text-background hover:bg-foreground hover:text-background'} `}
                                            onClick={() => navigate("/home-2")}
                                        >
                                            Real Estate
                                        </Button>
                                    </ToggleGroupItem>

                                    <ToggleGroupItem
                                        className="p-0 hover:bg-transparent rounded-full h-auto"
                                        value="home3"
                                        aria-label="Toggle home3"
                                    >
                                        <Button
                                            variant={'outline'}
                                            className={`h-auto py-1.5 hover:bg-transparent border-foreground/25 hover:border-foreground/60 text-foreground/75 hover:text-foreground transition-all duration-300 rounded-full text-xs font-base ${selectedHome === 'home3' && 'shadow bg-foreground text-background hover:bg-foreground hover:text-background'} `}
                                            onClick={() => navigate("/home-3")}
                                        >
                                            Home 3
                                        </Button>
                                    </ToggleGroupItem>
                                </ToggleGroup>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </div>

                    <div className="py-4 bg-primary/5">
                        <Link
                            to={'https://themeforest.net/item/chisfis-online-booking-nextjs-template/43399526'}
                            target='_blank'
                        >
                            <Button
                                className='flex items-center gap-2 w-[85%] mx-auto rounded-xl'
                            >
                                <AiOutlineShopping className="text-base" />
                                <span>Buy this template</span>
                            </Button>
                        </Link>
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>,

        document.body
    )
}

export default ParamsBtn