import { WorkCardList } from '@mosjeff/dope-design-system';
import type { Meta, StoryObj } from '@storybook/react';
import { work } from '../../utils/work';

const meta: Meta<typeof WorkCardList> = {
    component: WorkCardList,
    title: 'Recipes/Data Display/Cards/Work Card'
};

export default meta;

type Story = StoryObj<typeof WorkCardList>;

export const Basic: Story = {
    args: {
        data: work
    },
    render: ({ data }) => <WorkCardList data={data} />
};
