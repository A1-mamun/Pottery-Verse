import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import MyCraftCard from "./MyCraftCard";

const MyArtCraftItem = () => {
  const { user } = useContext(AuthContext);
  const [myCrafts, setMyCrafts] = useState();
  // console.log(user);
  useEffect(() => {
    fetch(`https://pottery-verse-server.vercel.app/myItem/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyCrafts(data);
      });
  }, [myCrafts, user]);
  return (
    <div className="container mx-auto mt-28 text-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-center">
        My Craft List
      </h2>
      {myCrafts ? (
        <div className="my-5 md:my-10 lg:my-20 grid grid-cols-1 lg:grid-cols-2  gap-10 items-center justify-center ">
          {myCrafts.map((craft) => (
            <MyCraftCard
              key={craft._Id}
              craft={craft}
              nyCrafts={myCrafts}
              setMyCrafts={setMyCrafts}
            ></MyCraftCard>
          ))}
        </div>
      ) : (
        <span className="loading loading-dots loading-lg mt-20"></span>
      )}
    </div>
  );
};

export default MyArtCraftItem;
