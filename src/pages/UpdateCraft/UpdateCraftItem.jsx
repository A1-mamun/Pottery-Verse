import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCraftItem = () => {
  const craft = useLoaderData();
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    // send data to the server
    fetch(`http://localhost:5000/craft/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.matchedCount) {
          Swal.fire({
            title: "Good Job!",
            text: "Item Updated Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <div className="container mx-auto bg-gray-800 rounded-xl px-20 py-10 my-10">
      <h2
        className="text-3xl text-center mb-10
      "
      >
        Update Craft Item
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-10 w-full my-8">
          <div className="form-control w-full">
            <label className="input input-bordered flex items-center gap-2 text-blue-300">
              Name :
              <input
                name="name"
                type="text"
                className="grow text-gray-400"
                defaultValue={name}
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-700">This field is required</span>
              )}
            </label>
          </div>
          <div className="form-control w-full">
            <label className="input input-bordered flex items-center gap-2 text-blue-300">
              Photo URL :
              <input
                name="image"
                type="text"
                className="grow text-gray-400"
                defaultValue={image}
                {...register("image", { required: true })}
              />
              {errors.image && (
                <span className="text-red-700">This field is required</span>
              )}
            </label>
          </div>
        </div>
        <div className="flex gap-10 w-full my-8">
          <div className="form-control w-full">
            <select
              name="category"
              className="select w-full text-gray-400"
              {...register("category", { required: true })}
            >
              <option value={category || ""}>
                {category || "Sub-Category Name"}
              </option>
              <option value="Clay-made pottery">Clay-made pottery</option>
              <option value="Stoneware">Stoneware</option>
              <option value="Porcelain">Porcelain</option>
              <option value="Terra Cotta">Terra Cotta</option>
              <option value="Ceramics & Architectural">
                Ceramics & Architectural
              </option>
              <option value="Home decor pottery">Home decor pottery</option>
            </select>
            {errors.category && (
              <span className="text-red-700">This field is required</span>
            )}
          </div>
          <div className="form-control w-full">
            <select
              name="customization"
              className="select w-full text-gray-400"
              {...register("customization", { required: true })}
            >
              <option value={customization || ""}>
                {customization || "Customization"}
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            {errors.customization && (
              <span className="text-red-700">This field is required</span>
            )}
          </div>
        </div>
        <div className="flex gap-10 w-full my-8">
          <div className="form-control w-full">
            <label className="input input-bordered flex items-center gap-2 text-blue-300">
              Price :
              <input
                name="price"
                type="text"
                className="grow text-gray-400"
                defaultValue={price}
                {...register("price", { required: true })}
              />
              {errors.price && (
                <span className="text-red-700">This field is required</span>
              )}
            </label>
          </div>
          <div className="form-control w-full">
            <label className="input input-bordered flex items-center gap-2 text-blue-300">
              Rating :
              <input
                name="rating"
                type="text"
                className="grow text-gray-400"
                defaultValue={rating}
                {...register("rating", { required: true })}
              />
              {errors.rating && (
                <span className="text-red-700">This field is required</span>
              )}
            </label>
          </div>
        </div>
        <div className="flex gap-10 w-full my-8">
          <div className="w-full">
            <div className="form-control w-full mb-8">
              <label className="input input-bordered flex items-center gap-2 text-blue-300">
                Processing Time :
                <input
                  name="time"
                  type="text"
                  className="grow text-gray-400"
                  defaultValue={time}
                  {...register("time", { required: true })}
                />
                {errors.time && (
                  <span className="text-red-700">This field is required</span>
                )}
              </label>
            </div>
            <div className="form-control w-full">
              <select
                name="status"
                className="select w-full text-gray-400"
                {...register("status", { required: true })}
              >
                <option value={status || ""}>{status || "Stock Status"}</option>
                <option value="In stock">In stock</option>
                <option value="Made to Order">Made to Order</option>
              </select>
              {errors.status && (
                <span className="text-red-700">This field is required</span>
              )}
            </div>
          </div>
          <div className="form-control w-full mb-8">
            <label className="textarea textarea-bordered textarea-ghost flex  gap-2 text-blue-300">
              Description :
              <textarea
                name="details"
                type="text"
                className="grow h-28 rounded-xl px-2 bg-transparent focus:outline-none text-gray-400"
                defaultValue={details}
                {...register("details", { required: true })}
              />
              {errors.details && (
                <span className="text-red-700">This field is required</span>
              )}
            </label>
          </div>
        </div>
        <input
          type="submit"
          className="btn btn-block bg-green-500 text-white text-lg"
          value="Update Item"
        />
      </form>
    </div>
  );
};

export default UpdateCraftItem;
