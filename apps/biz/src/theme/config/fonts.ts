import {
    dreamboat,
    flapjack,
    objectSans,
    pangramSans,
    pangramSansRounded,
    poppins,
    telegraf,
    woodland,
} from '@/app/fonts';
import { baseTheme } from '@chakra-ui/react';

export const fonts = {
    body: `${objectSans.style.fontFamily}, ${telegraf.style.fontFamily}, ${baseTheme.fonts.body}`,
    heading: `${woodland.style.fontFamily}, ${baseTheme.fonts.heading}`,
    dreamboat: `${dreamboat.style.fontFamily}, 'system-ui', 'Arial'`,
    flapjack: `${flapjack.style.fontFamily}, 'system-ui', 'Arial'`,
    objectSans: `${objectSans.style.fontFamily}, 'system-ui', 'Arial'`,
    pangramSans: `${pangramSans.style.fontFamily}, 'system-ui', 'Arial'`,
    pangramSansRounded: `${pangramSansRounded.style.fontFamily}, 'system-ui', 'Arial'`,
    poppins: `${poppins.style.fontFamily}, 'system-ui', 'Arial'`,
    telegraf: `${telegraf.style.fontFamily}, 'system-ui', 'Arial'`,
    woodland: `${woodland.style.fontFamily}, 'system-ui', 'serif'`,
};
