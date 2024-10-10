import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Collapse,
    Heading,
    HStack,
    Icon,
    IconButton,
    Image,
    Link,
    Stack,
    Text,
    useDisclosure,
    useToken,
    type CardProps
} from '@chakra-ui/react';
import { PiEnvelopeDuotone, PiMapPinDuotone } from 'react-icons/pi';
import type { UserData } from '../../../types';

export type UserCardProps = CardProps & {
    user: UserData;
};

export function UserCard({
    size = 'md',
    user,
    variant = 'outline',
    ...props
}: UserCardProps): React.ReactElement {
    const { avatar, email, headline, location, name, profile } = user;
    const { isOpen, onToggle } = useDisclosure();
    const [cream100, gray700] = useToken('colors', ['cream.100', 'gray.700']);

    const onClickHandler = (url: string) => () => {
        window.open(url, 'noopener');
    };

    return (
        <Card
            bgColor="gray.500"
            color="cream.100"
            size={size}
            variant={variant}
            {...props}
        >
            <CardHeader>
                <HStack px={8} spacing={8}>
                    <Image
                        alignSelf="center"
                        alt={`${name} avatar`}
                        borderRadius="xl"
                        h={56}
                        src={avatar}
                    />
                    <Stack align="center" justify="center" py={8} spacing={4}>
                        <Heading
                            as="h4"
                            fontSize="3xl"
                            fontWeight="bold"
                            letterSpacing="wide"
                        >
                            {name}
                        </Heading>
                        <Stack
                            align="flex-start"
                            justify="flex-start"
                            px={12}
                            spacing={2}
                        >
                            <HStack spacing={2}>
                                <Icon as={PiMapPinDuotone} fontSize="xl" />
                                <Text fontSize="lg" fontWeight="medium">
                                    {location}
                                </Text>
                            </HStack>
                            <HStack spacing={2}>
                                <Icon as={PiEnvelopeDuotone} fontSize="xl" />
                                <Text
                                    as={Link}
                                    fontSize="lg"
                                    fontWeight="medium"
                                    href={`mailto:${email}`}
                                >
                                    {email}
                                </Text>
                            </HStack>
                        </Stack>
                        <HStack
                            align="center"
                            justify="center"
                            pt={6}
                            spacing={12}
                            w="full"
                        >
                            {user.socials
                                ? user.socials.map(
                                      ({ ariaLabel, icon, url }) => (
                                          <IconButton
                                              aria-label={ariaLabel}
                                              bgColor="gray.500"
                                              borderColor="cream.300"
                                              borderRadius="lg"
                                              borderWidth={1}
                                              color="cream.200"
                                              fontSize="xl"
                                              icon={icon}
                                              onClick={onClickHandler(url)}
                                              size="lg"
                                              variant="outline"
                                              _active={{
                                                  bgColor: `${gray700}00`,
                                                  color: 'cream.500'
                                              }}
                                              _hover={{
                                                  bgColor: 'gray.600',
                                                  color: 'cream.400'
                                              }}
                                          />
                                      )
                                  )
                                : null}
                        </HStack>
                    </Stack>
                </HStack>
            </CardHeader>
            <CardBody>
                <Stack
                    align="center"
                    justify="center"
                    px={8}
                    spacing={6}
                    w="full"
                >
                    <Text
                        bgClip="text"
                        bgGradient={`linear(to-l, pink.500, blue.500)`}
                        fontSize="2xl"
                        fontWeight="extrabold"
                        textTransform="lowercase"
                    >
                        {headline}
                    </Text>
                    <Stack align="flex-start" justify="center" px={16}>
                        {profile.abstract}
                        <Collapse in={isOpen} startingHeight="14rem">
                            <Text
                                color="cream.100"
                                fontFamily="body"
                                fontWeight="light"
                                noOfLines={isOpen ? undefined : 9}
                                sx={{
                                    height: isOpen ? '100%' : '14rem',
                                    maskImage: isOpen
                                        ? undefined
                                        : `linear-gradient(to bottom, ${cream100} 80%, transparent 100%)`
                                }}
                            >
                                {`Born and raised just outside of Buffalo, New York, I spent
                    my youth playing soccer, baseball, basketball and street
                    hockey. During my formative years, I was spoiled by the
                    Bills going to four straight Super Bowls (`}
                                <Link
                                    href="https://twitter.com/search?q=%23BillsMafia&src=typeahead_click"
                                    isExternal
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    #billsmafia
                                </Link>
                                {`). Buffalo is more than just the Goo Goo Dolls, blizzards
                    and Super Bowl losses - it's hardscrabble and scrappy spirit
                    helped forge my underdog mentality. It's the type of city
                    you can get behind and I believe I am that type of person as
                    well.`}
                                <br />
                                <br />
                                {`Since before I can remember, I had always wanted
                                to go to Notre Dame. I was lucky enough to be
                                accepted as an early admission and matriculated
                                there in the fall of 1998. Those were somewhat
                                lean years for the football team, but we
                                persevered through the cold winters and `}
                                <Link
                                    isExternal
                                    href="https://en.wikipedia.org/wiki/Time_in_Indiana#Time_zone_division_of_Indiana"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {`weird time zone`}
                                </Link>
                                {` anyway. I studied Computer Engineering, although
                                I preferred the Computer Science part over the
                                Electrical Engineering (and still do). I
                                graduated with honors and spent the following
                                summer back in Buffalo hunting in the difficult
                                post-9/11 job market.`}
                                <br />
                                <br />
                                {`Other than chasing my dog, my
                                hobbies include: Dad jokes, pub trivia, woodworking, and hiking.`}
                            </Text>
                        </Collapse>
                        <Button size="sm" onClick={onToggle} variant="solid">
                            {`See ${isOpen ? 'Less' : 'More'}`}
                        </Button>
                    </Stack>
                </Stack>
            </CardBody>
        </Card>
    );
}
