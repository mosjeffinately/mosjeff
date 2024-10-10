'use client';

import { Heading, Stack } from '@chakra-ui/react';
import { SwiperCarousel } from '../carousel/swiper-carousel';
import { PortfolioCarousel } from '../carousel/portfolio-carousel';

const ixlImages = [
    { alt: 'Leaderboards Card Component', src: '/assets/images/portfolio/ixl/ixl-leaderboards-card-component.png' },
    { alt: 'Leaderboards Card', src: '/assets/images/portfolio/ixl/ixl-leaderboards-card.png' },
    { alt: 'Leaderboards Ranking', src: '/assets/images/portfolio/ixl/ixl-leaderboards-ranking.png' },
    { alt: 'Leaderboards Settings', src: '/assets/images/portfolio/ixl/ixl-leaderboards-settings.png' },
];

const somImages = [
    {
        alt: 'SOM Workshop',
        src: '/assets/images/portfolio/som/som-workshop-main.png',
    },
    {
        alt: 'SOM Workshop Syllabus',
        src: '/assets/images/portfolio/som/som-workshop-syllabus.png',
    },
    {
        alt: 'SOM Workshop Summary',
        src: '/assets/images/portfolio/som/som-workshop-summary.png',
    },
    {
        alt: 'SOM Workshop Overview',
        src: '/assets/images/portfolio/som/som-workshop-overview.png',
    },
];

const somLmsImages = [
    {
        alt: 'SOM Classroom',
        src: '/assets/images/portfolio/som/som-classroom.png',
    },
    {
        alt: 'SOM Classroom TA View',
        src: '/assets/images/portfolio/som/som-ta-view.png',
    },
    {
        alt: 'SOM Workshop Summary',
        src: '/assets/images/portfolio/som/som-homework-1.png',
    },
    {
        alt: 'SOM Workshop Summary',
        src: '/assets/images/portfolio/som/som-homework-2.png',
    },
    {
        alt: 'SOM Workshop Overview',
        src: '/assets/images/portfolio/som/som-settings.png',
    },
];

export const Portfolio = () => {
    return (
        <Stack h="full" px={24} py={12} spacing={6} w="full">
            <Stack spacing={3}>
                <Heading color="gray.500" fontFamily="telegraf">
                    School of Motion Workshops
                </Heading>
                <PortfolioCarousel images={somImages} />
            </Stack>
            <Stack spacing={3}>
                <Heading color="gray.500" fontFamily="telegraf">
                    School of Motion LMS
                </Heading>
                <PortfolioCarousel images={somLmsImages} />
            </Stack>
        </Stack>
    );
};
