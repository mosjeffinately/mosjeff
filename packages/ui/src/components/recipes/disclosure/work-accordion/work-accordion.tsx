import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Flex,
    Icon,
    List,
    ListIcon,
    ListItem,
    Text,
    type AccordionProps
} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { PiDiamondFill } from 'react-icons/pi';
import type { ExperienceData } from '../../../../types';
import { BoldPlusIcon } from '../../../atoms/icons';
import { divAnimationProps, sectionAnimationProps } from './constants';

export type WorkAccordionProps = AccordionProps & {
    data: ExperienceData[];
};

export const WorkAccordion = ({
    data,
    ...props
}: WorkAccordionProps): React.ReactElement => {
    return (
        <Accordion
            allowToggle
            color="olive.700"
            m={0}
            pb={{ base: 4, sm: 4, lg: 6 }}
            pt={{ base: 2, sm: 4, lg: 6 }}
            px={0}
            spacing={{ base: 4, md: 6 }}
            w="full"
            {...props}
        >
            {data.map(({ company, id, location, things, timeline, title }) => (
                <AccordionItem
                    borderColor="olive.800"
                    borderTop="4px solid"
                    borderX="4px solid"
                    _last={{
                        borderBottom: '4px solid'
                    }}
                    _notLast={{
                        borderBottom: 'none'
                    }}
                >
                    {({ isExpanded }) => (
                        <>
                            <Flex
                                align="center"
                                as="h2"
                                gap={6}
                                justify="flex-start"
                                m={0}
                                px={{ base: 2, md: 4, lg: 6 }}
                            >
                                <Flex
                                    align="center"
                                    as={Text}
                                    basis={{ base: '33%' }}
                                    fontFamily="extended"
                                    fontSize={{
                                        base: '4xl',
                                        md: '4xl',
                                        lg: '6xl'
                                    }}
                                    fontWeight="black"
                                    grow={1}
                                    justify="flex-start"
                                    m={0}
                                    noOfLines={1}
                                    p={0}
                                    textTransform="lowercase"
                                >
                                    {timeline}
                                </Flex>
                                <Flex
                                    align="center"
                                    as={Text}
                                    basis={{ base: '20%' }}
                                    fontFamily="serif"
                                    fontSize="2xl"
                                    fontWeight="light"
                                    justify="flex-start"
                                    m={0}
                                    noOfLines={1}
                                    p={0}
                                >
                                    {company}
                                </Flex>
                                <Flex
                                    align="center"
                                    as={Text}
                                    basis={{ base: '22%' }}
                                    fontFamily="editorial"
                                    fontSize="xl"
                                    fontWeight="light"
                                    justify="flex-start"
                                    m={0}
                                    p={0}
                                >
                                    {title}
                                </Flex>
                                <Flex
                                    align="center"
                                    as={Text}
                                    basis={{ base: '20%' }}
                                    fontFamily="editorial"
                                    fontSize="xl"
                                    fontWeight="light"
                                    justify="flex-start"
                                    m={0}
                                    p={0}
                                >
                                    {location}
                                </Flex>
                                <Flex
                                    align="center"
                                    basis={{ base: 10 }}
                                    justify="flex-start"
                                    m={0}
                                    p={0}
                                    w={10}
                                >
                                    <AccordionButton
                                        animate={{
                                            rotate: isExpanded ? 45 : 0
                                        }}
                                        aria-label="accordion button"
                                        as={motion.button}
                                        h={10}
                                        key={`icon-btn-${id}`}
                                        m={0}
                                        p={0}
                                        w={10}
                                        _hover={{
                                            bgColor: 'transparent'
                                        }}
                                    >
                                        <Icon
                                            as={BoldPlusIcon}
                                            fontSize="2.5rem"
                                        />
                                    </AccordionButton>
                                </Flex>
                            </Flex>
                            {isExpanded ? (
                                <AccordionPanel
                                    bgGradient={`linear(to-br, brown.500 60%, brown.300 100%)`}
                                    borderColor="olive.800"
                                    borderTop="4px solid"
                                    m={0}
                                    p={{ base: 2, md: 4, lg: 6 }}
                                >
                                    <AnimatePresence mode="wait">
                                        <motion.section
                                            {...sectionAnimationProps}
                                        >
                                            <motion.div {...divAnimationProps}>
                                                <List
                                                    color="olive.700"
                                                    fontFamily="editorial"
                                                    fontSize="xl"
                                                    w="full"
                                                >
                                                    {things.map((datum) => (
                                                        <Flex
                                                            align="baseline"
                                                            as={ListItem}
                                                            gap={2}
                                                            justify="flex-start"
                                                            w="full"
                                                        >
                                                            <ListIcon
                                                                as={
                                                                    PiDiamondFill
                                                                }
                                                                fontSize="xs"
                                                            />
                                                            {datum}
                                                        </Flex>
                                                    ))}
                                                </List>
                                            </motion.div>
                                        </motion.section>
                                    </AnimatePresence>
                                </AccordionPanel>
                            ) : null}
                        </>
                    )}
                </AccordionItem>
            ))}
        </Accordion>
    );
};
