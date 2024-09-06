import {
    TabPanel as ChakraTabPanel,
    type TabPanelsProps as ChakraTabPanelProps
} from '@chakra-ui/react';
import { ProgressData, ProgressRating } from '@mosjeff/dope-design-system';

export type TabPanelProps = ChakraTabPanelProps & {
    data: {
        progress: ProgressData;
        title: string;
    }[];
};

export function TabPanel({ data }: TabPanelProps): React.ReactElement {
    return (
        <ChakraTabPanel>
            {data.map((datum) => {
                const { progress, title } = datum;

                return (
                    <ProgressRating
                        data={progress}
                        key={`progress-rating-${title}`}
                        title={title}
                    />
                );
            })}
        </ChakraTabPanel>
    );
}
