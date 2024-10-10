import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';

export const MotionBox = chakra(motion.div, {
    shouldForwardProp: isValidMotionProp
});

export const MotionButton = chakra(motion.button, {
    shouldForwardProp: isValidMotionProp
});

export const MotionSection = chakra(motion.section, {
    shouldForwardProp: (prop) =>
        isValidMotionProp(prop) || shouldForwardProp(prop)
});
