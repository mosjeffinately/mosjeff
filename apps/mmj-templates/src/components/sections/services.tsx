'use client';
import { Image } from '@chakra-ui/next-js';
import {
    Card,
    CardBody,
    CardHeader,
    Divider,
    Flex,
    Heading,
    SimpleGrid,
    Stack,
    Text
} from '@chakra-ui/react';
import { faker } from '@faker-js/faker';

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si longus, levis. Istam voluptatem, inquit, Epicurus ignorat? Idem adhuc; Vestri haec verecundius, illi fortasse constantius.`;

const data: {
    description: string;
    id: string;
    imageAlt: string;
    imageSrc: string;
    title: string;
}[] = [
    {
        description: loremIpsum,
        id: faker.string.uuid(),
        imageAlt: 'pipe wrench',
        imageSrc:
            '/assets/images/vector/smashicons_tools_pipe-wrench-icon-10-greyscale.svg',
        title: 'Service & Repair'
    },
    {
        description: loremIpsum,
        id: faker.string.uuid(),
        imageAlt: 'sink and mirror',
        imageSrc:
            '/assets/images/vector/smashicons_bathrooms_sink-and-mirror-icon-6-greyscale.svg',
        title: 'Remodels & Additions'
    },
    {
        description: loremIpsum,
        id: faker.string.uuid(),
        imageAlt: 'leaking pipe',
        imageSrc:
            '/assets/images/vector/smashicons_bathrooms_leaking-pipe-icon-53-greyscale.svg',
        title: 'Emergency Repairs'
    },
    {
        description: loremIpsum,
        id: faker.string.uuid(),
        imageAlt: 'water heater',
        imageSrc:
            '/assets/images/vector/smashicons_heating_boiler-icon-21-greyscale.svg',
        title: 'Water Heaters'
    },
    {
        description: loremIpsum,
        id: faker.string.uuid(),
        imageAlt: 'winter season',
        imageSrc:
            '/assets/images/vector/smashicons_rainy_days_winter-season-85-icon-greyscale.svg',
        title: 'Maintenance'
    },
    {
        description: loremIpsum,
        id: faker.string.uuid(),
        imageAlt: 'gas heater',
        imageSrc:
            '/assets/images/vector/smashicons_heating_gas-heater-icon-29-greyscale.svg',
        title: 'Gas and Propane'
    }
];

export const Services = () => {
    return (
        <Stack align="center" justify="center" py={5} spacing={8}>
            <Stack align="center" justify="center" spacing={2}>
                <Heading as="h1" color="gray.700" fontSize="3xl">
                    Our Services
                </Heading>
                <Divider borderColor="gray.500" borderWidth={2} w={12} />
            </Stack>
            <SimpleGrid
                columns={{ base: 1, sm: 2, md: 3 }}
                gap={10}
                px={20}
                textAlign="center"
                w="full"
            >
                {data.map(({ description, id, imageAlt, imageSrc, title }) => (
                    <Card
                        gap={4}
                        key={`card-${id}`}
                        size="sm"
                        variant="unstyled"
                    >
                        <Flex
                            as={CardHeader}
                            align="center"
                            direction="column"
                            gap={4}
                            justify="start"
                        >
                            <Image
                                alt={imageAlt}
                                height={98}
                                src={imageSrc}
                                width={98}
                            />
                            <Heading
                                as="h3"
                                color="gray.700"
                                fontFamily="poppins"
                                fontSize={{ base: 'sm', md: 'sm', xl: 'lg' }}
                                fontWeight="semibold"
                            >
                                {title}
                            </Heading>
                        </Flex>
                        <Stack
                            align="start"
                            as={CardBody}
                            fontFamily="poppins"
                            justify="start"
                        >
                            <Text
                                color="gray.500"
                                fontSize="sm"
                                fontWeight="light"
                            >
                                {description}
                            </Text>
                        </Stack>
                    </Card>
                ))}
            </SimpleGrid>
        </Stack>
    );
};
