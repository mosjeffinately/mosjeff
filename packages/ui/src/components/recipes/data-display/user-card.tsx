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
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
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
    const { avatar, description, email, location, name } = user;
    const { isOpen, onToggle } = useDisclosure();
    const [cream100] = useToken('colors', ['cream.100']);

    const onClickHandler = (site: string) => () => {
        if (site === 'twitter') {
            window.open('https://www.twitter.com/mightymosjeff', 'noopener');
        } else if (site === 'instagram') {
            window.open('https://www.instagram.com/mos_ffej', 'noopener');
        } else if (site === 'linkedin') {
            window.open('https://www.linkedin.com/in/jjohnso8', 'noopener');
        }
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
                            <IconButton
                                aria-label="x"
                                borderRadius="lg"
                                icon={<Icon as={FaXTwitter} fontSize="lg" />}
                                onClick={onClickHandler('twitter')}
                                size="md"
                                variant="gradient"
                            />
                            <IconButton
                                aria-label="x"
                                borderRadius="lg"
                                icon={<Icon as={FaInstagram} fontSize="lg" />}
                                onClick={onClickHandler('instagram')}
                                size="md"
                                variant="gradient"
                            />
                            <IconButton
                                aria-label="x"
                                borderRadius="lg"
                                icon={<Icon as={FaLinkedinIn} fontSize="lg" />}
                                onClick={onClickHandler('linkedIn')}
                                size="md"
                                variant="gradient"
                            />
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
                    >
                        currently seeking a frontend developer role.
                    </Text>
                    <Stack align="flex-start" justify="center" px={20}>
                        <Text
                            fontFamily="serif"
                            fontWeight="semibold"
                            fontSize="md"
                        >
                            {`I'm Jeff, a frontend software engineer.  I currently live in Syracuse, New York with my wife, two daughters, and our Chocolate Lab puppy.  I like building cool UIs.`}
                        </Text>
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
