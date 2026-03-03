import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LostForm() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    item: "",
    location: "",
    description: "",
    phone:"",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setData({ ...data, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(data).forEach(([k, v]) => formData.append(k, v));

    try {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:5000/api/lost/add", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!res.ok) throw new Error();
      navigate("/");
    } catch (err) {
      alert("Submission failed");
    }
  };

  return (
    <div className="flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Report Lost Item
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
          />

          <input
            name="item"
            placeholder="Lost Item Name"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
          />

          <input
            name="location"
            placeholder="Last Seen Location"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
          />
          <input
  name="phone"
  placeholder="Phone Number"
  onChange={handleChange}
  required
  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
/>


          <textarea
            name="description"
            placeholder="Description"
            rows="4"
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
          />

          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            required
            className="w-full text-sm file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:bg-red-100 file:text-red-700
              hover:file:bg-red-200"
          />

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition"
          >
            Submit Lost Item
          </button>
        </form>
      </div>
    </div>
  );
}
