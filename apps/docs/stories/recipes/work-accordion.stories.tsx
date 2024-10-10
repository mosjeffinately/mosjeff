import { WorkAccordion } from '@mosjeff/dope-design-system';
import type { Meta, StoryObj } from '@storybook/react';
import { work } from '../../utils/work';

const meta: Meta<typeof WorkAccordion> = {
    component: WorkAccordion,
    title: 'Recipes/Disclosure/Accordion Work'
};

export default meta;

type Story = StoryObj<typeof WorkAccordion>;

export const Basic: Story = {
    args: {
        data: work
    },
    render: (args) => <WorkAccordion {...args} />
};
