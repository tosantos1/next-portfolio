import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, A11y]);

import { Swiper, SwiperSlide } from 'swiper/react';

import { Flex } from "@chakra-ui/react";
import { Projetos1 } from '../Projetos/Projeto1';
import { Projetos2 } from '../Projetos/Projeto2';


export default function Slider() {
    return (
        <Flex w="100%" maxW="1400px" mx="auto"   >
            <Swiper
                slidesPerView={1}
                navigation
                autoplay={{ delay: 20000, }}
                style={{ width: '100%', flex: '1' }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <Flex>
                        <Projetos1 />
                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                    <Flex>
                        <Projetos2 />
                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                    <Flex bg="blackAlpha.700">
                        <Projetos1 />
                    </Flex>
                </SwiperSlide>
            </Swiper>
        </Flex>
    )
}