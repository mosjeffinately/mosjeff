import {
    Divider,
    Flex,
    FormControl,
    FormLabel,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Stack,
    type InputProps
} from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import {
    PiBedBold,
    PiBridgeBold,
    PiMicrophoneBold,
    PiVinylRecordBold
} from 'react-icons/pi';

const meta: Meta<typeof Input> = {
    component: Input,
    argTypes: {
        size: {
            control: { type: 'radio' },
            options: ['sm', 'md', 'lg']
        }
    },
    title: 'Atoms/Forms/Input'
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Basic: Story = {
    render: (props: InputProps) => <Input {...props} w="50%" />
};

export const Sizes: Story = {
    args: {
        placeholder: 'Ch-ch-ch-check it check it out'
    },
    render: (props: InputProps) => (
        <Flex
            align="flex-start"
            direction="column"
            gap={4}
            justify="flex-start"
            w="50%"
        >
            <FormControl size="sm">
                <FormLabel>Small</FormLabel>
                <Stack spacing={3}>
                    <Input {...props} size="sm" />
                    <InputGroup size="sm">
                        <InputLeftElement>
                            <Icon as={PiVinylRecordBold} />
                        </InputLeftElement>
                        <Input {...props} />
                    </InputGroup>
                    <InputGroup size="sm">
                        <InputRightElement>
                            <Icon as={PiMicrophoneBold} />
                        </InputRightElement>
                        <Input {...props} />
                    </InputGroup>
                </Stack>
            </FormControl>
            <Divider />
            <FormControl size="md">
                <FormLabel>Medium</FormLabel>
                <Stack spacing={3}>
                    <Input {...props} size="md" />
                    <InputGroup size="md">
                        <InputLeftElement>
                            <Icon as={PiVinylRecordBold} />
                        </InputLeftElement>
                        <Input {...props} />
                    </InputGroup>
                    <InputGroup size="md">
                        <InputRightElement>
                            <Icon as={PiMicrophoneBold} />
                        </InputRightElement>
                        <Input {...props} />
                    </InputGroup>
                </Stack>
            </FormControl>
            <Divider />
            <FormControl size="lg">
                <FormLabel>Large</FormLabel>
                <Stack spacing={3}>
                    <Input {...props} size="lg" />
                    <InputGroup size="lg">
                        <InputLeftElement>
                            <Icon as={PiVinylRecordBold} />
                        </InputLeftElement>
                        <Input {...props} />
                    </InputGroup>
                    <InputGroup size="lg">
                        <InputRightElement>
                            <Icon as={PiMicrophoneBold} />
                        </InputRightElement>
                        <Input {...props} />
                    </InputGroup>
                </Stack>
            </FormControl>
        </Flex>
    )
};

export const States: Story = {
    render: (props: InputProps) => (
        <Flex
            align="flex-start"
            direction="column"
            gap={4}
            justify="flex-start"
            w="50%"
        >
            <FormControl>
                <FormLabel>Default</FormLabel>
                <Input {...props} placeholder="You Gotta Fight..." size="md" />
            </FormControl>
            <FormControl isDisabled>
                <FormLabel>Disabled</FormLabel>
                <Input {...props} placeholder="For Your Right..." size="md" />
            </FormControl>
            <FormControl isInvalid>
                <FormLabel>Invalid</FormLabel>
                <Input {...props} placeholder="To Paaaaaaaarty!" size="md" />
            </FormControl>
            <FormControl>
                <FormLabel>Left Icon</FormLabel>
                <InputGroup>
                    <InputLeftElement>
                        <Icon as={PiBedBold} />
                    </InputLeftElement>
                    <Input {...props} placeholder="No Sleep..." size="md" />
                </InputGroup>
            </FormControl>
            <FormControl>
                <FormLabel>Right Icon</FormLabel>
                <InputGroup>
                    <InputRightElement color="gray.300" h="full" mr={1}>
                        <Icon as={PiBridgeBold} />
                    </InputRightElement>
                    <Input
                        {...props}
                        placeholder="Til Brooklyn!!!!"
                        size="md"
                    />
                </InputGroup>
            </FormControl>
        </Flex>
    )
};
