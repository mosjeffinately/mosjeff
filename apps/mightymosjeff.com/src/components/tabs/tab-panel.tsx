'use client';
import {
    TabPanel as ChakraTabPanel,
    SimpleGrid,
    type TabPanelsProps as ChakraTabPanelProps
} from '@chakra-ui/react';
import { ProgressCircle, ProgressData } from '@mosjeff/dope-design-system';
import { motion, Variants } from 'framer-motion';

export type TabPanelProps = ChakraTabPanelProps & {
    data: {
        progress: ProgressData;
        title: string;
    }[];
};

export function TabPanel({ data }: TabPanelProps): React.ReactElement {
    const variants: Variants = {
        hide: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delay: 0.3,
                delayChildren: 0.2,
                staggerChildren: 0.5
            }
        }
    };

    return (
        <ChakraTabPanel>
            <motion.div variants={variants}>
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
            </motion.div>
        </ChakraTabPanel>
    );
}
