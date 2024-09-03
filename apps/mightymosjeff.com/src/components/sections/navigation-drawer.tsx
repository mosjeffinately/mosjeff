import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    Icon,
    Stack
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { FaBriefcase, FaHouseChimney, FaSprayCan, FaUserAstronaut, FaUserSecret } from 'react-icons/fa6';
import { PiXBold } from 'react-icons/pi';

type NavigationDrawerProps = { isOpen: boolean; onClose: () => void };

export function NavigationDrawer({
    isOpen,
    onClose
}: NavigationDrawerProps): React.ReactElement {
    const router = useRouter();

    const onAboutClickHandler = () => router.push('/about');
    const onExperienceClickHandler = () => router.push('/experience');
    const onHomeClickHandler = () => router.push('/');
    const onPortfolioClickHandler = () => router.push('/portfolio');
    const onSkillzClickHandler = () => router.push('/skillz');

    return (
        <Drawer isOpen={isOpen} onClose={onClose} placement="right">
            <DrawerOverlay />
            <DrawerContent bgGradient={`linear(to-b, khaki.500, cream.500)`}>
                <DrawerCloseButton color="khaki.700" variant="ghost">
                    <Icon as={PiXBold} fontSize="xl" />
                </DrawerCloseButton>
                <DrawerBody py={10}>
                    <Stack
                        align="flex-start"
                        justify="flex-start"
                        spacing={4}
                        w="full"
                    >
                        <Button
                            color="khaki.700"
                            justifyContent="flex-start"
                            leftIcon={
                                <Icon as={FaHouseChimney} fontSize="xl" />
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
                        <Button
                            color="khaki.700"
                            justifyContent="flex-start"
                            leftIcon={
                                <Icon as={FaUserAstronaut} fontSize="xl" />
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
                        <Button
                            color="khaki.700"
                            justifyContent="flex-start"
                            leftIcon={<Icon as={FaSprayCan} fontSize="xl" />}
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
                        <Button
                            color="khaki.700"
                            justifyContent="flex-start"
                            leftIcon={<Icon as={FaUserSecret} fontSize="xl" />}
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
                        <Button
                            color="khaki.700"
                            justifyContent="flex-start"
                            leftIcon={<Icon as={FaBriefcase} fontSize="xl" />}
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
                    </Stack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
}
