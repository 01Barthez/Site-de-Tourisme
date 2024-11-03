export type Value = 'header1' | 'header2' | 'header3'
export type ValueHome = 'home1' | 'home2' | 'home3'

export interface ISocialLink {
    id: number,
    url: string,
    name: string,
    icon: React.ReactElement,
}

export interface IFootersLinks {
    id?: number,
    title: string,
    links: { // For differents links
        url: string;
        name: string;
    }[],
}

// For place to discorver
export interface IPlaceDiscorvery {
    id: number;
    url: string; //To indicate where we will be redirect after click on image box
    image: string; // For image links
    name: string;
    properties_number: number;
}

export interface IHouseDiscorvery {
    id: number;
    url: string; //To indicate where we will be redirect after click on image box
    image: string; // For image links
    name: string;
    properties_number: number;
}

export interface ICardSuggestionDiscorvery {
    url: string;
    image: string;
    name: string;
    properties_number: number;
}

export interface ICardBenefits {
    badge: {
        content: string;
        variant?: 'blue' | 'green' | 'red';
    }
    name: string;
    content: string;
}

export interface ICardAdvantages {
    badge: {
        content: string;
        variant?: 'blue' | 'green' | 'red' | 'transparent';
    }
    content: string;
}

export interface ICardExploreNearby {
    url: string;
    image: string;
    name: string;
    delay: number;
    visit: number;
}

export interface IGridContentBox {
    TableToMap: ICardExploreNearby[];
}

export interface INotifications {
    id: number;
    url: string;
    name: string;
    profile: string;
    message: string;
    time: Date;
}

export interface ITruncateText {
    text: string,
    wordLimit?: number
}

export interface IAuthor {
    id: string
    variant?: 'blue' | 'green' | 'red' | 'transparent' ;
    url: string;
    image: string;
    name: string;
    country: string;
}
export interface IGridAuthorBox {
    TableToMap: IAuthor[];
}

export interface ILanguages {
    lang: string;
    region: string;
}

export interface ITabCurrency {
    icon: JSX.Element;
    abbrev: string;
}

export interface ISwipperCarousel {
    content: IHouseDiscorvery[]; // L'objet doit avoir une clé `content` avec un tableau
}

export interface ICardHowItWork {
    image: string;
    title: string;
    description: string;
}

export interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
    fetchData: (url: string) => Promise<void>;
}

export interface ISEOProps {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    url?: string;
    author?: string;
    type?: string;
}