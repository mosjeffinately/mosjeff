import {
    Center,
    Flex,
    HStack,
    Progress,
    Stack,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text
} from '@chakra-ui/react';
import {
    databases,
    jsFrameworks,
    languages,
    scale,
    tools,
    uiFrameworks
} from '@mosjeff/utils/skills';

export function SkillzRatings(): React.ReactElement {
    return (
        <Center>
            <Stack justify="center" maxW="40rem" py={6} w="full">
                <Flex as={Tabs} direction="column" w="full">
                    <TabList border="none" justifyContent="space-evenly">
                        <Tab
                            _selected={{
                                borderBottomColor: 'olive.500',
                                borderBottomWidth: 2,
                                color: 'olive.700',
                                fontWeight: 'semibold'
                            }}
                        >
                            Languages
                        </Tab>
                        <Tab
                            _selected={{
                                borderBottomColor: 'olive.500',
                                borderBottomWidth: 2,
                                color: 'olive.700',
                                fontWeight: 'semibold'
                            }}
                        >
                            Javascript
                        </Tab>
                        <Tab
                            _selected={{
                                borderBottomColor: 'olive.500',
                                borderBottomWidth: 2,
                                color: 'olive.700',
                                fontWeight: 'semibold'
                            }}
                        >
                            UI/UX
                        </Tab>
                        <Tab
                            _selected={{
                                borderBottomColor: 'olive.500',
                                borderBottomWidth: 2,
                                color: 'olive.700',
                                fontWeight: 'semibold'
                            }}
                        >
                            Databases
                        </Tab>
                        <Tab
                            _selected={{
                                borderBottomColor: 'olive.500',
                                borderBottomWidth: 2,
                                color: 'olive.700',
                                fontWeight: 'semibold'
                            }}
                        >
                            Other Tools
                        </Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Stack spacing={4}>
                                {languages.map(({ score, title }) => {
                                    return (
                                        <Stack key={`languages-${title.split(' ').join('_')}`} spacing={2}>
                                            <HStack
                                                color="indigo.500"
                                                fontSize="sm"
                                                justify="space-between"
                                            >
                                                <Text>{title}</Text>
                                                <Text>{`${score}/${scale}`}</Text>
                                            </HStack>
                                            <Progress value={score * 10} />
                                        </Stack>
                                    );
                                })}
                            </Stack>
                        </TabPanel>
                        <TabPanel>
                            <Stack spacing={4}>
                                {jsFrameworks.map(({ score, title }) => {
                                    return (
                                        <Stack
                                            key={`jsFrameworks-${title.split(' ').join('_')}`}
                                            spacing={2}
                                        >
                                            <HStack
                                                color="indigo.500"
                                                fontSize="sm"
                                                justify="space-between"
                                            >
                                                <Text>{title}</Text>
                                                <Text>{`${score}/${scale}`}</Text>
                                            </HStack>
                                            <Progress value={score * 10} />
                                        </Stack>
                                    );
                                })}
                            </Stack>
                        </TabPanel>
                        <TabPanel>
                            <Stack spacing={4}>
                                {uiFrameworks.map(({ score, title }) => {
                                    return (
                                        <Stack
                                            key={`uiFrameworks-${title.split(' ').join('_')}`}
                                            spacing={2}
                                        >
                                            <HStack
                                                color="indigo.500"
                                                fontSize="sm"
                                                justify="space-between"
                                            >
                                                <Text>{title}</Text>
                                                <Text>{`${score}/${scale}`}</Text>
                                            </HStack>
                                            <Progress value={score * 10} />
                                        </Stack>
                                    );
                                })}
                            </Stack>
                        </TabPanel>
                        <TabPanel>
                            <Stack spacing={4}>
                                {databases.map(({ score, title }) => {
                                    return (
                                        <Stack
                                            key={`databases-${title.split(' ').join('_')}`}
                                            spacing={2}
                                        >
                                            <HStack
                                                color="indigo.500"
                                                fontSize="sm"
                                                justify="space-between"
                                            >
                                                <Text>{title}</Text>
                                                <Text>{`${score}/${scale}`}</Text>
                                            </HStack>
                                            <Progress value={score * 10} />
                                        </Stack>
                                    );
                                })}
                            </Stack>
                        </TabPanel>
                        <TabPanel>
                            <Stack spacing={4}>
                                {tools.map(({ score, title }) => {
                                    return (
                                        <Stack
                                            key={`tools-${title.split(' ').join('_')}`}
                                            spacing={2}
                                        >
                                            <HStack
                                                color="indigo.500"
                                                fontSize="sm"
                                                justify="space-between"
                                            >
                                                <Text>{title}</Text>
                                                <Text>{`${score}/${scale}`}</Text>
                                            </HStack>
                                            <Progress value={score * 10} />
                                        </Stack>
                                    );
                                })}
                            </Stack>
                        </TabPanel>
                    </TabPanels>
                </Flex>
            </Stack>
        </Center>
    );
}
