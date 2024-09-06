import { MainSectionLayout } from '@mosjeff/components/layouts/main-section-layout';
import { Resume } from '@mosjeff/components/sections/resume';

export default function Portfolio(): React.ReactElement {
    return (
        <MainSectionLayout>
            <Resume />
        </MainSectionLayout>
    );
}
