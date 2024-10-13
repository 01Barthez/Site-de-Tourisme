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
        variant?: 'blue' | 'green' | 'red';
    }
    content: string;
}
