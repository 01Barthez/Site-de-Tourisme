import { AiOutlinePoundCircle } from "react-icons/ai"; 
import { AiOutlineDollarCircle } from "react-icons/ai"; 
import { AiOutlineEuroCircle } from "react-icons/ai";
import { ITabCurrency } from "../interface/interface";

export const TabCurrency: ITabCurrency[] = [
    {
        icon: <AiOutlineEuroCircle />,
        abbrev: "EUR"
    },

    {
        icon: <AiOutlineDollarCircle />,
        abbrev: "USD"
    },
    
    {
        icon: <AiOutlineEuroCircle />,
        abbrev: "GBF"
    },
    
    {
        icon: <AiOutlinePoundCircle />,
        abbrev: "SAR"
    },
    
    {
        icon: <AiOutlineEuroCircle />,
        abbrev: "QAR"
    },
]
