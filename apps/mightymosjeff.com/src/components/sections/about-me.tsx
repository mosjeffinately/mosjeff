'use client';
import { Center, Heading, Stack } from '@chakra-ui/react';
import { UserCard, UserData } from '@mosjeff/dope-design-system';

export function AboutMe(): React.ReactElement {
    const user: UserData = {
        avatar: '/assets/images/jeff-johnson-headshot.png',
        description:
            'frontend developer, hip hop enthusiast, purveyor of dad jokes.',
        email: 'jjohnso8@alumni.nd.edu',
        location: 'Syracuse, New York',
        name: 'Jeff Johnson'
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
