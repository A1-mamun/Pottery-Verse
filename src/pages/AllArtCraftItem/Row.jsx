import { FcRating } from "react-icons/fc";
import { Link } from "react-router-dom";

const Row = ({ craft }) => {
  const { image, name, category, rating, _id } = craft;
  return (
    <tr className="text-sm md:text-lg">
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar hidden md:block">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt={name} />
            </div>
          </div>
          <div>
            <div className="font-medium">{name}</div>
          </div>
        </div>
      </td>
      <td>
        <p>{category}</p>
      </td>
      <td>
        <div className="flex items-center gap-2">
          {rating}
          <FcRating />
        </div>
      </td>

      <th>
        <Link to={`/craft-details/${_id}`}>
          <button className="btn btn-success btn-sm">details</button>
        </Link>
      </th>
    </tr>
  );
};

export default Row;
