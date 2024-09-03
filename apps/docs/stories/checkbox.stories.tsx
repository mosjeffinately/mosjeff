import { CheckboxGroup, Flex, type CheckboxProps } from '@chakra-ui/react';
import { Checkbox } from '@mosjeff/dope-design-system';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Checkbox> = {
    component: Checkbox,
    argTypes: {
        isChecked: {
            control: { type: 'boolean' }
        },
        isIndeterminate: {
            control: { type: 'boolean' }
        },
        size: {
            control: { type: 'radio' },
            options: ['sm', 'md', 'lg']
        }
    },
    title: 'Atoms/Forms/Checkbox'
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Basic: Story = {
    args: {
        children: `Basic Checkbox`
    }
};

export const Group: Story = {
    render: (props: CheckboxProps) => (
        <CheckboxGroup defaultValue={['ghostface', 'methodman']} size="md">
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
                <Checkbox {...props} value="ghostface">
                    Ghostface Killah
                </Checkbox>
                <Checkbox {...props} value="methodman">
                    Method Man
                </Checkbox>
                <Checkbox {...props} value="rza">
                    RZA
                </Checkbox>
            </Flex>
        </CheckboxGroup>
    )
};

export const Sizes: Story = {
    render: (props: CheckboxProps) => (
        <CheckboxGroup defaultValue={['sm', 'md', 'lg']}>
            <Flex
                align="flex-start"
                direction="column"
                gap={4}
                justify="flex-start"
            >
                <Checkbox {...props} size="sm">
                    Small Checkbox
                </Checkbox>
                <Checkbox {...props} size="md">
                    Medium Checkbox
                </Checkbox>
                <Checkbox {...props} size="lg">
                    Large Checkbox
                </Checkbox>
            </Flex>
        </CheckboxGroup>
    )
};

export const States: Story = {
    render: (props: CheckboxProps) => (
        <Flex
            align="flex-start"
            direction="column"
            gap={4}
            justify="flex-start"
        >
            <Checkbox {...props} isChecked={false} size="md">
                Unchecked
            </Checkbox>
            <Checkbox {...props} isChecked size="md">
                Checked
            </Checkbox>
            <Checkbox {...props} isDisabled size="md">
                Disabled Unchecked
            </Checkbox>
            <Checkbox {...props} isChecked isDisabled size="md">
                Disabled Checked
            </Checkbox>
            <Checkbox
                {...props}
                isChecked={false}
                isIndeterminate={false}
                size="md"
            >
                Indeterminate Unchecked
            </Checkbox>
            <Checkbox {...props} isChecked isIndeterminate size="md">
                Indeterminate Checked
            </Checkbox>
        </Flex>
    )
};
