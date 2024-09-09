'use client';
import { Link } from '@chakra-ui/next-js';
import {
    ButtonGroup,
    HStack,
    Icon,
    IconButton,
    Image,
    useDisclosure
} from '@chakra-ui/react';
import { PiGithubLogoDuotone, PiHamburgerDuotone } from 'react-icons/pi';
import { NavigationDrawer } from './navigation-drawer';

export function Header() {
    const menuDisclosure = useDisclosure();

    const onGitClickHandler = () => {
        window.open(new URL('https://github.com/mosjeffinately'), '_blank');
    };

    const onHamburgerClickHandler = () => {
        menuDisclosure.onToggle();
    };

    return (
        <HStack
            align="center"
            bgColor="brown.500"
            direction="row"
            spacing={8}
            h="full"
            px={8}
            py={2}
            w="full"
        >
            <Link href="/">
                <Image
                    alt="dope! logo"
                    h="4.5rem"
                    objectFit="cover"
                    src="/assets/images/dope-logo-olive.png"
                />
            </Link>
            <ButtonGroup ml="auto" spacing={4}>
                <IconButton
                    aria-label="mosjeffinately github"
                    as="a"
                    color="olive.500"
                    cursor="pointer"
                    icon={<Icon as={PiGithubLogoDuotone} />}
                    onClick={onGitClickHandler}
                    size="iconXl"
                    variant="ghost"
                    _active={{ color: 'olive.700' }}
                    _hover={{ color: 'olive.600' }}
                />
                <IconButton
                    aria-label="hamburger menu"
                    color="olive.500"
                    icon={<Icon as={PiHamburgerDuotone} />}
                    onClick={onHamburgerClickHandler}
                    size="iconXl"
                    variant="ghost"
                    _active={{ color: 'olive.700' }}
                    _hover={{ color: 'olive.600' }}
                />
            </ButtonGroup>
            <NavigationDrawer
                isOpen={menuDisclosure.isOpen}
                onClose={menuDisclosure.onClose}
            />
            {/* <MobileNavigation
                isOpen={mobileDisclosure.isOpen}
                onClose={mobileDisclosure.onClose}
            /> */}
        </HStack>
    );
}
