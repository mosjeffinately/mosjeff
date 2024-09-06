import {
    HStack,
    Progress,
    type ProgressProps,
    Stack,
    type StackProps,
    Text
} from '@chakra-ui/react';
import type { ProgressData } from '../../../types';

export type ProgressRatingProps = ProgressProps & {
    data: ProgressData;
    spacing?: StackProps['spacing'];
    title: string;
};

export function ProgressRating({
    data,
    spacing = 2,
    title,
    ...props
}: ProgressRatingProps): React.ReactElement {
    const { score, scale } = data;

    return (
        <Stack spacing={spacing}>
            <HStack color="indigo.500" fontSize="sm" justify="space-between">
                <Text>{title}</Text>
                <Text>{`${score}/${scale}`}</Text>
            </HStack>
            <Progress value={score * 10} {...props} />
        </Stack>
    );
}
