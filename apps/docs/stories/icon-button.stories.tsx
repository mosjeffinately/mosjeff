import type { IconButtonProps } from '@chakra-ui/react';
import { Flex, Heading, Icon, IconButton } from '@chakra-ui/react';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { PiGhostBold, PiMicrophoneStageBold, PiRadioBold, PiSunglasses, PiVinylRecordBold } from 'react-icons/pi';

const meta: Meta<typeof IconButton> = {
    component: IconButton,
    argTypes: {
        size: {
            control: { type: 'radio' },
            options: ['iconSm', 'iconMd', 'iconLg', 'iconXl']
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
    title: 'Atoms/Forms/IconButton'
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Basic: Story = {
    args: {
        icon: <Icon as={PiSunglasses} />,
        size: 'iconMd'
    }
};

export const All: Story = {
    args: {
        icon: <Icon as={PiVinylRecordBold} />
    },
    render: (props: IconButtonProps) => (
        <Flex
            align="flex-start"
            direction="column"
            gap={5}
            justify="center"
            p={8}
        >
            {['ghost', 'outline', 'solid'].map((variant) => (
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
                        {['iconSm', 'iconMd', 'iconLg', 'iconXl'].map((size) =>
                            getButton({ props, size, variant })
                        )}
                    </Flex>
                </Flex>
            ))}
        </Flex>
    )
};

export const Ghost: Story = {
    args: {
        icon: <Icon as={PiGhostBold} />
    },
    render: (props: IconButtonProps) => {
        const disabledProps: IconButtonProps = {
            ...props,
            isDisabled: true
        };

        return (
            <Flex align="flex-start" direction="column" gap={5} p={8}>
                <Flex align="center" direction="row" gap={4}>
                    {['iconSm', 'iconMd', 'iconLg', 'iconXl'].map((size) =>
                        getButton({ props, size, variant: 'ghost' })
                    )}
                </Flex>
                <Flex align="center" direction="row" gap={4}>
                    {['iconSm', 'iconMd', 'iconLg', 'iconXl'].map((size) =>
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

export const Outline: Story = {
    args: {
        icon: <Icon as={PiRadioBold} />
    },
    render: (props: IconButtonProps) => {
        const disabledProps: IconButtonProps = {
            ...props,
            isDisabled: true
        };

        return (
            <Flex align="flex-start" direction="column" gap={5} p={8}>
                <Flex align="center" direction="row" gap={4}>
                    {['iconSm', 'iconMd', 'iconLg', 'iconXl'].map((size) =>
                        getButton({ props, size, variant: 'outline' })
                    )}
                </Flex>
                <Flex align="center" direction="row" gap={4}>
                    {['iconSm', 'iconMd', 'iconLg', 'iconXl'].map((size) =>
                        getButton({
                            props: disabledProps,
                            size,
                            variant: 'outline'
                        })
                    )}
                </Flex>
            </Flex>
        );
    }
};

export const Solid: Story = {
    args: {
        icon: <Icon as={PiMicrophoneStageBold} />
    },
    render: (props: IconButtonProps) => {
        const disabledProps: IconButtonProps = {
            ...props,
            isDisabled: true
        };

        return (
            <Flex align="flex-start" direction="column" gap={5} p={8}>
                <Flex align="center" direction="row" gap={4}>
                    {['iconSm', 'iconMd', 'iconLg', 'iconXl'].map((size) =>
                        getButton({ props, size, variant: 'solid' })
                    )}
                </Flex>
                <Flex align="center" direction="row" gap={4}>
                    {['iconSm', 'iconMd', 'iconLg', 'iconXl'].map((size) =>
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
    props: IconButtonProps;
    size: string;
    variant: string;
}): React.ReactElement {
    return (
        <IconButton
            {...props}
            aria-label="Icon Button"
            key={`btn-${variant}-${size}`}
            onClick={action(`${size} ${variant} clicked`)}
            size={size}
            variant={variant}
        />
    );
}
