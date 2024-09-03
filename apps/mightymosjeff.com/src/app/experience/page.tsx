import { PageLayout } from '@mosjeff/components/layouts/page-layout';
import { Header } from '@mosjeff/components/sections/header';
import { Resume } from '@mosjeff/components/sections/resume';

export default function Experience(): React.ReactElement {
    return <PageLayout header={<Header />} main={<Resume />} />;
}
