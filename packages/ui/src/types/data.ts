import type { IconType } from 'react-icons';

export type ExperienceData = {
    company: string;
    id: string;
    location: string;
    things: string[];
    timeline: string;
    title: string;
};

export type MenuItemData = {
    icon: IconType;
    onClick: () => void;
    title: string;
};

export type ProgressData = {
    score: number;
    scale: number;
};

export type UserData = {
    avatar: string;
    email: string;
    headline: string;
    location: string;
    name: string;
    profile: {
        abstract: React.ReactNode;
        article: React.ReactNode;
    };
    socials?: {
        ariaLabel: string;
        icon: React.ReactElement;
        url: string;
    }[];
};
