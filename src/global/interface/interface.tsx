export interface ISocialLink {
    id: number,
    url: string,
    icon: React.ReactElement
}

export interface IFootersLinks {
    id?: number,
    title: string,
    links: {
        url: string;
        name: string;
    }[],
}

