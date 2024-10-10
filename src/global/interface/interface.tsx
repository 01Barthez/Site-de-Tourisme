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

