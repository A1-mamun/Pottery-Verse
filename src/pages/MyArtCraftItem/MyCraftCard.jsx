import { Link } from "react-router-dom";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { FcRating } from "react-icons/fc";
import Swal from "sweetalert2";
const MyCraftCard = ({ craft, myCrafts, setMyCrafts }) => {
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

  //   function for delete crafts
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log("delete confirmed");
        fetch(`http://localhost:5000/craft/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = myCrafts.filter((craft) => craft._id !== _id);
              setMyCrafts(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="bg-base-100 shadow-xl p-5 border border-dark-15 flex h-full w-full rounded-xl gap-5">
      <figure className="bg-dark-05 rounded-2xl w-2/5">
        <img className="w-full h-full rounded-xl" src={image} alt={category} />
      </figure>
      <div className="w-3/5">
        <div className="border-b border-dashed pb-5 grow">
          <h2 className="card-title mb-3 text-2xl font-bold ">{name}</h2>
          <div className="flex justify-between text-dark-8 font-medium">
            <p className="text-dark-8 font-medium"> {category}</p>
            <p className="text-dark-8 font-medium"> </p>
          </div>
        </div>
        <div className="flex justify-between mt-5 text-dark-8 font-medium">
          <div className="flex items-center gap-1">
            <p>{price}</p>
            <FaBangladeshiTakaSign />
          </div>
          <div className="flex items-center gap-1">
            <p>{rating}</p>
            <FcRating />
          </div>
        </div>
        <div className="flex justify-between mt-3 text-dark-8 font-medium">
          <div>
            <p>
              Customize:
              <span className="ml-2 badge badge-success">{customization}</span>
            </p>
          </div>
          <div>
            <p className="text-green-400">{status}</p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-5">
          <Link to={`/craft-update/${_id}`}>
            <button className="btn btn-info btn-sm">Update</button>
          </Link>

          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-error btn-sm"
          >
            Delete
          </button>

          <Link to={`/craft-details/${_id}`}>
            <button className="btn btn-success btn-sm">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyCraftCard;
