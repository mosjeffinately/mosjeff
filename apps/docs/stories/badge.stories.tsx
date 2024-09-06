import {
    Badge,
    Box,
    Card,
    Divider,
    Heading,
    HStack,
    Icon,
    Stack,
    Text
} from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import {
    PiAlienBold,
    PiPlanetBold,
    PiRocketBold,
    PiVinylRecordBold
} from 'react-icons/pi';

const meta: Meta<typeof Card> = {
    component: Card,
    argTypes: {
        colorScheme: {
            table: {
                defaultValue: { summary: 'blue' },
                type: { summary: 'select' }
            },
            type: 'string'
        },
        size: {
            control: { type: 'radio' },
            options: ['sm', 'md', 'lg']
        },
        variant: {
            control: { type: 'radio' },
            options: ['outline', 'solid', 'subtle']
        }
    },
    title: 'Atoms/Data Display/Badge'
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Basic: Story = {
    args: {
        children: (
            <HStack spacing={2}>
                <Icon as={PiVinylRecordBold} />
                <Text as="span">dope!</Text>
            </HStack>
        ),
        colorScheme: 'olive',
        size: 'md',
        variant: ''
    },
    render: ({ children, colorScheme, size, variant, ...props }) => (
        <Box>
            <Badge
                colorScheme={colorScheme}
                size={size}
                variant={variant}
                {...props}
            >
                {children}
            </Badge>
        </Box>
    )
};

export const Sizes: Story = {
    render: () => (
        <Stack align="flex-start" justify="flex-start" spacing={4}>
            <Stack>
                <Heading as="h4" color="gray.500" fontSize="xl">
                    Small
                </Heading>
                <HStack>
                    <Badge colorScheme="blue" size="sm" variant="outline">
                        <HStack spacing={2}>
                            <Icon as={PiRocketBold} />
                            <Text as="span">Intergalactic</Text>
                        </HStack>
                    </Badge>
                    <Badge colorScheme="indigo" size="sm" variant="outline">
                        <HStack spacing={2}>
                            <Icon as={PiPlanetBold} />
                            <Text as="span">Planetary</Text>
                        </HStack>
                    </Badge>
                    <Badge colorScheme="olive" size="sm" variant="outline">
                        <HStack spacing={2}>
                            <Icon as={PiPlanetBold} />
                            <Text as="span">Planetary</Text>
                        </HStack>
                    </Badge>
                    <Badge colorScheme="pink" size="sm" variant="outline">
                        <HStack spacing={2}>
                            <Icon as={PiRocketBold} />
                            <Text as="span">Intergalactic</Text>
                        </HStack>
                    </Badge>
                    <Badge colorScheme="red" size="sm" variant="outline">
                        <HStack spacing={2}>
                            <Icon as={PiAlienBold} />
                            <Text as="span">Another Dimension</Text>
                        </HStack>
                    </Badge>
                </HStack>
                <HStack>
                    <Badge colorScheme="blue" size="sm" variant="solid">
                        <HStack spacing={2}>
                            <Icon as={PiRocketBold} />
                            <Text as="span">Intergalactic</Text>
                        </HStack>
                    </Badge>
                    <Badge colorScheme="indigo" size="sm" variant="solid">
                        <HStack spacing={2}>
                            <Icon as={PiPlanetBold} />
                            <Text as="span">Planetary</Text>
                        </HStack>
                    </Badge>
                    <Badge colorScheme="olive" size="sm" variant="solid">
                        <HStack spacing={2}>
                            <Icon as={PiPlanetBold} />
                            <Text as="span">Planetary</Text>
                        </HStack>
                    </Badge>
                    <Badge colorScheme="pink" size="sm" variant="solid">
                        <HStack spacing={2}>
                            <Icon as={PiRocketBold} />
                            <Text as="span">Intergalactic</Text>
                        </HStack>
                    </Badge>
                    <Badge colorScheme="red" size="sm" variant="solid">
                        <HStack spacing={2}>
                            <Icon as={PiAlienBold} />
                            <Text as="span">Another Dimension</Text>
                        </HStack>
                    </Badge>
                </HStack>
                <HStack>
                    <Badge colorScheme="blue" size="sm" variant="subtle">
                        <HStack spacing={2}>
                            <Icon as={PiRocketBold} />
                            <Text as="span">Intergalactic</Text>
                        </HStack>
                    </Badge>
                    <Badge colorScheme="indigo" size="sm" variant="subtle">
                        <HStack spacing={2}>
                            <Icon as={PiPlanetBold} />
                            <Text as="span">Planetary</Text>
                        </HStack>
                    </Badge>
                    <Badge colorScheme="olive" size="sm" variant="subtle">
                        <HStack spacing={2}>
                            <Icon as={PiPlanetBold} />
                            <Text as="span">Planetary</Text>
                        </HStack>
                    </Badge>
                    <Badge colorScheme="pink" size="sm" variant="subtle">
                        <HStack spacing={2}>
                            <Icon as={PiRocketBold} />
                            <Text as="span">Intergalactic</Text>
                        </HStack>
                    </Badge>
                    <Badge colorScheme="red" size="sm" variant="subtle">
                        <HStack spacing={2}>
                            <Icon as={PiAlienBold} />
                            <Text as="span">Another Dimension</Text>
                        </HStack>
                    </Badge>
                </HStack>
            </Stack>
            <Divider />
            <Stack>
                <Heading as="h4" color="gray.500" fontSize="xl">
                    Medium
                </Heading>
                <HStack>
                    <Badge colorScheme="blue" size="md" variant="outline">
                        <HStack spacing={2}>
                            <Icon as={PiRocketBold} />
                            <Text as="span">Intergalactic</Text>
                        </HStack>
                    </Badge>
                    <Badge colorScheme="indigo" size="md" variant="outline">
                        <HStack spacing={2}>
                            <Icon as={PiPlanetBold} />
                            <Text as="span">Planetary</Text>
                        </HStack>
                    </Badge>
                    <Badge colorScheme="olive" size="md" variant="outline">
                        <HStack spacing={2}>
                            <Icon as={PiPlanetBold} />
                            <Text as="span">Planetary</Text>
                        </HStack>
                    </Badge>
                    <Badge colorScheme="pink" size="md" variant="outline">
                        <HStack spacing={2}>
                            <Icon as={PiRocketBold} />
                            <Text as="span">Intergalactic</Text>
                        </HStack>
                    </Badge>
                    <Badge colorScheme="red" size="md" variant="outline">
                        <HStack spacing={2}>
                            <Icon as={PiAlienBold} />
                            <Text as="span">Another Dimension</Text>
                        </HStack>
                    </Badge>
                </HStack>
                <HStack>
                    <Badge colorScheme="blue" size="md" variant="solid">
                        <HStack spacing={2}>
                            <Icon as={PiRocketBold} />
                            <Text as="span">Intergalactic</Text>
                        </HStack>
                    </Badge>
                    <Badge colorScheme="indigo" size="md" variant="solid">
                        <HStack spacing={2}>
                            <Icon as={PiPlanetBold} />
                            <Text as="span">Planetary</Text>
                        </HStack>
                    </Badge>
                    <Badge colorScheme="olive" size="md" variant="solid">
                        <HStack spacing={2}>
                            <Icon as={PiPlanetBold} />
                            <Text as="span">Planetary</Text>
                        </HStack>
                    </Badge>
                    <Badge colorScheme="pink" size="md" variant="solid">
                        <HStack spacing={2}>
                            <Icon as={PiRocketBold} />
                            <Text as="span">Intergalactic</Text>
                        </HStack>
                    </Badge>
                    <Badge colorScheme="red" size="md" variant="solid">
                        <HStack spacing={2}>
                            <Icon as={PiAlienBold} />
                            <Text as="span">Another Dimension</Text>
                        </HStack>
                    </Badge>
                </HStack>
                <HStack>
                    <Badge colorScheme="blue" size="md" variant="subtle">
                        <HStack spacing={2}>
                            <Icon as={PiRocketBold} />
                            <Text as="span">Intergalactic</Text>
                        </HStack>
                    </Badge>
                    <Badge colorScheme="indigo" size="md" variant="subtle">
                        <HStack spacing={2}>
                            <Icon as={PiPlanetBold} />
                            <Text as="span">Planetary</Text>
                        </HStack>
                    </Badge>
                    <Badge colorScheme="olive" size="md" variant="subtle">
                        <HStack spacing={2}>
                            <Icon as={PiPlanetBold} />
                            <Text as="span">Planetary</Text>
                        </HStack>
                    </Badge>
                    <Badge colorScheme="pink" size="md" variant="subtle">
                        <HStack spacing={2}>
                            <Icon as={PiRocketBold} />
                            <Text as="span">Intergalactic</Text>
                        </HStack>
                    </Badge>
                    <Badge colorScheme="red" size="md" variant="subtle">
                        <HStack spacing={2}>
                            <Icon as={PiAlienBold} />
                            <Text as="span">Another Dimension</Text>
                        </HStack>
                    </Badge>
                </HStack>
            </Stack>
            <Divider />
            <Stack>
                <Heading as="h4" color="gray.500" fontSize="xl">
                    Large
                </Heading>
                <HStack>
                    <Badge colorScheme="blue" size="lg" variant="outline">
                        <HStack spacing={2}>
                            <Icon as={PiRocketBold} />
                            <Text as="span">Intergalactic</Text>
                        </HStack>
                    </Badge>
                    <Badge colorScheme="indigo" size="lg" variant="outline">
                        <HStack spacing={2}>
                            <Icon as={PiPlanetBold} />
                            <Text as="span">Planetary</Text>
                        </HStack>
                    </Badge>
                    <Badge colorScheme="olive" size="lg" variant="outline">
                        <HStack spacing={2}>
                            <Icon as={PiPlanetBold} />
                            <Text as="span">Planetary</Text>
                        </HStack>
                    </Badge>
                    <Badge colorScheme="pink" size="lg" variant="outline">
                        <HStack spacing={2}>
                            <Icon as={PiRocketBold} />
                            <Text as="span">Intergalactic</Text>
                        </HStack>
                    </Badge>
                    <Badge colorScheme="red" size="lg" variant="outline">
                        <HStack spacing={2}>
                            <Icon as={PiAlienBold} />
                            <Text as="span">Another Dimension</Text>
                        </HStack>
                    </Badge>
                </HStack>
                <HStack>
                    <Badge colorScheme="blue" size="lg" variant="solid">
                        <HStack spacing={2}>
                            <Icon as={PiRocketBold} />
                            <Text as="span">Intergalactic</Text>
                        </HStack>
                    </Badge>
                    <Badge colorScheme="indigo" size="lg" variant="solid">
                        <HStack spacing={2}>
                            <Icon as={PiPlanetBold} />
                            <Text as="span">Planetary</Text>
                        </HStack>
                    </Badge>
                    <Badge colorScheme="olive" size="lg" variant="solid">
                        <HStack spacing={2}>
                            <Icon as={PiPlanetBold} />
                            <Text as="span">Planetary</Text>
                        </HStack>
                    </Badge>
                    <Badge colorScheme="pink" size="lg" variant="solid">
                        <HStack spacing={2}>
                            <Icon as={PiRocketBold} />
                            <Text as="span">Intergalactic</Text>
                        </HStack>
                    </Badge>
                    <Badge colorScheme="red" size="lg" variant="solid">
                        <HStack spacing={2}>
                            <Icon as={PiAlienBold} />
                            <Text as="span">Another Dimension</Text>
                        </HStack>
                    </Badge>
                </HStack>
                <HStack>
                    <Badge colorScheme="blue" size="lg" variant="subtle">
                        <HStack spacing={2}>
                            <Icon as={PiRocketBold} />
                            <Text as="span">Intergalactic</Text>
                        </HStack>
                    </Badge>
                    <Badge colorScheme="indigo" size="lg" variant="subtle">
                        <HStack spacing={2}>
                            <Icon as={PiPlanetBold} />
                            <Text as="span">Planetary</Text>
                        </HStack>
                    </Badge>
                    <Badge colorScheme="olive" size="lg" variant="subtle">
                        <HStack spacing={2}>
                            <Icon as={PiPlanetBold} />
                            <Text as="span">Planetary</Text>
                        </HStack>
                    </Badge>
                    <Badge colorScheme="pink" size="lg" variant="subtle">
                        <HStack spacing={2}>
                            <Icon as={PiRocketBold} />
                            <Text as="span">Intergalactic</Text>
                        </HStack>
                    </Badge>
                    <Badge colorScheme="red" size="lg" variant="subtle">
                        <HStack spacing={2}>
                            <Icon as={PiAlienBold} />
                            <Text as="span">Another Dimension</Text>
                        </HStack>
                    </Badge>
                </HStack>
            </Stack>
        </Stack>
    )
};

export const Variants: Story = {
    render: () => (
        <Stack align="flex-start" justify="flex-start" spacing={4}>
            <Heading as="h4" color="gray.500" fontSize="xl">
                Outline
            </Heading>
            <Badge colorScheme="blue" size="md" variant="outline">
                <HStack spacing={2}>
                    <Icon as={PiRocketBold} />
                    <Text as="span">Intergalactic</Text>
                </HStack>
            </Badge>
            <Badge colorScheme="indigo" size="md" variant="outline">
                <HStack spacing={2}>
                    <Icon as={PiPlanetBold} />
                    <Text as="span">Planetary</Text>
                </HStack>
            </Badge>
            <Badge colorScheme="olive" size="md" variant="outline">
                <HStack spacing={2}>
                    <Icon as={PiPlanetBold} />
                    <Text as="span">Planetary</Text>
                </HStack>
            </Badge>
            <Badge colorScheme="pink" size="md" variant="outline">
                <HStack spacing={2}>
                    <Icon as={PiRocketBold} />
                    <Text as="span">Intergalactic</Text>
                </HStack>
            </Badge>
            <Badge colorScheme="red" size="md" variant="outline">
                <HStack spacing={2}>
                    <Icon as={PiAlienBold} />
                    <Text as="span">Another Dimension</Text>
                </HStack>
            </Badge>
            <Divider />
            <Heading as="h4" color="gray.500" fontSize="xl">
                Solid
            </Heading>
            <Badge colorScheme="blue" size="md" variant="solid">
                <HStack spacing={2}>
                    <Icon as={PiRocketBold} />
                    <Text as="span">Intergalactic</Text>
                </HStack>
            </Badge>
            <Badge colorScheme="indigo" size="md" variant="solid">
                <HStack spacing={2}>
                    <Icon as={PiPlanetBold} />
                    <Text as="span">Planetary</Text>
                </HStack>
            </Badge>
            <Badge colorScheme="olive" size="md" variant="solid">
                <HStack spacing={2}>
                    <Icon as={PiPlanetBold} />
                    <Text as="span">Planetary</Text>
                </HStack>
            </Badge>
            <Badge colorScheme="pink" size="md" variant="solid">
                <HStack spacing={2}>
                    <Icon as={PiRocketBold} />
                    <Text as="span">Intergalactic</Text>
                </HStack>
            </Badge>
            <Badge colorScheme="red" size="md" variant="solid">
                <HStack spacing={2}>
                    <Icon as={PiAlienBold} />
                    <Text as="span">Another Dimension</Text>
                </HStack>
            </Badge>
            <Divider />
            <Heading as="h4" color="gray.500" fontSize="xl">
                Subtle
            </Heading>
            <Badge colorScheme="blue" size="md" variant="subtle">
                <HStack spacing={2}>
                    <Icon as={PiRocketBold} />
                    <Text as="span">Intergalactic</Text>
                </HStack>
            </Badge>
            <Badge colorScheme="indigo" size="md" variant="subtle">
                <HStack spacing={2}>
                    <Icon as={PiPlanetBold} />
                    <Text as="span">Planetary</Text>
                </HStack>
            </Badge>
            <Badge colorScheme="olive" size="md" variant="subtle">
                <HStack spacing={2}>
                    <Icon as={PiPlanetBold} />
                    <Text as="span">Planetary</Text>
                </HStack>
            </Badge>
            <Badge colorScheme="pink" size="md" variant="subtle">
                <HStack spacing={2}>
                    <Icon as={PiRocketBold} />
                    <Text as="span">Intergalactic</Text>
                </HStack>
            </Badge>
            <Badge colorScheme="red" size="md" variant="subtle">
                <HStack spacing={2}>
                    <Icon as={PiAlienBold} />
                    <Text as="span">Another Dimension</Text>
                </HStack>
            </Badge>
        </Stack>
    )
};
