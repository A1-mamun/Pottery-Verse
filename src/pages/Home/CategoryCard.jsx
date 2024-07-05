import { Link } from "react-router-dom";

const CategoryCard = ({ craftCategory }) => {
  const { image, category, _id } = craftCategory;
  return (
    <div className="card bg-base-100 shadow-xl p-5 border border-dark-15 h-full w-full rounded-xl gap-5">
      <figure className="bg-dark-05 rounded-2xl w-full">
        <img className="w-full h-52 rounded-xl" src={image} alt={category} />
      </figure>
      <div className="">
        <div className="pb-5 text-left">
          <p className="text-dark-8 font-medium text-xl"> {category}</p>
        </div>
        <div className="text-right">
          <Link to={`/category/${category}`}>
            <button className="btn btn-success btn-sm ">See More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
