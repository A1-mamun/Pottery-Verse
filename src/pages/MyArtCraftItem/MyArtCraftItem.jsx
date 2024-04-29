import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import CraftCard from "../Shared/CraftCard";

const MyArtCraftItem = () => {
  const { user } = useContext(AuthContext);
  const [myCrafts, setMyCrafts] = useState();
  // console.log(user);
  useEffect(() => {
    fetch(`http://localhost:5000/myItem/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyCrafts(data);
      });
  }, [user]);
  return (
    <div className="container mx-auto my-10 text-center">
      <h2 className="text-3xl text-center">My Craft List</h2>
      {myCrafts ? (
        <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 items-center justify-center ">
          {myCrafts.map((craft) => (
            <CraftCard key={craft._Id} craft={craft}></CraftCard>
          ))}
        </div>
      ) : (
        <span className="loading loading-dots loading-lg mt-20"></span>
      )}
    </div>
  );
};

export default MyArtCraftItem;
