import type { Metadata } from 'next';
import { Albert_Sans, IBM_Plex_Mono } from 'next/font/google';
import { Providers } from './providers';

const albert = Albert_Sans({
    subsets: ['latin'],
    variable: '--font-albert_sans',
    weight: ['300', '400', '500', '600', '700']
});

const plexMono = IBM_Plex_Mono({
    subsets: ['latin'],
    variable: '--font-ibm_plex_mono',
    weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
    description: 'creating dope software since 2002',
    title: 'mosjeff - frontend engineer'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${albert.className} ${plexMono.className}`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
