import { PageLayout } from '@mosjeff/components/layouts/page-layout';
import { Footer } from '@mosjeff/components/sections/footer';
import { Header } from '@mosjeff/components/sections/header';
import type { Metadata } from 'next';
import { Albert_Sans, IBM_Plex_Mono, Poppins, Sanchez } from 'next/font/google';
import localFont from 'next/font/local';
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

const poppins = Poppins({
    subsets: ['latin'],
    variable: '--font-poppins',
    weight: ['300', '400', '500', '600', '700']
});

const editorialSans = localFont({
    src: [
        {
            path: './fonts/editorial-sans/PPEditorialSans-Heavy.woff2',
            style: 'normal',
            weight: '900'
        },
        {
            path: './fonts/editorial-sans/PPEditorialSans-Ultrabold.woff2',
            style: 'normal',
            weight: '800'
        },
        {
            path: './fonts/editorial-sans/PPEditorialSans-Medium.woff2',
            style: 'normal',
            weight: '500'
        },
        {
            path: './fonts/editorial-sans/PPEditorialSans-UltraLight.woff2',
            style: 'normal',
            weight: '200'
        },
        {
            path: './fonts/editorial-sans/PPEditorialSans-Thin.woff2',
            style: 'normal',
            weight: '100'
        },
        {
            path: './fonts/editorial-sans/PPEditorialSans-Thin.woff2',
            style: 'normal',
            weight: '900'
        },
        {
            path: './fonts/editorial-sans/PPEditorialSans-Thin.woff2',
            style: 'normal',
            weight: '900'
        },
        {
            path: './fonts/editorial-sans/PPEditorialSans-Thin.woff2',
            style: 'normal',
            weight: '900'
        },
        {
            path: './fonts/editorial-sans/PPEditorialSans-Thin.woff2',
            style: 'normal',
            weight: '900'
        }
    ],
    variable: '--font-editorial-sans'
});

const monumentExtended = localFont({
    src: [
        {
            path: './fonts/monument-extended/PPMonumentExtended-Black.woff2',
            style: 'normal',
            weight: '900'
        },
        {
            path: './fonts/monument-extended/PPMonumentExtended-Bold.woff2',
            style: 'normal',
            weight: '700'
        },
        {
            path: './fonts/monument-extended/PPMonumentExtended-Regular.woff2',
            style: 'normal',
            weight: '400'
        },
        {
            path: './fonts/monument-extended/PPMonumentExtended-Light.woff2',
            style: 'normal',
            weight: '300'
        },
        {
            path: './fonts/monument-extended/PPMonumentExtended-Thin.woff2',
            style: 'normal',
            weight: '100'
        }
    ],
    variable: '--font-monument-extended'
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
                className={`
                    albert.className,
                    editorialSans.className,
                    monumentExtended.className,
                    plexMono.className,
                    poppins.className $``}
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
