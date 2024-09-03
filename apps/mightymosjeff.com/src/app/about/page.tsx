'use client';
import { PageLayout } from '@mosjeff/components/layouts/page-layout';
import { AboutMe } from '@mosjeff/components/sections/about-me';
import { Header } from '@mosjeff/components/sections/header';

export default function About(): React.ReactElement {
    return <PageLayout header={<Header />} main={<AboutMe />} />;
}
