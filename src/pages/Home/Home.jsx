import { useState } from "react";
import CraftCard from "../Shared/CraftCard";
import Banner from "./Banner";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const loadedCrafts = useLoaderData();
  const [crafts, setCrafts] = useState(loadedCrafts);
  return (
    <div>
      <Banner></Banner>
      <h2 className="text-4xl text-center mt-10">Craft Items</h2>
      <div className="my-20 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        {crafts ? (
          crafts.map((craft) => (
            <CraftCard key={craft._Id} craft={craft}></CraftCard>
          ))
        ) : (
          <span className="loading loading-bars loading-lg"></span>
        )}
      </div>
    </div>
  );
};

export default Home;
