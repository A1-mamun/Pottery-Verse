import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import slide1 from "../../assets/banner-1.png";
import slide2 from "../../assets/banner-6.png";
import slide3 from "../../assets/banner-3.png";
import slide4 from "../../assets/banner-2.png";

const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      className="h-[300px] md:h-[420px] lg:h-[680px] bg-gradient-to-r from-red-50 to-orange-50 "
    >
      <SwiperSlide>
        <div className="flex justify-between items-center container mx-auto h-full">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-5xl text-gray-500 font-bold">
              Decorate Your Room <br /> By Flower
            </h1>
            <p className="mt-5 text-base md:text-xl text-gray-400 font-medium">
              Stay Tuned with PotteryVerse
            </p>
          </div>
          <img className="w-[40%]  rounded-x" src={slide2} alt="slide1" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-between items-center container mx-auto h-full">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-5xl text-gray-500 font-bold">
              Decorate Your Room <br /> By Flower
            </h1>
            <p className="mt-5 text-base md:text-xl text-gray-400 font-medium">
              Stay Tuned with PotteryVerse
            </p>
          </div>
          <img className="w-[30%] rounded-x" src={slide1} alt="slide1" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex justify-between items-center container mx-auto h-full">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-5xl text-gray-500 font-bold">
              Decorate Your Room <br /> By Ciramics lamp
            </h1>
            <p className="mt-5 text-base md:text-xl text-gray-400 font-medium">
              Stay Tuned with PotteryVerse
            </p>
          </div>
          <img className="w-[40%]  rounded-x" src={slide3} alt="slide1" />
        </div>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-between items-center container mx-auto h-full">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-5xl text-gray-500 font-bold">
              Decorate Your Room <br /> By Flower
            </h1>
            <p className="mt-5 text-base md:text-xl text-gray-400 font-medium">
              Stay Tuned with PotteryVerse
            </p>
          </div>
          <img className="w-[30%]  rounded-x" src={slide4} alt="slide1" />
        </div>{" "}
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
