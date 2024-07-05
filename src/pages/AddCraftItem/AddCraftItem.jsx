import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddCraftItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    console.log(data);
    // send data to the server
    fetch("https://pottery-verse-server.vercel.app/crafts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.insertedId) {
          Swal.fire({
            title: "Good Job!",
            text: "Item Added Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          event.target.reset();
        }
      });
  };
  return (
    <div className="container mx-auto bg-gray-100 rounded-xl px-5 md:px-8 lg:px-20 py-10 mt-28">
      <h2
        className="text-2xl md:text-3xl lg:text-4xl text-center mb-10
      "
      >
        Add Craft Item
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col lg:flex-row gap-10 w-full my-8">
          <div className="form-control w-full">
            <label className="input input-bordered flex items-center gap-2 text-blue-300 text-sm md:text-base">
              User Email :
              <input
                name="email"
                type="email"
                className="grow text-gray-400"
                placeholder="Enter user email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-700">This field is required</span>
              )}
            </label>
          </div>
          <div className="form-control w-full">
            <label className="input input-bordered flex items-center gap-2 text-blue-300 text-sm md:text-base">
              User Name :
              <input
                name="userName"
                type="text"
                className="grow text-gray-400"
                placeholder="Enter user name"
                {...register("userName", { required: true })}
              />
              {errors.userName && (
                <span className="text-red-700">This field is required</span>
              )}
            </label>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 w-full my-8">
          <div className="form-control w-full">
            <label className="input input-bordered flex items-center gap-2 text-blue-300 text-sm md:text-base">
              Name :
              <input
                name="name"
                type="text"
                className="grow text-gray-400"
                placeholder="Enter item name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-700">This field is required</span>
              )}
            </label>
          </div>
          <div className="form-control w-full">
            <label className="input input-bordered flex items-center gap-2 text-blue-300 text-sm md:text-base">
              Photo URL :
              <input
                name="image"
                type="text"
                className="grow text-gray-400"
                placeholder="Enter photo url"
                {...register("image", { required: true })}
              />
              {errors.image && (
                <span className="text-red-700">This field is required</span>
              )}
            </label>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 w-full my-8">
          <div className="form-control w-full">
            <select
              name="category"
              className="select w-full text-gray-400 text-sm md:text-base"
              {...register("category", { required: true })}
            >
              <option value="">Sub-Category Name</option>
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
              className="select w-full text-gray-400 text-sm md:text-base"
              {...register("customization", { required: true })}
            >
              <option value="">Customization</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            {errors.customization && (
              <span className="text-red-700">This field is required</span>
            )}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 w-full my-8">
          <div className="form-control w-full">
            <label className="input input-bordered flex items-center gap-2 text-blue-300 text-sm md:text-base">
              Price :
              <input
                name="price"
                type="text"
                className="grow text-gray-400"
                placeholder="Enter price"
                {...register("price", { required: true })}
              />
              {errors.price && (
                <span className="text-red-700">This field is required</span>
              )}
            </label>
          </div>
          <div className="form-control w-full">
            <label className="input input-bordered flex items-center gap-2 text-blue-300 text-sm md:text-base">
              Rating :
              <input
                name="rating"
                type="text"
                className="grow text-gray-400"
                placeholder="Enter rating"
                {...register("rating", { required: true })}
              />
              {errors.rating && (
                <span className="text-red-700">This field is required</span>
              )}
            </label>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 w-full my-8">
          <div className="w-full">
            <div className="form-control w-full mb-8">
              <label className="input input-bordered flex items-center gap-2 text-blue-300 text-sm md:text-base">
                Processing Time :
                <input
                  name="time"
                  type="text"
                  className="grow text-gray-400"
                  placeholder="Enter time in week"
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
                <option value="">Stock Status</option>
                <option value="In stock">In stock</option>
                <option value="Made to Order">Made to Order</option>
              </select>
              {errors.status && (
                <span className="text-red-700">This field is required</span>
              )}
            </div>
          </div>
          <div className="form-control w-full mb-8">
            <label className="textarea textarea-bordered textarea-ghost flex  gap-2 text-blue-300 text-sm md:text-base">
              Description :
              <textarea
                name="details"
                type="text"
                className="grow h-28 rounded-xl px-2 bg-transparent focus:outline-none text-gray-400"
                placeholder="Enter short description"
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
          className="btn btn-block bg-green-500 text-white text-base md:text-lg"
          value="Add Item"
        />
      </form>
    </div>
  );
};

export default AddCraftItem;
