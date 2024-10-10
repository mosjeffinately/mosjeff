import { PortfolioCarousel } from '@mosjeff/components/carousel/portfolio-carousel';
import { FullWidthSectionLayout } from '@mosjeff/components/layouts/full-width-section-layout';
import { Portfolio } from '@mosjeff/components/sections/portfolio';
import { StorybookEmbed } from '@mosjeff/components/sections/storybook-embed';

export default function PortfolioPage(): React.ReactElement {
    return (
        <FullWidthSectionLayout>
            <Portfolio />
        </FullWidthSectionLayout>
    );
}
