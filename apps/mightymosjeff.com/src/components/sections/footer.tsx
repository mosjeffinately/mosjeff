'use client';
import { ButtonGroup, Icon, IconButton, Stack } from '@chakra-ui/react';
import {
    PiInstagramLogoDuotone,
    PiLinkedinLogoDuotone,
    PiXLogoDuotone
} from 'react-icons/pi';

export function Footer(): React.ReactElement {
    return (
        <Stack
            align="center"
            bgColor="brown.500"
            h="full"
            justify="center"
            px={8}
            w="full"
        >
            <ButtonGroup spacing={20}>
                <IconButton
                    aria-label="twitter/x"
                    as="a"
                    color="olive.500"
                    cursor="pointer"
                    icon={<Icon as={PiXLogoDuotone} />}
                    // onClick={)_}
                    size="iconXl"
                    variant="ghost"
                    _active={{ color: 'olive.700' }}
                    _hover={{ color: 'olive.600' }}
                />
                <IconButton
                    aria-label="instagram"
                    color="olive.500"
                    icon={<Icon as={PiInstagramLogoDuotone} />}
                    // onClick={onHamburgerClickHandler}
                    size="iconXl"
                    variant="ghost"
                    _active={{ color: 'olive.700' }}
                    _hover={{ color: 'olive.600' }}
                />
                <IconButton
                    aria-label="linkedin"
                    color="olive.500"
                    icon={<Icon as={PiLinkedinLogoDuotone} />}
                    // onClick={onHamburgerClickHandler}
                    size="iconXl"
                    variant="ghost"
                    _active={{ color: 'olive.700' }}
                    _hover={{ color: 'olive.600' }}
                />
            </ButtonGroup>
        </Stack>
    );
}
