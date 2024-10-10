import type { Metadata } from 'next';
import {
    albert,
    editorialSans,
    monumentExtended,
    plexMono,
    poppins,
    sanchez
} from './fonts';

export const metadata: Metadata = {
    description: 'creating dope software since 2002',
    title: 'mmj incorporated - template designs'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactElement;
}>) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
            </head>
            <body
                className={`${albert.variable} ${editorialSans.variable} ${monumentExtended.variable} ${plexMono.variable} ${poppins.variable} ${sanchez.variable}`}
            >
                <main>{children}</main>
            </body>
        </html>
    );
}
