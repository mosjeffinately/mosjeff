import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Heading,
    HStack,
    Icon,
    IconButton,
    Image,
    Link,
    Stack,
    Text,
    type CardProps
} from '@chakra-ui/react';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { PiEnvelopeDuotone, PiMapPinDuotone } from 'react-icons/pi';
import type { UserData } from '../../../types';

export type UserCardProps = CardProps & {
    bgImage: string;
    user: UserData;
};

export function UserCard({
    bgImage,
    size = 'md',
    user,
    variant = 'outline',
    ...props
}: UserCardProps): React.ReactElement {
    const { avatar, description, email, location, name } = user;

    return (
        <Card
            bgColor="gray.500"
            color="cream.100"
            size={size}
            variant={variant}
            {...props}
        >
            <CardHeader borderTopRadius="inherit" p={0}>
                <Image
                    alt={`${name} background`}
                    h="full"
                    src={bgImage}
                    w="full"
                />
            </CardHeader>
            <CardBody>
                <Stack
                    align="flex-start"
                    justify="center"
                    px={28}
                    py={8}
                    spacing={4}
                >
                    <Image
                        alignSelf="center"
                        alt={`${name} avatar`}
                        borderRadius="xl"
                        h={32}
                        src={avatar}
                    />
                    <Heading
                        as="h4"
                        fontSize="3xl"
                        fontWeight="bold"
                        letterSpacing="wide"
                    >
                        {name}
                    </Heading>

                    <Text fontSize="lg" fontWeight="normal">
                        {description}
                    </Text>
                    <Stack
                        align="flex-start"
                        justify="flex-start"
                        px={12}
                        spacing={2}
                    >
                        <HStack spacing={2}>
                            <Icon as={PiMapPinDuotone} fontSize="xl" />
                            <Text fontSize="lg" fontWeight="medium">
                                {location}
                            </Text>
                        </HStack>
                        <HStack spacing={2}>
                            <Icon as={PiEnvelopeDuotone} fontSize="xl" />
                            <Text
                                as={Link}
                                fontSize="lg"
                                fontWeight="medium"
                                href={`mailto:${email}`}
                            >
                                {email}
                            </Text>
                        </HStack>
                    </Stack>
                </Stack>
            </CardBody>
            <CardFooter>
                <HStack align="center" justify="center" spacing={12} w="full">
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
                </HStack>
            </CardFooter>
        </Card>
    );
}
