import { PageLayout } from '@/components/layouts/page-layout';
import { Footer } from '@/components/recipes/footer';
import { Header } from '@/components/recipes/header';
import { PropsWithChildren } from 'react';
import { Providers } from './providers';

const PlumbingLayout = ({ children }: PropsWithChildren) => {
    return (
        <Providers>
            <PageLayout
                footer={<Footer />}
                header={<Header />}
                main={children}
            />
        </Providers>
    );
};
export default PlumbingLayout;
