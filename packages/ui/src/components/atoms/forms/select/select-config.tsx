import { Flex, HStack, Icon, Tag, Text } from '@chakra-ui/react';
import {
    type ChakraStylesConfig,
    type GroupBase,
    type OptionBase,
    type SelectComponentsConfig,
    chakraComponents
} from 'chakra-react-select';
import { PiCaretDownBold, PiXBold } from 'react-icons/pi';

export function getComponentsConfig<
    T extends OptionBase,
    IsMulti extends boolean
>(): SelectComponentsConfig<T, IsMulti, GroupBase<T>> {
    return {
        ClearIndicator: (props) => (
            <chakraComponents.ClearIndicator {...props}>
                <Icon as={PiXBold} fontSize="xl" />
            </chakraComponents.ClearIndicator>
        ),
        DropdownIndicator: (props) => (
            <chakraComponents.DropdownIndicator {...props}>
                <Icon as={PiCaretDownBold} fontSize="2xl" />
            </chakraComponents.DropdownIndicator>
        ),
        Menu: ({ children, ...props }) => (
            <chakraComponents.Menu {...props} menuPlacement="bottom">
                {children}
            </chakraComponents.Menu>
        ),
        MultiValueContainer: ({ children, ...props }) => (
            <Flex
                as={Tag}
                {...props}
                align="center"
                bgColor="gray.300"
                borderRadius="3rem"
                justify="center"
            >
                {children}
            </Flex>
        ),
        MultiValueRemove: (props) => (
            <chakraComponents.MultiValueRemove {...props}>
                <Icon as={PiXBold} fontSize="sm" />
            </chakraComponents.MultiValueRemove>
        ),
        Option: (props) => (
            <chakraComponents.Option {...props}>
                <HStack
                    align="center"
                    justify="flex-start"
                    px={4}
                    py={2}
                    w="full"
                >
                    <Text color="gray.800" fontSize="sm" fontWeight="semibold">
                        {props.label}
                    </Text>
                </HStack>
            </chakraComponents.Option>
        )
    };
}

export function getChakraStylesConfig<
    T extends OptionBase,
    IsMulti extends boolean
>(): ChakraStylesConfig<T, IsMulti, GroupBase<T>> {
    return {
        control: (provided) => ({
            ...provided,
            bgColor: 'white',
            borderRadius: 'lg',
            borderWidth: '1px',
            boxShadow: `0px 1px 2px 0px rgba(0, 0, 0, 0.05)`,
            fontSize: 'md',
            fontWeight: 'normal',
            minH: 10,
            _focusVisible: {
                bgColor: 'white',
                borderColor: 'yellow.600',
                borderStyle: 'solid',
                borderWidth: '0.09375rem',
                boxShadow: `0px 0px 0px 4px rgba(247, 223, 119, 0.40)`
            },
            _hover: {}
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            bgColor: 'white',
            color: 'gray.400',
            h: 10,
            w: 10
        }),
        indicatorSeparator: (provided) => ({
            ...provided,
            borderWidth: 0
        }),
        menuList: (provided) => ({
            ...provided,
            align: 'flex-start',
            borderRadius: 'lg',
            borderWidth: 0,
            boxShadow: '0px 4px 32px 0px rgba(0, 0, 0, 0.24)',
            bgColor: 'white',
            m: 0,
            p: 0,
            spacing: 0,
            zIndex: 'dropdown'
        }),
        multiValueLabel: (provided) => ({
            ...provided,
            color: 'gray.700',
            fontSize: 'xs',
            fontWeight: 'semibold',
            lineHeight: 'shorter',
            pl: 2,
            py: 1
        }),
        multiValue: (provided) => ({
            ...provided,
            borderRadius: '3rem'
        }),
        multiValueRemove: (provided) => ({
            ...provided,
            color: 'gray.700',
            opacity: 1
        }),
        option: (provided) => ({
            ...provided,
            transform: `translateZ(1px)`,
            _selected: {
                bgColor: 'yellow.50'
            }
        })
    };
}
