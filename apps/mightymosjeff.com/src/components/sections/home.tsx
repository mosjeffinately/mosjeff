'use client';
import {
    chakra,
    Heading,
    HStack,
    Icon,
    Image,
    ScaleFade,
    Stack,
    useDisclosure
} from '@chakra-ui/react';
import { useAnimation } from '@codechem/chakra-ui-animations';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { PiHandPointingDuotone } from 'react-icons/pi';
import Typist from 'react-typist-component';

const headlines = [
    `a pub trivia enthusiast.`,
    `the world's okayest dad.`,
    `a hip hop encyclopedia.`,
    `a bit of a hipster.`,
    `a funny dude.`,
    `a maker of things.`
];

const avatarVariants: Variants = {
    animate: { x: 0 },
    exit: { x: '100vw' },
    initial: { x: '-100vw' }
};

export function Home() {
    const animation = useAnimation('flash', {
        duration: 2000,
        iterationCount: 'infinite'
    });

    const aboutDisclosure = useDisclosure();
    const alsoDisclosure = useDisclosure();
    const arrowDisclosure = useDisclosure();
    const avatarDisclosure = useDisclosure();

    return (
        <Stack align="center" justify="flex-start" py={8} w="full">
            <Typist onTypingDone={() => avatarDisclosure.onOpen()}>
                <Heading
                    as="h4"
                    color="olive.500"
                    fontFamily="monospace"
                    fontSize="4xl"
                >
                    {`Yo!  I'm Jeff.`}
                </Heading>
            </Typist>
            <ScaleFade
                in={arrowDisclosure.isOpen}
                initialScale={0.8}
                transition={{ enter: { duration: 0.7 } }}
            >
                <HStack align="center" justify="center" pb={2} spacing={5}>
                    {[0, 1, 2].map((i) => (
                        <Icon
                            as={PiHandPointingDuotone}
                            color="gray.500"
                            fontSize="5xl"
                            key={`top-${i}`}
                            transform="rotate(-0.5turn)"
                        />
                    ))}
                </HStack>
            </ScaleFade>
            <Stack align="center" h={56} justify="center">
                <HStack align="center" justify="center" spacing={4}>
                    <ScaleFade
                        in={arrowDisclosure.isOpen}
                        initialScale={0.8}
                        transition={{ enter: { duration: 0.7 } }}
                    >
                        <Stack
                            align="center"
                            justify="center"
                            pr={2}
                            spacing={5}
                        >
                            {[0, 1, 2].map((i) => (
                                <Icon
                                    as={PiHandPointingDuotone}
                                    color="gray.500"
                                    fontSize="5xl"
                                    key={`left-${i}`}
                                    transform="rotate(0.25turn)"
                                />
                            ))}
                        </Stack>
                    </ScaleFade>
                    <AnimatePresence mode="wait">
                        {avatarDisclosure.isOpen ? (
                            <motion.div
                                animate="animate"
                                exit="exit"
                                initial="initial"
                                variants={avatarVariants}
                            >
                                <Image
                                    alt="8-bit MosJeffinately"
                                    h={56}
                                    src="/assets/images/mosjeffinately_transparent.png"
                                />
                            </motion.div>
                        ) : null}
                    </AnimatePresence>
                    <ScaleFade
                        in={arrowDisclosure.isOpen}
                        initialScale={0.8}
                        transition={{ enter: { duration: 0.7 } }}
                    >
                        <Stack
                            align="center"
                            justify="center"
                            pl={2}
                            spacing={5}
                        >
                            {[0, 1, 2].map((i) => (
                                <Icon
                                    as={PiHandPointingDuotone}
                                    color="gray.500"
                                    fontSize="5xl"
                                    key={`right-${i}`}
                                    transform="rotate(-0.25turn)"
                                />
                            ))}
                        </Stack>
                    </ScaleFade>
                </HStack>
            </Stack>
            <ScaleFade
                in={arrowDisclosure.isOpen}
                initialScale={0.8}
                transition={{ enter: { duration: 0.7 } }}
            >
                <HStack align="center" justify="center" pb={2} spacing={5}>
                    {[0, 1, 2].map((i) => (
                        <Icon
                            as={PiHandPointingDuotone}
                            color="gray.500"
                            fontSize="5xl"
                            key={`bottom-${i}`}
                        />
                    ))}
                </HStack>
            </ScaleFade>
            {avatarDisclosure.isOpen ? (
                <Typist
                    onTypingDone={() => {
                        aboutDisclosure.onOpen();
                        arrowDisclosure.onOpen();
                    }}
                >
                    <Heading
                        as="h4"
                        color="brown.500"
                        fontFamily="monospace"
                        fontSize="4xl"
                    >
                        {`That's me.`}
                    </Heading>
                </Typist>
            ) : null}
            {aboutDisclosure.isOpen ? (
                <Typist
                    startDelay={1000}
                    onTypingDone={() => alsoDisclosure.onOpen()}
                >
                    <Heading
                        as="h5"
                        color="olive.500"
                        fontFamily="monospace"
                        maxW="40rem"
                        size="lg"
                        textAlign="center"
                    >
                        {`I am a frontend software engineer living in Upstate New York.`}
                    </Heading>
                </Typist>
            ) : null}
            {alsoDisclosure.isOpen ? (
                <Heading
                    as="h6"
                    color="olive.500"
                    fontFamily="monospace"
                    maxW="40rem"
                    size="md"
                    textAlign="center"
                >
                    <Typist startDelay={300} typingDelay={50}>
                        {`I am also `}
                        {headlines.slice(0, -1).map((headline) => (
                            <>
                                <chakra.span
                                    color="khaki.500"
                                    textDecoration="underline"
                                >
                                    {headline}
                                </chakra.span>
                                <Typist.Delay ms={300} />
                                <Typist.Backspace count={headline.length} />
                                <Typist.Delay ms={100} />
                            </>
                        ))}
                        <chakra.span
                            color="blue.500"
                            textDecoration="underline"
                        >
                            {headlines.slice(-1)}
                        </chakra.span>
                        <chakra.span animation={animation} color="blue.500">
                            |
                        </chakra.span>
                    </Typist>
                </Heading>
            ) : null}
        </Stack>
    );
}
