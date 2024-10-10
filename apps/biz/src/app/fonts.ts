import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';

export const dreamboat = localFont({
    display: 'swap',
    src: [
        {
            path: './fonts/dreamboat/TAYDreamboat.otf',
            style: 'normal',
            weight: '400',
        },
        {
            path: './fonts/dreamboat/TAYDreamboat-Thin.otf',
            style: 'normal',
            weight: '100',
        },
    ],
});

export const flapjack = localFont({
    display: 'swap',
    src: [
        {
            path: './fonts/flapjack/TAYFlapjack.otf',
            style: 'normal',
            weight: '400',
        },
    ],
});

export const objectSans = localFont({
    display: 'swap',
    src: [
        {
            path: './fonts/object-sans/PPObjectSans-Heavy.woff2',
            style: 'normal',
            weight: '800',
        },
        {
            path: './fonts/object-sans/PPObjectSans-Bold.woff2',
            style: 'normal',
            weight: '700',
        },
        {
            path: './fonts/object-sans/PPObjectSans-Regular.woff2',
            style: 'normal',
            weight: '400',
        },
        {
            path: './fonts/object-sans/PPObjectSans-Thin.woff2',
            style: 'normal',
            weight: '100',
        },
    ],
    variable: '--font-object_sans',
});

export const pangramSans = localFont({
    display: 'swap',
    src: [
        {
            path: './fonts/pangram-sans/PPPangramSans-Extrabold.woff2',
            style: 'normal',
            weight: '800',
        },
        {
            path: './fonts/pangram-sans/PPPangramSans-Bold.woff2',
            style: 'normal',
            weight: '700',
        },
        {
            path: './fonts/pangram-sans/PPPangramSans-Semibold.woff2',
            style: 'normal',
            weight: '600',
        },
        {
            path: './fonts/pangram-sans/PPPangramSans-Medium.woff2',
            style: 'normal',
            weight: '500',
        },
        {
            path: './fonts/pangram-sans/PPPangramSans-Regular.woff2',
            style: 'normal',
            weight: '400',
        },
        {
            path: './fonts/pangram-sans/PPPangramSans-Light.woff2',
            style: 'normal',
            weight: '300',
        },
        {
            path: './fonts/pangram-sans/PPPangramSans-Thin.woff2',
            style: 'normal',
            weight: '100',
        },
    ],
    variable: '--font-pangram_sans_rounded',
});

export const pangramSansRounded = localFont({
    display: 'swap',
    src: [
        {
            path: './fonts/pangram-sans-rounded/PPPangramSansRounded-Extrabold.woff2',
            style: 'normal',
            weight: '800',
        },
        {
            path: './fonts/pangram-sans-rounded/PPPangramSansRounded-Bold.woff2',
            style: 'normal',
            weight: '700',
        },
        {
            path: './fonts/pangram-sans-rounded/PPPangramSansRounded-Medium.woff2',
            style: 'normal',
            weight: '500',
        },
        {
            path: './fonts/pangram-sans-rounded/PPPangramSansRounded-Regular.woff2',
            style: 'normal',
            weight: '400',
        },
        {
            path: './fonts/pangram-sans-rounded/PPPangramSansRounded-Light.woff2',
            style: 'normal',
            weight: '300',
        },
        {
            path: './fonts/pangram-sans-rounded/PPPangramSansRounded-Thin.woff2',
            style: 'normal',
            weight: '100',
        },
    ],
    variable: '--font-pangram_sans_rounded',
});

export const poppins = Poppins({
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-poppins',
    weight: ['300', '400', '500', '600', '700'],
});

export const telegraf = localFont({
    display: 'swap',
    src: [
        {
            path: './fonts/telegraf/PPTelegraf-Black.woff2',
            style: 'normal',
            weight: '900',
        },
        {
            path: './fonts/telegraf/PPTelegraf-Ultrabold.woff2',
            style: 'normal',
            weight: '800',
        },
        {
            path: './fonts/telegraf/PPTelegraf-Bold.woff2',
            style: 'normal',
            weight: '700',
        },
        {
            path: './fonts/telegraf/PPTelegraf-Regular.woff2',
            style: 'normal',
            weight: '400',
        },
        {
            path: './fonts/telegraf/PPTelegraf-Ultralight.woff2',
            style: 'normal',
            weight: '200',
        },
    ],
    variable: '--font-telegraf',
});

export const woodland = localFont({
    display: 'swap',
    src: [
        {
            path: './fonts/woodland/PPWoodland-Heavy.woff2',
            style: 'normal',
            weight: '900',
        },
        {
            path: './fonts/woodland/PPWoodland-Bold.woff2',
            style: 'normal',
            weight: '700',
        },
        {
            path: './fonts/woodland/PPWoodland-Regular.woff2',
            style: 'normal',
            weight: '400',
        },
        {
            path: './fonts/woodland/PPWoodland-Ultralight.woff2',
            style: 'normal',
            weight: '200',
        },
    ],
    variable: '--font-woodland',
});
