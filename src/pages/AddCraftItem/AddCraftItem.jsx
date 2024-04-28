import { useForm } from "react-hook-form";

const AddCraftItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const {
      name,
      image,
      category,
      customization,
      price,
      rating,
      status,
      time,
      details,
    } = data;
    console.log(data);
  };
  return (
    <div className="container mx-auto bg-gray-800 rounded-xl px-20 py-10 my-10">
      <h2
        className="text-3xl text-center mb-10
      "
      >
        Add Craft Item
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
                placeholder="Enter item name"
                {...register("name", { required: true })}
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label className="input input-bordered flex items-center gap-2 text-blue-300">
              Photo URL :
              <input
                name="image"
                type="text"
                className="grow text-gray-400"
                placeholder="Enter photo url"
                {...register("image", { required: true })}
              />
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
          </div>
          <div className="form-control w-full">
            <select
              name="customization"
              className="select w-full text-gray-400"
              {...register("customization", { required: true })}
            >
              <option value="">Customization</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
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
                placeholder="Enter price"
                {...register("price", { required: true })}
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label className="input input-bordered flex items-center gap-2 text-blue-300">
              Rating :
              <input
                name="rating"
                type="text"
                className="grow"
                placeholder="Enter rating"
                {...register("rating", { required: true })}
              />
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
                  placeholder="Enter time in week"
                  {...register("time", { required: true })}
                />
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
            </div>
          </div>
          <div className="form-control w-full mb-8">
            <label className="textarea textarea-bordered textarea-ghost flex  gap-2 text-blue-300">
              Description :
              <textarea
                name="details"
                type="text"
                className="grow h-28 rounded-xl px-2 bg-transparent focus:outline-none text-gray-400"
                placeholder="Enter short description"
                {...register("details", { required: true })}
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          className="btn btn-block bg-green-500 text-white text-lg"
          value="Add Item"
        />
      </form>
    </div>
  );
};

export default AddCraftItem;
