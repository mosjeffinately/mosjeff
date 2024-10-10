import type { StackProps } from '@chakra-ui/react';
import { Center, Stack } from '@chakra-ui/react';
import type { ExperienceData } from '../../../../types';
import { ExperienceAccordionListItem } from './experience-accordion-list-item';

export type ExperienceAccordionListProps = StackProps & {
    data: ExperienceData[];
};

export const ExperienceAccordionList = ({ data, ...props }: ExperienceAccordionListProps): React.ReactElement => {
    return (
        <Center>
            <Stack
                align="center"
                h="full"
                justify="center"
                maxW={{
                    base: '23rem',
                    sm: '46rem',
                    md: '62rem',
                    lg: '77.5rem',
                }}
                minW={{
                    base: '22.5rem',
                    sm: '29rem',
                    md: '46rem',
                    lg: '77.5rem',
                }}
                spacing={{ base: 2, md: 0 }}
                {...props}
            >
                {data.map((datum, index) => (
                    <ExperienceAccordionListItem
                        data={datum}
                        key={`accordion-${datum.company}`}
                        showBottomBorder={index === data.length - 1}
                    />
                ))}
            </Stack>
        </Center>
    );
};
