import { Link, useLoaderData } from "react-router-dom";
import image from "../../assets/banner-1.png";
import { FaBangladeshiTakaSign, FaClockRotateLeft } from "react-icons/fa6";

import { FcRating } from "react-icons/fc";
const CarftDetails = () => {
  const craft = useLoaderData();
  const {
    _id,
    name,
    image,
    category,
    customization,
    price,
    rating,
    time,
    status,
    details,
  } = craft;
  return (
    <div className="mt-7 container mx-auto  px-3 md:px-5 lg:px-0 my-10">
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
            {name}
          </h1>
          <p className="text-base md:text-xl font-medium text-dark-8 my-3 md:my-3 lg:my-4">
            {category}
          </p>

          <hr />
          <div className="flex justify-between items-center">
            <p className="text-base md:text-xl font-medium text-dark-8 py-2 md:py-3 lg:py-4">
              Customization:
              <span className="badge badge-lg bg-green-500 text-white ml-2">
                {customization}
              </span>
            </p>
            <div className="flex items-center gap-1">
              <FaClockRotateLeft />
              <span className="badge badge-lg bg-green-500 text-white ml-2">
                {time}
              </span>
            </div>
          </div>

          <hr />
          <p className="text-sm md:text-base text-dark-7 py-3 md:py-4 lg:py-5 grow">
            <span className="font-bold text-dark">Details :</span> {details}
          </p>
          <div className="flex justify-between mt-5 text-dark-8 font-medium mb-5 text-base md:text-xl">
            <div className="flex items-center gap-1">
              <p>{price}</p>
              <FaBangladeshiTakaSign />
            </div>
            <div className="flex items-center gap-2">
              <p>{rating}</p>
              <FcRating />
            </div>
          </div>
          <hr />
          <div className="flex justify-between items-center mt-5">
            <div className="flex gap-2 items-center">
              <h2 className=" text-2xl text-green-500 font-bold">{status}</h2>
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
