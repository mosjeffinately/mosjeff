import { HStack, Image } from '@chakra-ui/react';

export type HeaderProps = {
    logoSrc: string;
    phone: string;
    title: string;
};

export const Header = () => {
    return (
        <HStack align="flex-start" px={4} spacing={4} w="full">
            <HStack spacing={2}>
                <Image
                    alt="American Plumbing Eagle"
                    src="/assets/images/companies/american-plumbing-eagle.png"
                />
                <Image
                    alt="American Plumbing"
                    src="/assets/images/companies/american-plumbing.png"
                />
            </HStack>
        </HStack>
    );
};
