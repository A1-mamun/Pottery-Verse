import { useLoaderData } from "react-router-dom";
import Row from "./Row";

const AllArtCraftItem = () => {
  const crafts = useLoaderData();
  return (
    <div className="container mx-auto mt-28 bg-gray-100 p-10 mb-10 rounded-xl">
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-center mb-7">
        All Art & Craft
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-base md:text-xl">
              <th>Name</th>
              <th>Category</th>
              <th>Rating</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* dynamic row */}
            {crafts.map((craft) => (
              <Row key={craft._id} craft={craft}></Row>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllArtCraftItem;
