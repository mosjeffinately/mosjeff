import {
    Heading as ChakraHeading,
    Flex,
    Grid,
    GridItem
} from '@chakra-ui/react';

export const Heading = (): React.ReactElement => {
    return (
        <Grid display="subgrid" templateAreas={'title title title info'}>
            <GridItem area="title" fontFamily="var(--font-poppins)" m={0} p={0}>
                <Flex align="center" justify="center" m={0} p={0}>
                    <ChakraHeading as="h1" fontSize="6xl" fontWeight="bold">
                        Jeff Johnson
                    </ChakraHeading>
                </Flex>
            </GridItem>
        </Grid>
    );
};
