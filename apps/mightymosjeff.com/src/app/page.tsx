'use client';
import { PageLayout } from '@mosjeff/components/layouts/page-layout';
import { Header } from '@mosjeff/components/sections/header';
import { Main } from '@mosjeff/components/sections/main';

export default function Home() {
    return <PageLayout header={<Header />} main={<Main />} />;
}
