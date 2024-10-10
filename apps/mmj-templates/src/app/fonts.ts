import { Albert_Sans, IBM_Plex_Mono, Poppins, Sanchez } from 'next/font/google';
import localFont from 'next/font/local';

export const albert = Albert_Sans({
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-albert_sans',
    weight: ['200', '300', '400', '500', '600', '700']
});

export const editorialSans = localFont({
    display: 'swap',
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
    variable: '--font-editorial_sans'
});

export const monumentExtended = localFont({
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
    variable: '--font-monument_extended'
});

export const mori = localFont({
    src: [
        {
            path: './fonts/mori/PPMori-ExtraBold.woff2',
            style: 'normal',
            weight: '800'
        },
        {
            path: './fonts/mori/PPMori-SemiBold.woff2',
            style: 'normal',
            weight: '600'
        },
        {
            path: './fonts/mori/PPMori-Regular.woff2',
            style: 'normal',
            weight: '400'
        },
        {
            path: './fonts/mori/PPMori-Book.woff2',
            style: 'normal',
            weight: '300'
        },
        {
            path: './fonts/mori/PPMori-ExtraLight.woff2',
            style: 'normal',
            weight: '100'
        }
    ],
    variable: '--font-mori'
});

export const plexMono = IBM_Plex_Mono({
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-ibm_plex_mono',
    weight: ['300', '400', '500', '600', '700']
});

export const poppins = Poppins({
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-poppins',
    weight: ['300', '400', '500', '600', '700']
});

export const sanchez = Sanchez({
    display: 'swap',
    subsets: ['latin', 'latin-ext'],
    variable: '--font-sanchez',
    weight: ['400']
});
