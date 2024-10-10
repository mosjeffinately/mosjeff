'use client';

import { Container, Grid, GridItem, useColorModeValue } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export type MainLayoutProps = PropsWithChildren & {
    footer: React.ReactElement;
    header: React.ReactElement;
};

export function MainLayout({
    children,
    footer,
    header,
}: MainLayoutProps): React.ReactElement {
    const bgColor = useColorModeValue('yellow.50', 'blue.700');
    const color = useColorModeValue('gray.800', 'yellow.100');

    return (
        <Grid
            as={Container}
            bgColor={bgColor}
            centerContent
            color={color}
            gridColumnGap={0}
            gridRowGap={0}
            h="full"
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
                as="header"
                bgColor="brown.500"
                h="full"
                m={0}
                p={0}
                w="full"
            >
                {header}
            </GridItem>
            <GridItem area="main" as="main" h="full" m={0} p={0} w="full">
                {children}
            </GridItem>
            <GridItem area="footer" as="footer" h="full" m={0} p={0} w="full">
                {footer}
            </GridItem>
        </Grid>
    );
}
