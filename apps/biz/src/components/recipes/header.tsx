'use client';

import { MoonIcon, SunIcon } from '@/components/atoms';
import { Link } from '@chakra-ui/next-js';
import {
    Button,
    ButtonGroup,
    Flex,
    Icon,
    IconButton,
    Image,
    Show,
    Stack,
    Text,
    useBreakpointValue,
    useColorMode,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';

export const Header = () => {
    const buttonVariant = useBreakpointValue(
        {
            base: 'unstyled',
            md: 'ghost',
        },
        { fallback: 'md' }
    );
    const { colorMode, toggleColorMode } = useColorMode();

    const bgColor = useColorModeValue('yellow.50', 'blue.700');
    const color = useColorModeValue('gray.800', 'whiteAlpha.800');
    const mobileNav = useDisclosure();

    const logo =
        colorMode === 'dark'
            ? '/assets/images/icons/smashicons_website_elements_logo-63-icon-cartoony.svg'
            : '/assets/images/icons/smashicons_website_elements_logo-63-icon-yellow.svg';

    return (
        <Flex
            align="center"
            bgColor={bgColor}
            boxShadow="md"
            color={color}
            direction="row"
            gap={4}
            justify="flex-start"
            pb={{ base: 4, md: 8 }}
            pt={4}
            px={{ base: 2, sm: 4 }}
        >
            <Flex
                align="center"
                as={Link}
                color={color}
                direction="row"
                href="/"
                gap={3}
                _hover={{ textDecoration: 'none' }}
            >
                {/* {logo} */}
                <Image alt="Logo" height={12} src={logo} width={12} />
                <Stack align="center" fontFamily="flapjack" spacing={0}>
                    <Text
                        color={color}
                        fontSize={{ base: 'xl', md: '2xl' }}
                        fontWeight="black"
                        lineHeight="shorter"
                    >{`Smith & Jones`}</Text>
                    <Text color={color} fontSize={{ base: 'lg', md: 'xl' }} fontWeight="black" lineHeight="shorter">
                        Industries
                    </Text>
                </Stack>
            </Flex>
            <Flex align="center" justify="center" ml="auto">
                <Show above="md">
                    <ButtonGroup spacing={{ md: 1 }}>
                        <Button variant="ghost">Services</Button>
                        <Button variant="ghost">About Us</Button>
                        <Button variant="ghost">Portfolio</Button>
                        <IconButton
                            aria-label="Toggle Color Mode"
                            icon={
                                colorMode === 'light' ? (
                                    <Icon as={MoonIcon} fontSize="2rem" />
                                ) : (
                                    <Icon as={SunIcon} fontSize="2rem" />
                                )
                            }
                            onClick={toggleColorMode}
                            variant={buttonVariant}
                        />
                    </ButtonGroup>
                </Show>
                <Show below="md">
                    <ButtonGroup spacing={{ base: 2 }}>
                        <IconButton
                            aria-label="Toggle Color Mode"
                            icon={<Icon as={MoonIcon} fontSize="2rem" />}
                            variant={buttonVariant}
                        />
                    </ButtonGroup>
                </Show>
            </Flex>
        </Flex>
    );
};

// () => {
//     const bg = useColorModeValue('white', 'gray.800');
//     const mobileNav = useDisclosure();
//     return (
//         <React.Fragment>
//             <chakra.header
//                 bg={bg}
//                 w="full"
//                 px={{
//                     base: 2,
//                     sm: 4,
//                 }}
//                 py={4}
//                 shadow="md"
//             >
//                 <Flex
//                     alignItems="center"
//                     justifyContent="space-between"
//                     mx="auto"
//                 >
//                     <Flex>
//                         <chakra.a
//                             href="/"
//                             title="Choc Home Page"
//                             display="flex"
//                             alignItems="center"
//                         >
//                             <Logo />
//                             <VisuallyHidden>Choc</VisuallyHidden>
//                         </chakra.a>
//                         <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
//                             Choc
//                         </chakra.h1>
//                     </Flex>
//                     <HStack display="flex" alignItems="center" spacing={1}>
//                         <HStack
//                             spacing={1}
//                             mr={1}
//                             color="brand.500"
//                             display={{
//                                 base: 'none',
//                                 md: 'inline-flex',
//                             }}
//                         >
//                             <Button variant="ghost">Features</Button>
//                             <Button variant="ghost">Pricing</Button>
//                             <Button variant="ghost">Blog</Button>
//                             <Button variant="ghost">Company</Button>
//                             <Button variant="ghost">Sign in</Button>
//                         </HStack>
//                         <Button colorScheme="brand" size="sm">
//                             Get Started
//                         </Button>
//                         <Box
//                             display={{
//                                 base: 'inline-flex',
//                                 md: 'none',
//                             }}
//                         >
//                             <IconButton
//                                 display={{
//                                     base: 'flex',
//                                     md: 'none',
//                                 }}
//                                 aria-label="Open menu"
//                                 fontSize="20px"
//                                 color="gray.800"
//                                 _dark={{
//                                     color: 'inherit',
//                                 }}
//                                 variant="ghost"
//                                 icon={<AiOutlineMenu />}
//                                 onClick={mobileNav.onOpen}
//                             />

//                             <VStack
//                                 pos="absolute"
//                                 top={0}
//                                 left={0}
//                                 right={0}
//                                 display={mobileNav.isOpen ? 'flex' : 'none'}
//                                 flexDirection="column"
//                                 p={2}
//                                 pb={4}
//                                 m={2}
//                                 bg={bg}
//                                 spacing={3}
//                                 rounded="sm"
//                                 shadow="sm"
//                             >
//                                 <CloseButton
//                                     aria-label="Close menu"
//                                     onClick={mobileNav.onClose}
//                                 />

//                                 <Button w="full" variant="ghost">
//                                     Features
//                                 </Button>
//                                 <Button w="full" variant="ghost">
//                                     Pricing
//                                 </Button>
//                                 <Button w="full" variant="ghost">
//                                     Blog
//                                 </Button>
//                                 <Button w="full" variant="ghost">
//                                     Company
//                                 </Button>
//                                 <Button w="full" variant="ghost">
//                                     Sign in
//                                 </Button>
//                             </VStack>
//                         </Box>
//                     </HStack>
//                 </Flex>
//             </chakra.header>
//         </React.Fragment>
//     );
// };
