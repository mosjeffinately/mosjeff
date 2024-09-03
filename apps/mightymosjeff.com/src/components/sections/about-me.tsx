'use client';
import {
    Center,
    Heading,
    HStack,
    Link,
    List,
    ListIcon,
    ListItem,
    Stack,
    Text
} from '@chakra-ui/react';
import { FaBeer, FaHiking, FaLaugh } from 'react-icons/fa';
import { FaTree } from 'react-icons/fa6';
import { UserCard } from '../cards/user-card';

export function AboutMe(): React.ReactElement {
    return (
        <Center>
            <Stack justify="center" maxW="40rem" py={6} w="full">
                <UserCard />
                <Heading
                    as="h4"
                    color="gray.500"
                    fontFamily="monospace"
                    fontSize="3xl"
                    fontWeight={400}
                    pb={4}
                >
                    about me.
                </Heading>
                <Text color="gray.400" fontFamily="body" fontWeight={500}>
                    Born and raised just outside of Buffalo, New York, I spent
                    my youth playing soccer, baseball, basketball and street
                    hockey. During my formative years, I was spoiled by the
                    Bills going to four straight Super Bowls (
                    <Link
                        href="https://twitter.com/search?q=%23BillsMafia&src=typeahead_click"
                        isExternal
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        #billsmafia
                    </Link>
                    ). Buffalo is more than just the Goo Goo Dolls, blizzards
                    and Super Bowl losses - it's hardscrabble and scrappy spirit
                    helped forge my underdog mentality. It's the type of city
                    you can get behind and I believe I am that type of person as
                    well.
                </Text>
                <Text color="gray.400" fontFamily="body" fontWeight={500}>
                    Since before I can remember, I had always wanted to go to
                    Notre Dame. I was lucky enough to be accepted as an early
                    admission and matriculated there in the fall of 1998. Those
                    were somewhat lean years for the football team, but we
                    persevered through the cold winters and{' '}
                    <Link
                        isExternal
                        href="https://en.wikipedia.org/wiki/Time_in_Indiana#Time_zone_division_of_Indiana"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        weird time zone
                    </Link>{' '}
                    anyway. I studied Computer Engineering, although I preferred
                    the Computer Science part over the Electrical Engineering
                    (and still do). I graduated with honors and spent the
                    following summer back in Buffalo hunting in the difficult
                    post-9/11 job market.
                </Text>
                <Text color="gray.400" fontFamily="body" fontWeight={500}>
                    I have an amazing wife and two girls that I try to make
                    laugh at every opportunity. We also have a Chocolate Lab
                    puppy who loves taking things and being chased. Other than
                    chasing my dog, my hobbies include:
                </Text>
                <List color="gray.400" px={8} spacing={1}>
                    <ListItem>
                        <HStack>
                            <ListIcon as={FaLaugh} />
                            <Text>Dad Jokes</Text>
                        </HStack>
                    </ListItem>
                    <ListItem>
                        <HStack>
                            <ListIcon as={FaBeer} />
                            <Text>Pub Trivia</Text>
                        </HStack>
                    </ListItem>
                    <ListItem>
                        <HStack>
                            <ListIcon as={FaTree} />
                            <Text>Woodworking</Text>
                        </HStack>
                    </ListItem>
                    <ListItem>
                        <HStack>
                            <ListIcon as={FaHiking} />
                            <Text>Hiking</Text>
                        </HStack>
                    </ListItem>
                </List>
            </Stack>
        </Center>
    );
}
