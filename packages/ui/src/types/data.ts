import type { IconType } from 'react-icons';

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
    description: string;
    email: string;
    location: string;
    name: string;
};
