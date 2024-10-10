import {
    Heading,
    HStack,
    Icon,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { FaCircleCheck } from 'react-icons/fa6';

export const Assets = () => {
    const color = useColorModeValue('green.400', 'purple.500');

    const gridItems: {
        description: string;
        title: string;
    }[] = [
        {
            description: `Includes 40 hours of design, development, and testing.`,
            title: 'Web Design & Development',
        },
        {
            description: `Hosting fees are built into the subscription fee. Let us handle the annoying stuff so you can spend more time growing your business.`,
            title: 'Hosting Fees Included',
        },
        {
            description: `Change any content on your site you want and it will be done within 2-3 business days.`,
            title: 'Unlimited Edits',
        },
        {
            description: `We want your business to succeed. We're here to support you if any issues arise with your site.`,
            title: `Customer Support`,
        },
        {
            description: `We promise to achieve a high page speed score (> 95) using Google Page Speed Insights. A higher score means better search rankings for your site.`,
            title: `High Google Page Speed Score`,
        },
        {
            description: `Google Analytics is installed on each site to monitor traffic and where it originates.`,
            title: `Google Analytics`,
        },
    ];

    return (
        <SimpleGrid
            alignItems="flex-start"
            columns={{ base: 1, md: 2 }}
            spacing={20}
        >
            {gridItems.map(({ description, title }) => (
                <HStack align="flex-start" justify="flex-start" spacing={4}>
                    <Icon as={FaCircleCheck} color={color} fontSize="3xl" />
                    <Stack
                        align="flex-start"
                        justify="flex-start"
                        spacing={2.5}
                    >
                        <Heading
                            as="h3"
                            fontFamily="pangramSansRounded"
                            fontWeight="bold"
                            fontSize="lg"
                        >
                            {title}
                        </Heading>
                        <Text
                            fontFamily="pangramSansRounded"
                            fontSize="md"
                            fontWeight="normal"
                        >
                            {description}
                        </Text>
                    </Stack>
                </HStack>
            ))}
        </SimpleGrid>
    );
};
