import { PageLayout } from '@mosjeff/components/layouts/page-layout';
import { Footer } from '@mosjeff/components/sections/footer';
import { Header } from '@mosjeff/components/sections/header';
import type { Metadata } from 'next';
import { Albert_Sans, IBM_Plex_Mono, Sanchez } from 'next/font/google';
import { Providers } from './providers';

const albert = Albert_Sans({
    subsets: ['latin'],
    variable: '--font-albert_sans',
    weight: ['200', '300', '400', '500', '600', '700']
});

const plexMono = IBM_Plex_Mono({
    subsets: ['latin'],
    variable: '--font-ibm_plex_mono',
    weight: ['300', '400', '500', '600', '700']
});

const sanchez = Sanchez({
    subsets: ['latin', 'latin-ext'],
    variable: '--font-sanchez',
    weight: ['400']
});

export const metadata: Metadata = {
    description: 'creating dope software since 2002',
    title: 'mosjeff - frontend engineer'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactElement;
}>) {
    return (
        <html lang="en">
            <body
                className={`${albert.className} ${plexMono.className} ${sanchez.className}`}
            >
                <Providers>
                    <PageLayout
                        header={<Header />}
                        main={children}
                        footer={<Footer />}
                    />
                </Providers>
            </body>
        </html>
    );
}
