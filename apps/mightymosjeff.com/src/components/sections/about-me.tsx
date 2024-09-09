'use client';
import { Center, Heading, Stack } from '@chakra-ui/react';
import { UserCard, UserData } from '@mosjeff/dope-design-system';

export function AboutMe(): React.ReactElement {
    const user: UserData = {
        avatar: '/assets/images/jeff-johnson-headshot.png',
        email: 'jjohnso8@alumni.nd.edu',
        headline: 'Currently seeking a frontend developer role.',
        location: 'Syracuse, New York',
        name: 'Jeff Johnson',
        profile: {
            abstract: `I am a software engineer with more than 20 years of experience seeking a role with a focus on
            frontend development.  I am looking for an individual contributor role, but I do have a great deal of
            experience managing and mentoring junior developers.  I like creating pretty UIs, but I also like writing beautiful code.  I am a design system nerd.  I will make a passionate argument for what I believe is right, but I am also very open to the ideas of
            others.  I believe kindness and empathy are important.  We all make mistakes, and I take
            ownership of mine.  I think there should be more pairing sessions and fewer meetings.  I am not
            immune to imposter syndrome.  Standards are important, but so is flexibility.  I believe that the
            best lessons you can learn as a developer come through the vulnerability of a code review.`
        }
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
                    {`who am i (what's my name?).`}
                </Heading>
                <UserCard user={user} variant="outline" />
            </Stack>
        </Center>
    );
}
