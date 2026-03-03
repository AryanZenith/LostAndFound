export default function Card({ item, type }) {
  const imageUrl = item?.image
    ? item.image.startsWith("http")
      ? item.image
      : `http://localhost:5000/uploads/${item.image}`
    : "/dummy.png";

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all">
      <img
        src={imageUrl}
        alt={item?.item || "Item"}
        className="w-full h-44 object-cover"
      />

      <div className="p-4">
        <h3 className="font-bold text-lg">
          {item?.item || "Unknown item"}
        </h3>

        <p className="text-sm">📍 {item?.location || "Unknown"}</p>
        <p className="text-sm">👤 {item?.name || "Anonymous"}</p>
      </div>
    </div>
  );
}