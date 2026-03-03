import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FoundForm() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    item: "",
    location: "",
    phone: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setData({ ...data, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("item", data.item);
  formData.append("location", data.location);
  formData.append("phone", data.phone);
  formData.append("image", data.image);

  try {
    const token = localStorage.getItem("token");

    const res = await fetch("https://lostandfound-psrf.onrender.com/api/found/add", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!res.ok) throw new Error();
    navigate("/");
  } catch {
    alert("Submission failed");
  }
};


  return (
    <div className="flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Report Found Item
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-400 outline-none"
          />

          <input
            name="item"
            placeholder="Found Item Name"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-400 outline-none"
          />

          <input
            name="location"
            placeholder="Found Location"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-400 outline-none"
          />
          <input
  name="phone"
  placeholder="Phone Number"
  onChange={handleChange}
  required
  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-400 outline-none"
/>


          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            required
            className="w-full text-sm file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:bg-emerald-100 file:text-emerald-700
              hover:file:bg-emerald-200"
          />

          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-semibold transition"
          >
            Submit Found Item
          </button>
        </form>
      </div>
    </div>
  );
}