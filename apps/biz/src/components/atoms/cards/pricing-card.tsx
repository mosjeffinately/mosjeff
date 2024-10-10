import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardProps,
    chakra,
    HStack,
    List,
    ListIcon,
    ListItem,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export type PricingCardProps = {
    cta: React.ReactElement;
    description?: string;
    features: string[];
    frequency?: string;
    price: number;
    title: string;
    variant?: CardProps['variant'];
};

export const PricingCard = ({
    cta,
    description,
    features,
    frequency,
    price,
    title,
    variant = 'elevated',
}: PricingCardProps) => {
    const bgColor = useColorModeValue('teal.300', 'teal.500');

    return (
        <Card
            as={Stack}
            borderRadius="xl"
            bgColor={variant === 'outline' ? 'transparent' : bgColor}
            boxShadow="none"
            minW={80}
            maxW={96}
            px={10}
            py={8}
            spacing={4}
            variant={variant}
        >
            <CardHeader m={0} p={0}>
                <Stack fontFamily="pangramSans" spacing={2}>
                    <Text fontWeight="semibold" fontSize="md">
                        {title}
                    </Text>
                    <Text fontSize="5xl" fontWeight="extrabold">
                        {`$${price}`}
                        {frequency ? (
                            <Text as="span" fontFamily="pangramSans" fontSize="sm" fontWeight="normal">
                                {`/ ${frequency}`}
                            </Text>
                        ) : null}
                    </Text>
                    {description ? (
                        <Text fontSize="sm" fontWeight="medium">
                            {description}
                        </Text>
                    ) : null}
                </Stack>
            </CardHeader>
            <CardBody m={0} p={0}>
                <List fontFamily="pangramSansRounded" fontSize="sm" listStyleType="none" spacing={2}>
                    {features.map((feature) => (
                        <ListItem key={`${feature.split(' ').join('_')}`}>
                            <HStack align="flex-start" spacing={4}>
                                <ListIcon as={FaCheckCircle} />
                                <chakra.span fontWeight="medium" lineHeight="1.1">
                                    {feature}
                                </chakra.span>
                            </HStack>
                        </ListItem>
                    ))}
                </List>
            </CardBody>
            <CardFooter m={0} p={0} pt={4}>
                {cta}
            </CardFooter>
        </Card>
    );
};
