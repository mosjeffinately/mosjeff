'use client';
import { Button, CloseButton, Icon, VStack } from '@chakra-ui/react';
import { PiHouseBold, PiXBold } from 'react-icons/pi';

type MobileNavigationProps = {
    isOpen: boolean;
    onClose: () => void;
};

export function MobileNavigation({
    isOpen,
    onClose
}: MobileNavigationProps): React.ReactElement {
    return (
        <VStack
            bgColor="brown.500"
            display={isOpen ? 'flex' : 'none'}
            flexDirection="column"
            left={0}
            m={2}
            p={2}
            pb={4}
            pos="absolute"
            right={0}
            rounded="sm"
            shadow="sm"
            spacing={3}
            top={0}
        >
            <CloseButton
                aria-label="Close menu"
                justifySelf="self-start"
                onClick={onClose}
            >
                <Icon as={PiXBold} />
            </CloseButton>
            <Button
                leftIcon={<Icon as={PiHouseBold} />}
                size="md"
                variant="ghost"
                w="full"
            >
                Home
            </Button>
        </VStack>
    );
}
