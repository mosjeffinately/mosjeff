import { css, Global } from '@emotion/react';

export function Fonts(): React.ReactElement {
    return (
        <Global
            styles={css`
                @font-face {
                    font-family: 'Monument Extended';
                    font-style: normal;
                    font-weight: 900;
                    font-display: swap;
                    src: url('/assets/fonts/PPMonumentExtended-Black.woff2')
                        format('woff2')
                        url('/assets/fonts/PPMonumentExtended-Black.woff')
                        format('woff');
                }
            `}
        />
    );
}
