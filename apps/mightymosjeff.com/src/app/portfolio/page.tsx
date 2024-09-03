import { PageLayout } from '@mosjeff/components/layouts/page-layout';
import { Header } from '@mosjeff/components/sections/header';
import { StorybookEmbed } from '@mosjeff/components/sections/storybook-embed';

export default function Portfolio(): React.ReactElement {
    return <PageLayout header={<Header />} main={<StorybookEmbed />} />;
}
