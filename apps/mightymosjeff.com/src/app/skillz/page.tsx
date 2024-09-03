import { PageLayout } from '@mosjeff/components/layouts/page-layout';
import { Header } from '@mosjeff/components/sections/header';
import { SkillzRatings } from '@mosjeff/components/sections/skillz-ratings';

export default function Skillz(): React.ReactElement {
    return <PageLayout header={<Header />} main={<SkillzRatings />} />;
}
