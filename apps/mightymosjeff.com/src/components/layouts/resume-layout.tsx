import { Center, Grid, GridItem } from '@chakra-ui/react';

export type ResumeLayoutProps = {
    education: React.ReactElement;
    experience: React.ReactElement;
    heading: React.ReactElement;
    skills: React.ReactElement;
    summary: React.ReactElement;
};
export const ResumeLayout = ({
    education,
    experience,
    heading,
    skills,
    summary
}: ResumeLayoutProps): React.ReactElement => {
    return (
        <Center>
            <Grid
                h="68.75rem"
                m={0}
                p={0}
                templateColumns={`1fr`}
                templateRows={`repeat(1fr, 5)`}
                templateAreas={`"heading" "summary" "experience" "skills" "education"`}
                w="53.125rem"
            >
                <GridItem area="heading">{heading}</GridItem>
                <GridItem area="summary">{summary}</GridItem>
                <GridItem area="experience">{experience}</GridItem>
                <GridItem area="skills">{skills}</GridItem>
                <GridItem area="education">{education}</GridItem>
            </Grid>
        </Center>
    );
};
