import { Box, chakra, Flex, Text, useToken } from '@chakra-ui/react';
import { motion, type Transition, type Variants } from 'framer-motion';

export type ProgressCircleProps = {
    delay?: number;
    duration?: number;
    scale: number;
    score: number;
    showScore?: boolean;
    size?: number;
    stroke?: string;
    strokeEmpty?: string;
    strokeEmptyOpacity?: number;
    strokeWidth?: number;
    title: string;
};

export function ProgressCircle({
    delay,
    duration,
    scale,
    score,
    showScore,
    size = 24,
    stroke = 'brown.500',
    strokeEmpty = 'brown.500',
    strokeEmptyOpacity = 0.25,
    strokeWidth = 6,
    title
}: ProgressCircleProps): React.ReactElement {
    const [sizeInRem] = useToken('sizes', [`${size}`]);

    const radius = 45;
    const circumference = Math.ceil(2 * Math.PI * radius);

    const percentage = scale > 0 ? Math.round((score / scale) * 100) : 0;

    const fillPercentage = Math.abs(
        Math.ceil((circumference / 100) * (percentage - 100))
    );

    const transition: Transition = {
        delay,
        duration,
        ease: 'easeIn'
    };

    const variants: Variants = {
        hide: {
            strokeDashoffset: circumference,
            transition
        },
        show: {
            strokeDashoffset: fillPercentage,
            transition
        }
    };

    return (
        <Flex
            align="center"
            direction="column"
            gap={4}
            justify="center"
            w="full"
        >
            <Text color="indigo.500" fontSize="lg">
                {title}
            </Text>

            <Flex align="center" justify="center" w="full">
                {showScore ? (
                    <Text
                        color="brown.500"
                        fontSize="lg"
                        fontWeight="semibold"
                        position="absolute"
                    >
                        {`${score.toFixed(1)}/${scale}`}
                    </Text>
                ) : null}
                <Box h={size}>
                    <chakra.svg
                        h={size}
                        version="1.1"
                        viewBox="0 0 100 100"
                        w={size}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <chakra.circle
                            cx={50}
                            cy={50}
                            fill="transparent"
                            r={radius}
                            stroke={strokeEmpty}
                            strokeOpacity={strokeEmptyOpacity}
                            strokeWidth={6}
                        />
                    </chakra.svg>
                    <chakra.svg
                        h={size}
                        style={{
                            marginTop: `-${sizeInRem}`,
                            overflow: 'visible',
                            position: 'absolute',
                            transform: 'rotate(-90deg)'
                        }}
                        version="1.1"
                        viewBox="0 0 100 100"
                        w={size}
                    >
                        <chakra.circle
                            animate="show"
                            as={motion.circle}
                            cx={50}
                            cy={50}
                            fill="transparent"
                            initial="hide"
                            key={`circle-progress-${title}`}
                            r={radius}
                            stroke={stroke}
                            strokeDasharray={circumference}
                            strokeDashoffset={fillPercentage}
                            strokeWidth={strokeWidth}
                            variants={variants}
                        />
                    </chakra.svg>
                </Box>
            </Flex>
        </Flex>
    );
}
