import {
    Box,
    Center,
    Fade,
    Flex,
    Heading,
    HStack,
    Icon,
    Image,
    Stack,
    Text,
    useDisclosure
} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    PiArrowFatUpDuotone
} from 'react-icons/pi';
import Typist from 'react-text-typist';

export function MosJeff(): React.ReactElement {
    const arrowDisclosure = useDisclosure();
    const avatarDisclosure = useDisclosure();
    const titleDisclosure = useDisclosure();

    const onArrowFinishHandler = () => {
        arrowDisclosure.onOpen();
        titleDisclosure.onOpen();
    };

    const onNameFinishHandler = () => {
        avatarDisclosure.onOpen();
    };

    return (
        <Center w="full">
            <Stack
                align="center"
                fontFamily="monospace"
                justify="center"
                w="full"
            >
                <Heading
                    as={Typist}
                    color="olive.500"
                    fontFamily="inherit"
                    fontSize="4xl"
                    loop={false}
                    onTypeFinish={onNameFinishHandler}
                    sentences={[`Yo! I'm Jeff. `]}
                    showCursor={false}
                />
                <Flex align="center" h="12rem" justify="center">
                    {avatarDisclosure.isOpen ? (
                        <AnimatePresence mode="wait">
                            <motion.div
                                animate="animateState"
                                exit="exitState"
                                initial="initialState"
                                key="mosjeff"
                                transition={{
                                    bounce: 0.5,
                                    duration: 0.75,
                                    type: 'spring'
                                }}
                                variants={{
                                    animateState: {
                                        x: 0
                                    },
                                    exitState: {
                                        x: '100vw'
                                    },
                                    initialState: {
                                        x: '-100vw'
                                    }
                                }}
                            >
                                <Image
                                    alt="mosjeffinately"
                                    h="12rem"
                                    src="/assets/images/mosjeffinately_transparent.png"
                                />
                            </motion.div>
                        </AnimatePresence>
                    ) : null}
                </Flex>
                <Box h="2.25rem">
                    {arrowDisclosure.isOpen ? (
                        <AnimatePresence mode="wait">
                            <motion.div
                                animate="animateState"
                                exit="exitState"
                                initial="initialState"
                                key="mosjeff-right-arrow"
                                transition={{
                                    duration: 0.5,
                                    type: 'tween'
                                }}
                                variants={{
                                    animateState: {
                                        opacity: 1
                                    },
                                    exitState: {
                                        opacity: 0
                                    },
                                    initialState: {
                                        opacity: 0
                                    }
                                }}
                            >
                                <Icon as={PiArrowFatUpDuotone} fontSize="4xl" />
                            </motion.div>
                        </AnimatePresence>
                    ) : null}
                </Box>
                {avatarDisclosure.isOpen ? (
                    <HStack spacing={4}>
                        <Heading
                            as={Typist}
                            color="brown.500"
                            cursorColor="var(--chakra-colors-brown-500)"
                            fontFamily="inherit"
                            fontSize="3xl"
                            justifySelf="center"
                            loop={false}
                            onTypeFinish={onArrowFinishHandler}
                            sentences={[`That's me. `]}
                            showCursor={false}
                            startDelay={1000}
                        />
                    </HStack>
                ) : null}
                <Fade
                    in={titleDisclosure.isOpen}
                    transition={{ enter: { delay: 0.75 } }}
                >
                    <Stack py={5} spacing={4}>
                        <Heading
                            as="h4"
                            color="olive.500"
                            fontFamily="inherit"
                            maxW="40rem"
                            size="lg"
                            textAlign="center"
                        >
                            {`I'm a frontend software engineer.`}
                        </Heading>
                        <Text
                            color="indigo.500"
                            fontFamily="body"
                            maxW="40rem"
                            fontSize="md"
                            textAlign="center"
                        >
                            I am drawn to the aesthetics of old school hip hop
                            and vintage workwear. I love{' '}
                            <Text as="span" color="gray.500">
                                Dusty grays,
                            </Text>{' '}
                            <Text as="span" color="brown.500">
                                Carhartt brown,
                            </Text>{' '}
                            <Text as="span" color="blue.500">
                                French blue chore coats,
                            </Text>{' '}
                            raw denim and{' '}
                            <Text as="span" color="olive.500">
                                drab fatigues
                            </Text>
                            .
                        </Text>
                        <Text
                            color="indigo.500"
                            maxW="40rem"
                            fontFamily="body"
                            fontSize="md"
                            textAlign="center"
                        >
                            I was inspired to create the dope! design system by
                            my favorite hat - a five-panel number with a
                            chain-stitched 'dope!' in cursive across the front.
                            I aim to evoke a Fall Saturday in Upstate New York,
                            with the leaves changing color and the smell of
                            Football in the air.
                        </Text>
                    </Stack>
                </Fade>
            </Stack>
        </Center>
    );
}
