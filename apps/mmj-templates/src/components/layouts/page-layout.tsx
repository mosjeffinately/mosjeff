'use client';
import { Container, Grid, GridItem } from '@chakra-ui/react';

type PageLayoutProps = {
    footer?: React.ReactElement;
    header: React.ReactElement;
    main?: React.ReactNode;
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
            maxW="120rem"
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
            <GridItem area="header" h="full" m={0} p={0} w="full">
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
