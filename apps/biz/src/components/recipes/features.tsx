import { Heading, SimpleGrid, Stack, Text, useColorMode } from '@chakra-ui/react';
import {
    PhoneCartoonyIcon,
    PhoneYellowIcon,
    ResponsiveCartoonyIcon,
    ResponsiveYellowIcon,
    SearchEngineCartoonyIcon,
    SearchEngineYellowIcon,
} from '../atoms';

export const Features = () => {
    const { colorMode } = useColorMode();

    const phoneIcon = colorMode === 'dark' ? <PhoneYellowIcon fontSize="5xl" /> : <PhoneCartoonyIcon fontSize="5xl" />;
    const responsiveIcon =
        colorMode === 'dark' ? <ResponsiveYellowIcon fontSize="5xl" /> : <ResponsiveCartoonyIcon fontSize="5xl" />;
    const searchEngineIcon =
        colorMode === 'dark' ? <SearchEngineYellowIcon fontSize="5xl" /> : <SearchEngineCartoonyIcon fontSize="5xl" />;

    const gridItems: {
        description: string;
        title: string;
        icon: React.ReactNode;
    }[] = [
        {
            description: `60% of internet traffic is on mobile devices, so we develop the mobile experience first.`,
            icon: phoneIcon,
            title: 'Mobile-First Design',
        },
        {
            description: `Your site will scale on all screen sizes so your site can be accessed from anywhere.`,
            icon: responsiveIcon,
            title: 'Fully Responsive',
        },
        {
            description: `We optimize your site to perform well against the latest search engine metrics.`,
            icon: searchEngineIcon,
            title: 'Search Optimization',
        },
    ];

    return (
        <SimpleGrid alignItems="flex-start" columns={{ base: 1, md: 3 }} spacing={20}>
            {gridItems.map(({ description, icon, title }) => (
                <Stack align="center" justify="center" key={title.split(' ').join('-')} spacing={2.5}>
                    {icon}
                    <Heading as="h3" fontFamily="pangramSansRounded" fontWeight="bold" fontSize="lg">
                        {title}
                    </Heading>
                    <Text fontFamily="pangramSansRounded" fontSize="md" fontWeight="normal" textAlign="center">
                        {description}
                    </Text>
                </Stack>
            ))}
        </SimpleGrid>
    );
};
