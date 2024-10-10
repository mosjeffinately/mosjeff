import { Box } from '@chakra-ui/react';
import { ResumeLayout } from '@mosjeff/components/layouts/resume-layout';
import { Heading } from '@mosjeff/components/sections/resume/heading';

export default function Resume(): React.ReactElement {
    return (
        <ResumeLayout
            education={<Box />}
            experience={<Box />}
            heading={<Heading />}
            skills={<Box />}
            summary={<Box />}
        />
    );
}
