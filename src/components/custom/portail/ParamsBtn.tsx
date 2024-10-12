import React, { useMemo, useState } from 'react'
import { AiOutlineShopping } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import {
    DropdownMenu,
    DropdownMenuContent,
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

const ParamsBtn: React.FC = () => {
    const deviceWidth = useDeviceWidth();
    const dropdownWidth = useMemo(() => deviceWidth / 3.3, [deviceWidth]);
    const [selectedValue, setSelectedValue] = useState<Value>('header1');
    const [selectedHome, setSelectedHome] = useState<ValueHome>('home1');
    const { selected1, selected2, selected3 } = useSetNavbar();
    const navigate = useNavigate();

    return (
        <div className='hidden lg:block absolute top-40 right-5'>
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
                    className='p-0 mt-2 mr-5 rounded-2xl shadow-custom'
                >
                    <div className="p-4">

                        <DropdownMenuLabel className='text-xl py-2'>
                            Customize
                        </DropdownMenuLabel>

                        <DropdownMenuSeparator className='bg-gray-200' />

                        <div className="py-2 flex flex-col gap-1">
                            {/* HEADER MANAGEMENT */}
                            <DropdownMenuItem
                                onSelect={(e) => e.preventDefault()}
                                className=" py-2 focus:bg-card focus:text-card-foreground flex flex-col gap-2 items-start"
                            >
                                <h4 className="text-sm font-medium">
                                    Header Styles
                                </h4>

                                <ToggleGroup
                                    type="single"
                                    value={selectedValue} onValueChange={(value: Value) => setSelectedValue(value)}
                                >
                                    <ToggleGroupItem
                                        className="p-0 hover:bg-transparent"
                                        value="header1"
                                        aria-label="Toggle header1"
                                    >
                                        <Button
                                            variant={'outline'}
                                            className={`h-auto py-[6px] hover:bg-transparent hover:border-foreground transition-all duration-300 rounded-full text-xs font-base ${selectedValue === 'header1' ? 'bg-black/90 text-white hover:bg-black/85 hover:text-white' : ''} `}
                                            onClick={selected1}
                                        >
                                            Header 1
                                        </Button>
                                    </ToggleGroupItem>

                                    <ToggleGroupItem className="p-0 hover:bg-transparent" value="header2" aria-label="Toggle header2">
                                        <Button
                                            variant={'outline'}
                                            className={`h-auto py-[6px] hover:bg-transparent hover:border-foreground transition-all duration-300 rounded-full text-xs font-base ${selectedValue === 'header2' ? 'bg-black text-white hover:bg-black hover:text-white' : ''} `}
                                            onClick={selected2}
                                        >
                                            Header 2
                                        </Button>
                                    </ToggleGroupItem>

                                    <ToggleGroupItem className="p-0 hover:bg-transparent" value="header3" aria-label="Toggle header3">
                                        <Button
                                            variant={'outline'}
                                            className={`h-auto py-[6px] hover:bg-transparent hover:border-foreground transition-all duration-300 rounded-full text-xs font-base ${selectedValue === 'header3' ? 'bg-black text-white hover:bg-black hover:text-white' : ''} `}
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
                                className=" py-2 focus:bg-card focus:text-card-foreground flex flex-col gap-2 items-start"
                            >
                                <h4 className="text-sm font-medium">
                                    Home Demos
                                </h4>

                                <ToggleGroup
                                    type="single"
                                    value={selectedHome} onValueChange={(value: ValueHome) => setSelectedHome(value)}
                                >
                                    <ToggleGroupItem
                                        className="p-0 hover:bg-transparent"
                                        value="home1"
                                        aria-label="Toggle home1"
                                    >
                                        <Button
                                            variant={'outline'}
                                            className={`h-auto py-[6px] hover:bg-transparent hover:border-foreground transition-all duration-300 rounded-full text-xs font-base ${selectedHome === 'home1' ? 'bg-black/90 text-white hover:bg-black/85 hover:text-white' : ''} `}
                                            onClick={() => navigate("/")}
                                        >
                                            Home Main
                                        </Button>
                                    </ToggleGroupItem>

                                    <ToggleGroupItem className="p-0 hover:bg-transparent" value="home2" aria-label="Toggle home2">
                                        <Button
                                            variant={'outline'}
                                            className={`h-auto py-[6px] hover:bg-transparent hover:border-foreground transition-all duration-300 rounded-full text-xs font-base ${selectedHome === 'home2' ? 'bg-black text-white hover:bg-black hover:text-white' : ''} `}
                                            onClick={() => navigate("/home-2")}
                                        >
                                            Real Estate
                                        </Button>
                                    </ToggleGroupItem>

                                    <ToggleGroupItem className="p-0 hover:bg-transparent" value="home3" aria-label="Toggle home3">
                                        <Button
                                            variant={'outline'}
                                            className={`h-auto py-[6px] hover:bg-transparent hover:border-foreground transition-all duration-300 rounded-full text-xs font-base ${selectedHome === 'home3' ? 'bg-black text-white hover:bg-black hover:text-white' : ''} `}
                                            onClick={() => navigate("/home-3")}
                                        >
                                            Home 3
                                        </Button>
                                    </ToggleGroupItem>
                                </ToggleGroup>
                            </DropdownMenuItem>
                        </div>
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
        </div>
    )
}

export default ParamsBtn