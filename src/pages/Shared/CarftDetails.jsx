import { Link } from "react-router-dom";
import image from "../../assets/banner-1.png";
import { FaBangladeshiTakaSign, FaClockRotateLeft } from "react-icons/fa6";

import { FcRating } from "react-icons/fc";
const CarftDetails = () => {
  return (
    <div className="mt-7 container mx-auto  px-3 md:px-5 lg:px-0 ">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-10 lg:gap-16 lg:h-[600px] border border-dark-15  p-5 rounded-xl">
        <div className="rounded-2xl lg:w-1/2 flex justify-center items-center">
          <img
            className="rounded-xl md:h-[400px] lg:h-full"
            src={image}
            alt="Clay made pottery"
          />
        </div>
        <div className="font-worksans lg:w-1/2 flex flex-col">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-playfair text-dark">
            Hand made Clay pottery
          </h1>
          <p className="text-base md:text-xl font-medium text-dark-8 my-3 md:my-3 lg:my-4">
            Clay made pottery
          </p>

          <hr />
          <div className="flex justify-between items-center">
            <p className="text-base md:text-xl font-medium text-dark-8 py-2 md:py-3 lg:py-4">
              Customization:
              <span className="badge badge-lg bg-green-500 text-white ml-2">
                Yes
              </span>
            </p>
            <div className="flex items-center gap-1">
              <FaClockRotateLeft />
              <span className="badge badge-lg bg-green-500 text-white ml-2">
                2 day
              </span>
            </div>
          </div>

          <hr />
          <p className="text-sm md:text-base text-dark-7 py-3 md:py-4 lg:py-5 grow">
            <span className="font-bold text-dark">Details :</span> Escape to the
            serene mountainside and unwind in our cozy lodge. Located amidst the
            breathtaking scenery of Aspen, Colorado, our lodge offers a tranquil
            retreat from the hustle and bustle of everyday life. Whether you're
            seeking adventure on the nearby hiking trails or simply looking to
            relax and rejuvenate in nature's embrace, our lodge provides the
            perfect setting for your mountain getaway. Warm yourself by the
          </p>
          <div className="flex justify-between mt-5 text-dark-8 font-medium mb-5 text-base md:text-xl">
            <div className="flex items-center gap-1">
              <p>2,000</p>
              <FaBangladeshiTakaSign />
            </div>
            <div className="flex items-center gap-2">
              <p>4.9</p>
              <FcRating />
            </div>
          </div>
          <hr />
          <div className="flex justify-between items-center mt-5">
            <div className="flex gap-2 items-center">
              <h2 className=" text-2xl text-green-500 font-bold">In Stock</h2>
            </div>

            <Link to="/">
              <button className="btn btn-accent">Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarftDetails;
