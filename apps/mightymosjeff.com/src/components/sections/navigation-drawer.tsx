import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    Flex,
    Icon,
    ListItem,
    UnorderedList
} from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
    FaBriefcase,
    FaHouseChimney,
    FaSprayCan,
    FaUserAstronaut,
    FaUserSecret
} from 'react-icons/fa6';
import { PiXBold } from 'react-icons/pi';

type NavigationDrawerProps = { isOpen: boolean; onClose: () => void };

const listVariants: Variants = {
    closed: {
        opacity: 0,
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    },
    open: {
        opacity: 1,
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.07
        }
    }
};

const listItemVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
};

export function NavigationDrawer({
    isOpen,
    onClose
}: NavigationDrawerProps): React.ReactElement {
    const router = useRouter();

    const routeHandler = (route: string) => {
        router.push(route);
        setTimeout(() => {
            onClose();
        }, 500);
    };

    const onAboutClickHandler = () => routeHandler('/about');
    const onExperienceClickHandler = () => routeHandler('/experience');
    const onHomeClickHandler = () => routeHandler('/');
    const onPortfolioClickHandler = () => routeHandler('/portfolio');
    const onSkillzClickHandler = () => routeHandler('/skillz');

    return (
        <Drawer isOpen={isOpen} onClose={onClose} placement="right">
            <DrawerOverlay />
            <DrawerContent bgGradient={`linear(to-b, khaki.500, cream.500)`}>
                <DrawerCloseButton color="khaki.700" variant="ghost">
                    <Icon as={PiXBold} fontSize="xl" />
                </DrawerCloseButton>
                <DrawerBody py={10}>
                    <Flex w="full">
                        <UnorderedList
                            animate={isOpen ? 'open' : 'closed'}
                            as={motion.ul}
                            initial="closed"
                            listStyleType="none"
                            variants={listVariants}
                        >
                            <ListItem
                                animate={isOpen ? 'open' : 'closed'}
                                as={motion.li}
                                initial="closed"
                                py={3}
                                variants={listItemVariants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    color="khaki.700"
                                    justifyContent="flex-start"
                                    leftIcon={
                                        <Icon
                                            as={FaHouseChimney}
                                            fontSize="xl"
                                        />
                                    }
                                    onClick={onHomeClickHandler}
                                    size="lg"
                                    variant="ghost"
                                    w="full"
                                    _hover={{
                                        bgGradient: `linear(to-br, khaki.500, cream.500)`,
                                        color: 'khaki.700'
                                    }}
                                >
                                    home.
                                </Button>
                            </ListItem>
                            <ListItem
                                animate="open"
                                as={motion.li}
                                initial="closed"
                                py={3}
                                variants={listItemVariants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    color="khaki.700"
                                    justifyContent="flex-start"
                                    leftIcon={
                                        <Icon
                                            as={FaUserAstronaut}
                                            fontSize="xl"
                                        />
                                    }
                                    onClick={onAboutClickHandler}
                                    size="lg"
                                    variant="ghost"
                                    w="full"
                                    _hover={{
                                        bgGradient: `linear(to-br, khaki.500, cream.500)`,
                                        color: 'khaki.700'
                                    }}
                                >
                                    about me.
                                </Button>
                            </ListItem>
                            <ListItem
                                animate="open"
                                as={motion.li}
                                initial="closed"
                                py={3}
                                variants={listItemVariants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    color="khaki.700"
                                    justifyContent="flex-start"
                                    leftIcon={
                                        <Icon as={FaSprayCan} fontSize="xl" />
                                    }
                                    onClick={onSkillzClickHandler}
                                    size="lg"
                                    variant="ghost"
                                    w="full"
                                    _hover={{
                                        bgGradient: `linear(to-br, khaki.500, cream.500)`,
                                        color: 'khaki.700'
                                    }}
                                >
                                    skillz.
                                </Button>
                            </ListItem>
                            <ListItem
                                animate="open"
                                as={motion.li}
                                initial="closed"
                                py={3}
                                variants={listItemVariants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    color="khaki.700"
                                    justifyContent="flex-start"
                                    leftIcon={
                                        <Icon as={FaUserSecret} fontSize="xl" />
                                    }
                                    onClick={onExperienceClickHandler}
                                    size="lg"
                                    variant="ghost"
                                    w="full"
                                    _hover={{
                                        bgGradient: `linear(to-r, khaki.500, cream.500)`,
                                        color: 'khaki.700'
                                    }}
                                >
                                    experience.
                                </Button>
                            </ListItem>
                            <ListItem
                                animate="open"
                                as={motion.li}
                                initial="closed"
                                py={3}
                                variants={listItemVariants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    color="khaki.700"
                                    justifyContent="flex-start"
                                    leftIcon={
                                        <Icon as={FaBriefcase} fontSize="xl" />
                                    }
                                    onClick={onPortfolioClickHandler}
                                    size="lg"
                                    variant="ghost"
                                    w="full"
                                    _hover={{
                                        bgGradient: `linear(to-r, khaki.500, cream.500)`,
                                        color: 'khaki.700'
                                    }}
                                >
                                    portfolio.
                                </Button>
                            </ListItem>
                        </UnorderedList>
                    </Flex>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
}
