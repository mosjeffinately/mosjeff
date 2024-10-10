'use client';
import { Link } from '@chakra-ui/next-js';
import { Heading, HStack, Icon, Image, Show } from '@chakra-ui/react';
import { PiPhoneCallDuotone } from 'react-icons/pi';

export type HeaderProps = {
    logoSrc: string;
    phone: string;
    title: string;
};

export const Header = () => {
    return (
        <HStack
            align="center"
            bgColor="gray.300"
            h="full"
            px={{ base: 4, md: 6, lg: 8 }}
            py={0}
            spacing={{ base: 2, md: 3 }}
            w="full"
        >
            <Link
                href="/templates/plumbing"
                _hover={{ textDecoration: 'none' }}
            >
                <HStack align="center" justify="center" spacing={3}>
                    <Image
                        alt="American Plumbing"
                        h={14}
                        src="/assets/images/american-plumbing/american-plumbing-eagle.png"
                    />
                    <Heading
                        as="span"
                        fontSize={{ base: 'md', xl: 'xl' }}
                        fontWeight="bold"
                        letterSpacing="tight"
                        textAlign="center"
                        whiteSpace="pre-line"
                    >
                        {`American\nPlumbing`}
                    </Heading>
                </HStack>
            </Link>
            <HStack ml="auto" spacing={{ base: 4, lg: 6 }}>
                <Show above="md">
                    <HStack
                        align="center"
                        fontSize={{ base: 'xs', lg: 'md', xl: 'xl' }}
                        fontWeight="semibold"
                        justify="flex-end"
                        ml="auto"
                        spacing={{ base: 2, md: 4, lg: 6 }}
                    >
                        <Link
                            href="/templates/plumbing/services"
                            _hover={{
                                textDecoration: 'none'
                            }}
                        >
                            Services
                        </Link>
                        <Link
                            href="/templates/american-plumbing/gallery"
                            _hover={{
                                textDecoration: 'none'
                            }}
                        >
                            Gallery
                        </Link>
                        <Link
                            href="/templates/american-plumbing/about-us"
                            _hover={{
                                textDecoration: 'none'
                            }}
                        >
                            About Us
                        </Link>
                        <Link
                            href="/templates/american-plumbing/contact-us"
                            _hover={{
                                textDecoration: 'none'
                            }}
                        >
                            Contact Us
                        </Link>
                    </HStack>
                </Show>
                <HStack
                    align="center"
                    borderColor="blackAlpha.400"
                    borderRadius="sm"
                    borderStyle="solid"
                    borderWidth={0.5}
                    color="blackAlpha800"
                    justify="center"
                    ml="auto"
                    p={2}
                    spacing={{ base: 1, sm: 2, md: 3, lg: 4 }}
                >
                    <Show above="md">
                        <Icon
                            as={PiPhoneCallDuotone}
                            fontSize={{
                                base: 'xs',
                                md: 'sm',
                                lg: 'md',
                                xl: 'xl'
                            }}
                        />
                        <Link
                            fontSize={{ base: 'xs' }}
                            fontWeight="semibold"
                            href="tel:+15555555555"
                            _hover={{
                                textDecoration: 'none'
                            }}
                        >
                            Call us: 315-XXX-XXXX
                        </Link>
                    </Show>
                    <Show below="md">
                        <Link
                            fontSize={{ base: 'xs' }}
                            fontWeight="semibold"
                            href="tel:+15555555555"
                            _hover={{
                                textDecoration: 'none'
                            }}
                        >
                            315-XXX-XXXX
                        </Link>
                    </Show>
                </HStack>
            </HStack>
        </HStack>
    );
};
