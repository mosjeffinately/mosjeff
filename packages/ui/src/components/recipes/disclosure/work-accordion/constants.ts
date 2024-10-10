import type { AnimationProps } from 'framer-motion';

export const divAnimationProps: AnimationProps = {
    transition: {
        duration: 0.8
    },
    variants: {
        collapsed: {
            scale: 0.95
        },
        open: {
            scale: 1
        }
    }
};

export const sectionAnimationProps: AnimationProps = {
    animate: 'open',
    exit: 'collapsed',
    initial: 'collapsed',
    transition: {
        damping: 40,
        stiffness: 300,
        type: 'spring'
    },
    variants: {
        collapsed: {
            opacity: 0,
            height: 0
        },
        open: {
            opacity: 1,
            height: 'auto'
        }
    }
};
