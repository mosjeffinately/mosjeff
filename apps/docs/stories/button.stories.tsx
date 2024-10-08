import type { ButtonProps } from '@chakra-ui/react';
import { Button, Flex, Heading } from '@chakra-ui/react';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
    component: Button,
    argTypes: {
        size: {
            control: { type: 'radio' },
            options: ['sm', 'md', 'lg']
        },
        type: {
            control: { type: 'radio' },
            options: ['button', 'submit', 'reset']
        },
        variant: {
            control: { type: 'radio' },
            options: ['ghost', 'gradient', 'outline', 'solid']
        }
    },
    args: {
        children: `dope!`,
        type: 'button'
    },
    title: 'Atoms/Forms/Button'
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {};

export const All: Story = {
    render: (props: ButtonProps) => (
        <Flex
            align="flex-start"
            direction="column"
            gap={5}
            justify="center"
            p={8}
        >
            {['ghost', 'gradient', 'outline', 'solid'].map((variant) => (
                <Flex
                    align="flex-start"
                    direction="column"
                    gap={4}
                    key={`btn-${variant}-col`}
                >
                    <Heading as="h4" fontSize="2xl" textTransform="capitalize">
                        {variant}
                    </Heading>
                    <Flex
                        align="center"
                        direction="row"
                        gap={4}
                        justify="flex-start"
                        key={`btn-${variant}-row`}
                    >
                        {['sm', 'md', 'lg'].map((size) =>
                            getButton({ props, size, variant })
                        )}
                    </Flex>
                </Flex>
            ))}
        </Flex>
    )
};

export const Ghost: Story = {
    render: (props: ButtonProps) => {
        const disabledProps: ButtonProps = {
            ...props,
            isDisabled: true
        };

        return (
            <Flex align="flex-start" direction="column" gap={5} p={8}>
                <Flex align="center" direction="row" gap={4}>
                    {['sm', 'md', 'lg'].map((size) =>
                        getButton({ props, size, variant: 'ghost' })
                    )}
                </Flex>
                <Flex align="center" direction="row" gap={4}>
                    {['sm', 'md', 'lg'].map((size) =>
                        getButton({
                            props: disabledProps,
                            size,
                            variant: 'ghost'
                        })
                    )}
                </Flex>
            </Flex>
        );
    }
};

export const Gradient: Story = {
    render: (props: ButtonProps) => (
        <Flex align="center" direction="row" gap={4} px={8} py={8}>
            {['sm', 'md', 'lg'].map((size) =>
                getButton({ props, size, variant: 'gradient' })
            )}
        </Flex>
    )
};

export const Outline: Story = {
    render: (props: ButtonProps) => {
        const disabledProps: ButtonProps = {
            ...props,
            isDisabled: true
        }

        return (
            <Flex align="flex-start" direction="column" gap={5} p={8}>
                <Flex align="center" direction="row" gap={4}>
                    {['sm', 'md', 'lg'].map((size) =>
                        getButton({ props, size, variant: 'outline' })
                    )}
                </Flex>
                <Flex align="center" direction="row" gap={4}>
                    {['sm', 'md', 'lg'].map((size) =>
                        getButton({ props: disabledProps, size, variant: 'outline' })
                    )}
                </Flex>
            </Flex>
        );
    }
};

export const Solid: Story = {
    render: (props: ButtonProps) => {
        const disabledProps: ButtonProps = {
            ...props,
            isDisabled: true
        };

        return (
            <Flex align="flex-start" direction="column" gap={5} p={8}>
                <Flex align="center" direction="row" gap={4}>
                    {['sm', 'md', 'lg'].map((size) =>
                        getButton({ props, size, variant: 'solid' })
                    )}
                </Flex>
                <Flex align="center" direction="row" gap={4}>
                    {['sm', 'md', 'lg'].map((size) =>
                        getButton({
                            props: disabledProps,
                            size,
                            variant: 'solid'
                        })
                    )}
                </Flex>
            </Flex>
        );
    }
};

function getButton({
    props,
    size,
    variant
}: {
    props: ButtonProps;
    size: string;
    variant: string;
}): React.ReactElement {
    return (
        <Button
            {...props}
            key={`btn-${variant}-${size}`}
            onClick={action(`${size} ${variant} clicked`)}
            size={size}
            variant={variant}
        />
    );
}
