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
    links: {
        url: string;
        name: string;
    }[],
}

