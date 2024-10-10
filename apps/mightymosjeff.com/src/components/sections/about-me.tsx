'use client';
import { Center, Heading, Icon, Stack, Text } from '@chakra-ui/react';
import { UserCard, UserData } from '@mosjeff/dope-design-system';
import {
    PiInstagramLogoDuotone,
    PiLinkedinLogoDuotone,
    PiXLogoDuotone
} from 'react-icons/pi';

export function AboutMe(): React.ReactElement {
    const user: UserData = {
        avatar: '/assets/images/jeff-johnson-headshot.png',
        email: 'jjohnso8@alumni.nd.edu',
        headline: 'Currently seeking a frontend developer role.',
        location: 'Syracuse, New York',
        name: 'Jeff Johnson',
        profile: {
            abstract: (
                <Text fontFamily="serif" fontWeight="semibold" fontSize="lg">
                    {`Hello 👋.  I'm Jeff.  My kids and their friends call me Ffej, which I rather enjoy.  I live in
                    upstate NY with my wife, aforementioned kids and our Chocolate Lab puppy.  I love building stuff.
                    I am a design system nerd 🤓.  I believe kindness and empathy are really important (be nice everybody).`}
                </Text>
            ),
            article: (
                <Text fontFamily="body" fontWeight="normal" fontSize="md">
                    {`Like my native Buffalo 🦬, I'm a bit of a scrappy`}
                </Text>
            )
        },
        socials: [
            {
                ariaLabel: 'mightmosjeff on X',
                icon: <Icon as={PiXLogoDuotone} />,
                url: 'https://www.twitter.com/mightymosjeff'
            },
            {
                ariaLabel: 'mos_ffej on Instagram',
                icon: <Icon as={PiInstagramLogoDuotone} />,
                url: 'https://www.instagram.com/mos_ffej'
            },
            {
                ariaLabel: 'Jeff Johnson on LinkedIn',
                icon: <Icon as={PiLinkedinLogoDuotone} />,
                url: 'https://www.linkedin.com/in/jjohnso8'
            }
        ]
    };

    return (
        <Center>
            <Stack justify="center" maxW="40rem" py={6} spacing={6} w="full">
                <Heading
                    as="h4"
                    color="gray.500"
                    fontFamily="monospace"
                    fontSize="3xl"
                    fontWeight={400}
                >
                    {`who am i (what's my name?). - snoop doggy dogg`}
                </Heading>
                <UserCard user={user} variant="outline" />
            </Stack>
        </Center>
    );
}
