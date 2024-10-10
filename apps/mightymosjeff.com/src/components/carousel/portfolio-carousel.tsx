'use client';

import { AspectRatio, Box, Card, CardBody, Flex, Icon, Image } from '@chakra-ui/react';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { PiArrowCircleLeftBold, PiArrowCircleRightBold } from 'react-icons/pi';

export type PortfolioCarouselProps = {
    images: {
        alt: string;
        src: string;
    }[];
};

export const PortfolioCarousel = ({ images }: PortfolioCarouselProps) => {
    const [index, setIndex] = useState<number>(0);

    const leftDisabled = useMemo(() => index === 0, [index]);
    const rightDisabled = useMemo(() => index === images.length - 1, [images, index]);
    console.log({ leftDisabled }, { rightDisabled });

    return (
        <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
            <Box h="full">
                <Flex direction="column" h="full" justify="center" maxW="3xl" mx="auto">
                    <Box overflow="hidden" position="relative">
                        <Flex as={motion.div} animate={{ x: `-${index * 100}%` }}>
                            {images.map(({ alt, src }) => (
                                <Card key={alt.split(' ').join('-')} m={0} p={0}>
                                    <CardBody m={0} p={0}>
                                        <Image alt={alt} h="full" src={src} w="full" />
                                    </CardBody>
                                </Card>
                            ))}
                        </Flex>
                        <AnimatePresence initial={false}>
                            {index > 0 ? (
                                <Flex
                                    align="center"
                                    animate={{ opacity: 0.7 }}
                                    as={motion.button}
                                    direction="column"
                                    exit={{ opacity: 0, pointerEvents: 'none' }}
                                    h="full"
                                    initial={{ opacity: 0 }}
                                    justify="center"
                                    mt={-4}
                                    left={6}
                                    top={0.5}
                                    onClick={() => setIndex(index - 1)}
                                    position="absolute"
                                    whileHover={{ opacity: 1 }}
                                >
                                    <Icon as={PiArrowCircleLeftBold} color="cream.100" fontSize="5xl" />
                                </Flex>
                            ) : null}
                        </AnimatePresence>
                        <AnimatePresence initial={false}>
                            {index < images.length - 1 ? (
                                <Flex
                                    align="center"
                                    animate={{ opacity: 0.7 }}
                                    as={motion.button}
                                    exit={{ opacity: 0, pointerEvents: 'none' }}
                                    h="full"
                                    initial={{ opacity: 0 }}
                                    justify="center"
                                    mt={-4}
                                    position="absolute"
                                    right={6}
                                    top={0.5}
                                    onClick={() => setIndex(index + 1)}
                                    w={8}
                                    whileHover={{ opacity: 1 }}
                                >
                                    <Icon as={PiArrowCircleRightBold} color="cream.100" fontSize="5xl" />
                                </Flex>
                            ) : null}
                        </AnimatePresence>
                    </Box>
                </Flex>
            </Box>
        </MotionConfig>
    );
};
