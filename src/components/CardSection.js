import { useNavigate } from "react-router";

export default function CardSection({ title, items, type }) {
  const Navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 tracking-tight">
        {title}
      </h2>

      {items.length === 0 && (
        <p className="text-gray-500 text-center">No items found</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => {
          const imageUrl = item.image
            ? `http://localhost:5000/uploads/${item.image}`
            : "/dummy.png";

          return (
            <div
              key={item._id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Image container */}
              <div className="relative h-52 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={imageUrl}
                  alt={item.item}
                  className="max-h-full max-w-full object-contain transition duration-300 group-hover:scale-105"
                />

                {/* Status badge*/}
                <span
                  className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full
                  ${
                    type === "lost"
                      ? "bg-red-100 text-red-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {type === "lost" ? "Lost" : "Found"}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                  {item.item || "Unknown item"}
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  📍 {item.location || "Unknown"}
                </p>

                {type === "lost" && item.description && (
                  <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                    {item.description}
                  </p>
                )}

                
                <button
                  onClick={() =>
                    Navigate(`/details/${type}/${item._id}`)
                  }
                  className="mt-5 w-full bg-gradient-to-r from-orange-300 to-indigo-600 text-white py-2 rounded-lg font-medium hover:opacity-90 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
