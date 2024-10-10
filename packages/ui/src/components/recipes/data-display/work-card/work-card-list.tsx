import { Stack } from '@chakra-ui/react';
import type { ExperienceData } from '../../../../types';
import { WorkCard } from './work-card';

export type WorkCardListProps = {
    data: ExperienceData[];
};

export const WorkCardList = ({
    data
}: WorkCardListProps): React.ReactElement => (
    <Stack align="center" justify="center" spacing={4} w="full">
        {data.map((item) => (
            <WorkCard data={item} />
        ))}
    </Stack>
);
