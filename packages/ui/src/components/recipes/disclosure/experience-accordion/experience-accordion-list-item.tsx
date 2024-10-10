import { Box, Collapse, Stack, useDisclosure } from '@chakra-ui/react';
import type { ExperienceData } from '../../../../types';
import { MotionBox } from '../../../atoms/layout';
import { ExperienceAccordionContent } from './experience-accordion-content';
import { ExperienceAccordionHeading } from './experience-accordion-heading';

export type ExperienceAccordionListItemProps = {
    data: ExperienceData;
    showBottomBorder?: boolean;
};

export function ExperienceAccordionListItem({
    data,
    showBottomBorder = false
}: ExperienceAccordionListItemProps): React.ReactElement {
    const { isOpen, onToggle } = useDisclosure();
    const { things } = data;

    return (
        <Stack
            align="center"
            border="xl"
            borderBottom={showBottomBorder ? 'xl' : 'none'}
            borderWidth={4}
            borderColor="olive.700"
            justify="center"
            spacing={0}
            w="full"
            sx={{
                '::-webkit-scrollbar': {
                    display: 'none'
                },
                scrollbarWidth: 'none'
            }}
        >
            <ExperienceAccordionHeading
                data={data}
                isOpen={isOpen}
                onToggle={onToggle}
            />
            <MotionBox
                h="full"
                //@ts-expect-error -- chakra issue
                transition={{
                    damping: 40,
                    opacity: 1,
                    stiffness: 300,
                    type: 'spring'
                }}
                w="full"
            >
                <ExperienceAccordionContent data={{ things }} />
            </MotionBox>
            <Box as={Collapse} animateOpacity in={isOpen} w="full">
                <ExperienceAccordionContent data={{ things }} />
            </Box>
        </Stack>
    );
}
