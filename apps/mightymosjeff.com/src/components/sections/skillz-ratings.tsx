import {
    Flex,
    Tab,
    TabList,
    TabPanels,
    TabProps,
    Tabs
} from '@chakra-ui/react';
import {
    databases,
    javaFrameworks,
    jsFrameworks,
    languages,
    scale,
    tools,
    uiFrameworks
} from '@mosjeff/utils/skills';
import { TabPanel } from '../tabs/tab-panel';

const tabProps: Partial<TabProps> = {
    _selected: {
        borderBottomColor: 'olive.500',
        borderBottomWidth: 2,
        color: 'olive.700',
        fontWeight: 'semibold'
    }
};

export function SkillzRatings(): React.ReactElement {
    return (
        <Flex as={Tabs} direction="column" isLazy w="full">
            <TabList border="none" justifyContent="space-evenly">
                <Tab {...tabProps}>Languages</Tab>
                <Tab {...tabProps}>JS/TS</Tab>
                <Tab {...tabProps}>UI/UX</Tab>
                <Tab {...tabProps}>Java</Tab>
                <Tab {...tabProps}>Databases</Tab>
                <Tab {...tabProps}>Other Tools</Tab>
            </TabList>
            <TabPanels>
                {[
                    languages,
                    jsFrameworks,
                    uiFrameworks,
                    javaFrameworks,
                    databases,
                    tools
                ].map((category, index) => (
                    <TabPanel
                        data={category.map((item) => ({
                            progress: { scale, score: item.score },
                            title: item.title
                        }))}
                        key={`tabpanel-${index}`}
                    />
                ))}
            </TabPanels>
        </Flex>
    );
}
