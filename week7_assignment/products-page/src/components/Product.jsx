function Product({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4">

      <img
        src={product.image}
        alt=""
        className="w-full h-40 object-cover rounded-lg"
      />

      <h2 className="text-lg font-semibold mt-3">
        {product.name}
      </h2>

      <p className="text-blue-600 font-bold">
        ₹ {product.price}
      </p>

      <p className="text-sm text-gray-600 mt-2">
        {product.description}
      </p>

      <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        View Details
      </button>

    </div>
  );
}

export default Product;