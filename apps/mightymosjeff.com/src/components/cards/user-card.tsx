'use client';
import {
    Avatar,
    Box,
    ButtonGroup,
    Center,
    Flex,
    Heading,
    HStack,
    Icon,
    IconButton,
    Image,
    Link,
    Stack,
    Text
} from '@chakra-ui/react';
import { FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { PiEnvelope, PiMapPin } from 'react-icons/pi';

export function UserCard(): React.ReactElement {
    return (
        <Center py={6} w="full">
            <Box
                bg="brown.500"
                borderRadius="md"
                boxShadow="2xl"
                maxW="75rem"
                overflow="hidden"
                w="full"
            >
                <Image
                    h="10rem"
                    w={'full'}
                    src={'/assets/images/dope-tron.png'}
                    objectFit="fill"
                    alt="tron"
                />
                <Flex justify="center" mt={4}>
                    <Avatar
                        borderColor="brown.500"
                        borderStyle="solid"
                        borderWidth={0.5}
                        size="2xl"
                        src={'/assets/images/headshot.jpeg'}
                    />
                </Flex>
                <Box p={6}>
                    <Stack spacing={3} align="center">
                        <Heading
                            color="olive.800"
                            fontSize={'2xl'}
                            fontWeight={700}
                            fontFamily={'body'}
                        >
                            Jeff Johnson
                        </Heading>
                        <Text
                            color="olive.600"
                            fontFamily="body"
                            letterSpacing="wide"
                        >
                            Frontend Developer
                        </Text>
                        <Stack spacing={2}>
                            <HStack color="gray.800" fontSize="sm">
                                <Icon as={PiMapPin} fontSize="sm" />
                                <Text>Syracuse, New York</Text>
                            </HStack>
                            <HStack color="gray.800" fontSize="sm">
                                <Icon as={PiEnvelope} fontSize="sm" />
                                <Text>
                                    <Link href="mailto:jjohnso8@alumni.nd.edu" isExternal>
                                        jjohnso8@alumni.nd.edu
                                    </Link>{' '}
                                </Text>
                            </HStack>
                        </Stack>
                        <Text color="gray.800" fontFamily="body" fontSize="md" fontWeight="normal" maxW="20rem" textAlign="center">
                            Seeking remote frontend development opportunities.
                        </Text>
                        <ButtonGroup spacing={5}>
                            <IconButton
                                aria-label="x"
                                borderRadius="lg"
                                icon={<Icon as={FaXTwitter} fontSize="lg" />}
                                size="md"
                                variant="gradient"
                            />
                            <IconButton
                                aria-label="x"
                                borderRadius="lg"
                                icon={<Icon as={FaInstagram} fontSize="lg" />}
                                size="md"
                                variant="gradient"
                            />
                            <IconButton
                                aria-label="x"
                                borderRadius="lg"
                                icon={<Icon as={FaLinkedinIn} fontSize="lg" />}
                                size="md"
                                variant="gradient"
                            />
                        </ButtonGroup>
                    </Stack>
                </Box>
            </Box>
        </Center>
    );
}
