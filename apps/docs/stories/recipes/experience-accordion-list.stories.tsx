import { ExperienceAccordionList } from '@mosjeff/dope-design-system';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ExperienceAccordionList> = {
    component: ExperienceAccordionList,
    title: 'Recipes/Disclosure/Experience Accordion List'
};

export default meta;

type Story = StoryObj<typeof ExperienceAccordionList>;

export const Basic: Story = {
    args: {
        data: [
            {
                company: 'dope! Brands',
                location: 'Remote',
                things: ['i did some stuff.', 'i did even more things.'],
                timeline: 'current',
                title: 'Senior Frontend Engineer'
            },
            {
                company: 'ComplyAuto',
                location: 'Remote',
                things: ['i did some stuff.', 'i did even more things.'],
                timeline: '2024',
                title: 'Senior Software Engineer'
            },
            {
                company: 'Curiosity Media',
                location: 'Remote',
                things: ['i did some stuff.', 'i did even more things.'],
                timeline: '2023 - 2024',
                title: 'Senior Software Engineer'
            },
            {
                company: 'School of Motion',
                location: 'Remote',
                things: ['i did some stuff.', 'i did even more things.'],
                timeline: '2020 - 2023',
                title: 'Lead Software Engineer'
            },
            {
                company: 'Blackboard',
                location: 'Washington, D.C. / Remote',
                things: ['i did some stuff.', 'i did even more things.'],
                timeline: '2011 - 2020',
                title: 'Senior Consultant / Manager'
            }
        ]
    },
    render: (args) => <ExperienceAccordionList {...args} />
};
