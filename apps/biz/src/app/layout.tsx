import { MainLayout } from '@/components/layouts/main-layout';
import { Header } from '@/components/recipes/header';
import { ColorMode } from '@chakra-ui/react';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { objectSans, telegraf, woodland } from './fonts';
import { Providers } from './providers';

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const cookiesList = cookies();
    const mode = cookiesList.get('chakra-ui-color-mode');
    const colorMode: ColorMode = mode?.value === 'dark' ? 'dark' : 'light';

    return (
        <html lang="en">
            <head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </head>
            <body className={`${objectSans.variable} ${telegraf.variable} ${woodland.variable}`}>
                <Providers colorMode={colorMode}>
                    <MainLayout footer={<div />} header={<Header />}>
                        {children}
                    </MainLayout>
                </Providers>
            </body>
        </html>
    );
}
