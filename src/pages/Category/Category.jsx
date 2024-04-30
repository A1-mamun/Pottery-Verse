import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CraftCard from "../Shared/CraftCard";

const Category = () => {
  const { name } = useParams();
  const loadedCategoryCrafts = useLoaderData();
  const [categoryCrafts, setCategoryCrafts] = useState(loadedCategoryCrafts);
  return (
    <div className="container mx-auto text-center">
      <h2 className="text-4xl text-center mt-10">{name}</h2>
      {categoryCrafts.length ? (
        <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 ">
          {categoryCrafts.map((craft) => (
            <CraftCard key={craft._Id} craft={craft}></CraftCard>
          ))}
        </div>
      ) : (
        <span className=" text-2xl min-h-screen text-red-500 flex flex-col items-center justify-center">
          No Craft Item Matching This Category
        </span>
      )}
    </div>
  );
};

export default Category;
