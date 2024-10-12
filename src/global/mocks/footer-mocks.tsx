import { FiTwitter } from "react-icons/fi"; 
import { AiOutlineInstagram } from "react-icons/ai";
import { SlSocialYoutube } from "react-icons/sl";
import { AiOutlineFacebook } from "react-icons/ai";
import { IFootersLinks, ISocialLink } from "../interface/interface";

// Social Links for footer 
export const SocialLink: ISocialLink[] = [
    {
        id: 1,
        icon: <AiOutlineFacebook />,
        url: '/',
        name: 'facebook'
    },

    {
        id: 2,
        icon: <FiTwitter />,
        url: '/',
        name: 'twitter'
    },

    {
        id: 3,
        icon: <SlSocialYoutube />,
        url: '/',
        name: 'Youtube'
    },

    {
        id: 4,
        icon: <AiOutlineInstagram />,
        url: '/',
        name: 'instagram'
    },
]

// Links of footer 
export const FootersLinks: IFootersLinks[] = [
    {
        id: 1,
        title: 'Getting started',
        links: [
            {
                url: '/',
                name: 'Installation',
            },
            {
                url: '/',
                name: 'Release Notes',
            },
            {
                url: '/',
                name: 'Upgrade Guide',
            },
            {
                url: '/',
                name: 'Browser Support',
            },
            {
                url: '/',
                name: 'Editor Support'
            }
        ]
    },

    {
        id: 2,
        title: 'Explore',
        links: [
            {
                url: '/',
                name: 'Design features',
            },
            {
                url: '/',
                name: 'Prototyping',
            },
            {
                url: '/',
                name: 'Design systems',
            },
            {
                url: '/',
                name: 'pricing',
            },
            {
                url: '/',
                name: 'security'
            }
        ]
    },

    {
        id: 3,
        title: 'Ressources',
        links: [
            {
                url: '/',
                name: 'best practices',
            },
            {
                url: '/',
                name: 'support',
            },
            {
                url: '/',
                name: 'developers',
            },
            {
                url: '/',
                name: 'learn design',
            },
            {
                url: '/',
                name: 'releases'
            }
        ]
    },

    {
        id: 4,
        title: 'community',
        links: [
            {
                url: '/',
                name: 'discussions forums',
            },
            {
                url: '/',
                name: 'code of conduct',
            },
            {
                url: '/',
                name: 'community ressources',
            },
            {
                url: '/',
                name: 'contributing',
            },
            {
                url: '/',
                name: 'concurrent mode'
            }
        ]
    }
]