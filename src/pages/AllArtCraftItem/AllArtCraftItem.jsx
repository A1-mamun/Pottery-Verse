import { useLoaderData } from "react-router-dom";
import Row from "./Row";

const AllArtCraftItem = () => {
  const crafts = useLoaderData();
  return (
    <div className="container mx-auto my-10">
      <h2 className="text-4xl text-center mb-7">All Art & Craft</h2>
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
