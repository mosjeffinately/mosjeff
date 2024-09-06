import { Flex, RadioGroup, type RadioProps } from '@chakra-ui/react';
import { Radio } from '@mosjeff/dope-design-system';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Radio> = {
    component: Radio,
    argTypes: {
        isChecked: {
            control: { type: 'boolean' }
        },
        size: {
            control: { type: 'radio' },
            options: ['sm', 'md', 'lg']
        }
    },
    title: 'Atoms/Forms/Radio'
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Basic: Story = {
    args: {
        children: `Basic Radio`
    }
};

export const Group: Story = {
    render: (props: RadioProps) => (
        <RadioGroup defaultValue="ghostface" size="md">
            <Flex
                align="flex-start"
                border="1px solid"
                borderColor="brown.500"
                borderRadius="md"
                direction="column"
                gap={4}
                justify="flex-start"
                p={4}
                w="33%"
            >
                <Radio {...props} value="ghostface">
                    Ghostface Killah
                </Radio>
                <Radio {...props} value="methodman">
                    Method Man
                </Radio>
                <Radio {...props} value="rza">
                    RZA
                </Radio>
            </Flex>
        </RadioGroup>
    )
};

export const Sizes: Story = {
    render: (props: RadioProps) => (
        <RadioGroup defaultValue="sm">
            <Flex
                align="flex-start"
                direction="column"
                gap={4}
                justify="flex-start"
            >
                <Radio {...props} size="sm">
                    Small Radio
                </Radio>
                <Radio {...props} size="md">
                    Medium Radio
                </Radio>
                <Radio {...props} size="lg">
                    Large Radio
                </Radio>
            </Flex>
        </RadioGroup>
    )
};

export const States: Story = {
    render: (props: RadioProps) => (
        <Flex
            align="flex-start"
            direction="column"
            gap={4}
            justify="flex-start"
        >
            <Radio {...props} isChecked={false} size="md">
                Unchecked
            </Radio>
            <Radio {...props} isChecked size="md">
                Checked
            </Radio>
            <Radio {...props} isDisabled size="md">
                Disabled Unchecked
            </Radio>
            <Radio {...props} isChecked isDisabled size="md">
                Disabled Checked
            </Radio>
        </Flex>
    )
};
