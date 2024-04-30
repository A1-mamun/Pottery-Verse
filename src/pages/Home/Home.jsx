import { useEffect, useState } from "react";
import CraftCard from "../Shared/CraftCard";
import Banner from "./Banner";
import CategoryCard from "./CategoryCard";

const Home = () => {
  const [crafts, setCrafts] = useState();
  const [categories, setCategories] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/crafts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCrafts(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
  }, []);
  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl text-center mt-10">Craft Items</h2>
        {crafts ? (
          <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 ">
            {crafts.map((craft) => (
              <CraftCard key={craft._Id} craft={craft}></CraftCard>
            ))}
          </div>
        ) : (
          <span className="loading loading-dots loading-lg mt-20"></span>
        )}

        <h2 className="text-4xl text-center mt-10">Art & Craft Categories</h2>
        {categories ? (
          <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 ">
            {categories.map((craftCategory) => (
              <CategoryCard
                key={craftCategory._Id}
                craftCategory={craftCategory}
              ></CategoryCard>
            ))}
          </div>
        ) : (
          <span className="loading loading-dots loading-lg mt-20"></span>
        )}
      </div>
    </div>
  );
};

export default Home;
