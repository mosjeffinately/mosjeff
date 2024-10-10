'use client';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Box, Card, CardBody, Image } from '@chakra-ui/react';

export type SwiperCarouselProps = {
    images: {
        alt: string;
        src: string;
    }[];
};

export const SwiperCarousel = ({ images }: SwiperCarouselProps) => {
    return (
        <Box as={Swiper} centeredSlides modules={[Pagination]} pagination={{ clickable: true }} spaceBetween={30}>
            {images.map(({ alt, src }) => (
                <SwiperSlide key={alt.split(' ').join('-')}>
                    <Card m={0} p={0}>
                        <CardBody m={0} p={0}>
                            <Image alt={alt} h="full" objectFit="cover" src={src} w="full" />
                        </CardBody>
                    </Card>
                </SwiperSlide>
            ))}
        </Box>
    );
};
