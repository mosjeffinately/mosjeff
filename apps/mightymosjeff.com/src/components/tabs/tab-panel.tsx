'use client';
import {
    TabPanel as ChakraTabPanel,
    SimpleGrid,
    type TabPanelsProps as ChakraTabPanelProps
} from '@chakra-ui/react';
import { ProgressCircle, ProgressData } from '@mosjeff/dope-design-system';

export type TabPanelProps = ChakraTabPanelProps & {
    data: {
        progress: ProgressData;
        title: string;
    }[];
};

export function TabPanel({ data }: TabPanelProps): React.ReactElement {
    return (
        <ChakraTabPanel>
            <SimpleGrid columns={3} spacing={10}>
                {data.map((datum) => {
                    const { progress, title } = datum;
                    const { scale, score } = progress;

                    const percentage = (score / scale) * 100;

                    const stroke =
                        percentage >= 70
                            ? 'olive.500'
                            : percentage >= 40
                              ? 'blue.500'
                              : 'pink.600';

                    return (
                        <ProgressCircle
                            scale={scale}
                            score={score}
                            size={28}
                            showScore
                            stroke={stroke}
                            strokeEmpty={stroke}
                            key={`progress-rating-${title}`}
                            title={title}
                        />
                    );
                })}
            </SimpleGrid>
        </ChakraTabPanel>
    );
}
