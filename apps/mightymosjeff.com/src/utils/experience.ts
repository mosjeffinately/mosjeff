import { faker } from '@faker-js/faker';
import { ExperienceData } from '@mosjeff/dope-design-system';

export const experience: ExperienceData[] = [
    {
        company: 'ComplyAuto',
        id: faker.string.uuid(),
        location: 'Remote',
        things: [
            'Created app that allows hundreds of automotive dealers to submit injury and illness data to OSHA as a mandatory compliance requirement.'
        ],
        timeline: '2024',
        title: 'Senior Software Engineer'
    },
    {
        company: 'IXL',
        id: faker.string.uuid(),
        location: 'Remote',
        things: [
            `Designed and built UX for a gamified experience on SpanishDictionary.com used by more than 30,000 users
            weekly.  This feature drives premium subscriptions by increasing user engagement.`
        ],
        timeline: '2023-2024',
        title: 'Senior Software Engineer'
    },
    {
        company: 'School of Motion',
        id: faker.string.uuid(),
        location: 'Remote',
        things: [
            `Chiefly responsible for architecture and design of the next generation of SOM's first-class Learning Management System.`,
            `Supported thousands of learners each quarter by enhancing and maintaining the current LMS, including significant performance improvements and features such as real-time chat between TAs and students.`,
            `Created design system and UX component library to match SOM's brand guidelines and design principles.`,
            `Integrated and managed third-party integrations including Stripe and Shopify.`
        ],
        timeline: '2020-2023',
        title: 'Senior Software Engineer'
    },
    {
        company: 'Blackboard',
        id: faker.string.uuid(),
        location: 'D.C. / Remote',
        things: [],
        timeline: '2011-2020',
        title: 'Principal Consultant'
    }
];
