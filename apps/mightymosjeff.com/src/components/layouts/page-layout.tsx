import { Container, Grid, GridItem } from '@chakra-ui/react';

export type PageLayoutProps = {
    footer?: React.ReactElement;
    header: React.ReactElement;
    main?: React.ReactElement;
};

export function PageLayout({
    footer,
    header,
    main
}: PageLayoutProps): React.ReactElement {
    return (
        <Grid
            as={Container}
            centerContent
            gridColumnGap={0}
            gridRowGap={0}
            h="100vh"
            maxW="90rem"
            p={0}
            templateAreas={`
                    "header"
                    "main"
                    "footer"
                `}
            templateColumns={`1fr`}
            templateRows={`5rem 1fr 5rem`}
            w="full"
        >
            <GridItem
                area="header"
                bgColor="brown.500"
                h="full"
                m={0}
                p={0}
                w="full"
            >
                {header}
            </GridItem>
            <GridItem area="main" h="full" m={0} p={0} w="full">
                {main}
            </GridItem>
            <GridItem area="footer" h="full" m={0} p={0} w="full">
                {footer}
            </GridItem>
        </Grid>
    );
}
