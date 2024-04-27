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
import slide1 from "../../assets/dish.png";
import slide2 from "../../assets/lamp.png";
import slide3 from "../../assets/dish.png";
import slide4 from "../../assets/lamp.png";
import slide5 from "../../assets/dish.png";
import slide6 from "../../assets/lamp.png";

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
            <h1 className="text-5xl">
              Decorate Your Room <br /> With lamp
            </h1>
            <p>Stay Tuned with PotteryVerse</p>
          </div>
          <img className="w-1/2 rounded-x" src={slide1} alt="slide1" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-between items-center container mx-auto h-full">
          <div>
            <h1 className="text-5xl">
              Decorate Your Room <br /> With lamp
            </h1>
            <p>Stay Tuned with PotteryVerse</p>
          </div>
          <img className="w-1/2  rounded-x" src={slide2} alt="slide1" />
        </div>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-between items-center container mx-auto h-full">
          <div>
            <h1 className="text-5xl">
              Decorate Your Room <br /> With lamp
            </h1>
            <p>Stay Tuned with PotteryVerse</p>
          </div>
          <img className="w-1/2  rounded-x" src={slide3} alt="slide1" />
        </div>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-between items-center container mx-auto h-full">
          <div>
            <h1 className="text-5xl">
              Decorate Your Room <br /> With lamp
            </h1>
            <p>Stay Tuned with PotteryVerse</p>
          </div>
          <img className="w-1/2  rounded-x" src={slide4} alt="slide1" />
        </div>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-between items-center container mx-auto h-full">
          <div>
            <h1 className="text-5xl">
              Decorate Your Room <br /> With lamp
            </h1>
            <p>Stay Tuned with PotteryVerse</p>
          </div>
          <img className="w-1/2  rounded-x" src={slide5} alt="slide1" />
        </div>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-between items-center container mx-auto h-full">
          <div>
            <h1 className="text-5xl">
              Decorate Your Room <br /> With lamp
            </h1>
            <p>Stay Tuned with PotteryVerse</p>
          </div>
          <img className="w-1/2  rounded-x" src={slide6} alt="slide1" />
        </div>{" "}
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
