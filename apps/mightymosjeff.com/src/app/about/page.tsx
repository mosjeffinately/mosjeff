'use client';
import { MainSectionLayout } from '@mosjeff/components/layouts/main-section-layout';
import { AboutMe } from '@mosjeff/components/sections/about-me';

export default function About(): React.ReactElement {
    return (
        <MainSectionLayout>
            <AboutMe />
        </MainSectionLayout>
    );
}
