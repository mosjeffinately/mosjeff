import { createIcon } from '@chakra-ui/react';

export const BoldPlusIconCircle = createIcon({
    displayName: 'BoldPlusIcon',
    path: [
        <path
            d="M20 0V40"
            fill="none"
            stroke="currentColor"
            strokeWidth="10"
        />,
        <path
            d="M40 20L0 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="10"
        />
    ],
    viewBox: '0 0 40 40'
});
