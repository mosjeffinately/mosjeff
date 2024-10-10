import { PageLayout } from '@mosjeff/components/layouts/page-layout';
import { Footer } from '@mosjeff/components/sections/footer';
import { Header } from '@mosjeff/components/sections/header';
import type { Metadata } from 'next';
import { Albert_Sans, IBM_Plex_Mono, Poppins, Sanchez } from 'next/font/google';
import localFont from 'next/font/local';
import { Providers } from './providers';
import {
    albert,
    editorialSans,
    monumentExtended,
    objectSans,
    plexMono,
    poppins,
    sanchez,
    telegraf,
    woodland,
} from './fonts';

export const metadata: Metadata = {
    description: 'creating dope software since 2002',
    title: 'mosjeff - frontend engineer',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactElement;
}>) {
    return (
        <html lang="en">
            <body
                className={`${objectSans.variable} ${telegraf.variable} ${woodland.variable} ${albert.variable} ${editorialSans.variable} ${monumentExtended.variable} ${plexMono.variable} ${poppins.variable} ${sanchez.variable}`}
            >
                <Providers>
                    <PageLayout header={<Header />} main={children} footer={<Footer />} />
                </Providers>
            </body>
        </html>
    );
}
