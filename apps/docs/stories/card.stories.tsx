import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    type CardProps,
    Center,
    Heading,
    HStack,
    Icon,
    IconButton,
    Image,
    Stack,
    Text
} from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import {
    PiBriefcaseDuotone,
    PiEnvelopeDuotone,
    PiMapPinDuotone
} from 'react-icons/pi';

const meta: Meta<typeof Card> = {
    component: Card,
    argTypes: {
        size: {
            control: { type: 'radio' },
            options: ['sm', 'md', 'lg']
        },
        variant: {
            control: { type: 'radio' },
            options: ['elevated', 'filled', 'funky', 'outline']
        }
    },
    title: 'Atoms/Data Display/Card'
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Basic: Story = {
    args: {
        size: 'sm'
    },

    render: (args) => getCard({ size: args.size, variant: args.variant })
};

export const Sizes: Story = {
    render: () => (
        <Stack spacing={4}>
            {['sm', 'md', 'lg'].map((size) => getCard({ size }))}
        </Stack>
    )
};

export const Variants: Story = {
    render: () => (
        <Stack spacing={4}>
            {['elevated', 'filled', 'outline'].map((variant) =>
                getCard({ size: 'md', variant })
            )}
        </Stack>
    )
};

function getCard({
    size,
    variant
}: {
    size?: CardProps['size'];
    variant?: CardProps['variant'];
}): React.ReactElement {
    return (
        <Center>
            <Card size={size} variant={variant}>
                <CardHeader py={8}>
                    <Center>
                        <Image
                            alt="dope!"
                            borderRadius="xl"
                            h="75%"
                            src="/assets/images/dope-bg.gif"
                            w="75%"
                        />
                    </Center>
                </CardHeader>
                <CardBody>
                    <Center>
                        <Stack spacing={4}>
                            <Heading as="h4" fontSize="2xl" fontWeight="bold">
                                mos jeff.
                            </Heading>
                            <Text fontSize="lg" fontWeight="normal">
                                frontend developer, hip hop enthusiast, purveyor
                                of dad jokes.
                            </Text>
                            <Stack
                                align="flex-start"
                                justify="center"
                                px={12}
                                spacing={2}
                            >
                                <HStack spacing={2}>
                                    <Icon
                                        as={PiBriefcaseDuotone}
                                        fontSize="xl"
                                    />
                                    <Text fontSize="lg" fontWeight="medium">
                                        Black Star, Inc.
                                    </Text>
                                </HStack>
                                <HStack spacing={2}>
                                    <Icon as={PiMapPinDuotone} fontSize="xl" />
                                    <Text fontSize="lg" fontWeight="medium">
                                        Planet Earth
                                    </Text>
                                </HStack>
                                <HStack spacing={2}>
                                    <Icon
                                        as={PiEnvelopeDuotone}
                                        fontSize="xl"
                                    />
                                    <Text fontSize="lg" fontWeight="medium">
                                        Planet Earth
                                    </Text>
                                </HStack>
                            </Stack>
                        </Stack>
                    </Center>
                </CardBody>
                <CardFooter p={8}>
                    <HStack
                        align="center"
                        justify="center"
                        spacing={40}
                        w="full"
                    >
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
        </Center>
    );
}
