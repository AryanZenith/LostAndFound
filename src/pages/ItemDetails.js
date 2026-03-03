


import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


function getUserIdFromToken(token){
  if(!token) return null;
  try{
    return JSON.parse(atob(token.split(".")[1])).userId;
  }catch{
    return null;
  }
}

export default function ItemDetails() {
  
  const { type, id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const token = localStorage.getItem("token");       
const loggedUserId = getUserIdFromToken(token); 

  useEffect(() => {
    
    fetch(`https://lostandfound-psrf.onrender.com/api/${type}`)
      .then(res => res.json())
      .then(data => {
        const found = data.find(i => i._id === id);
        setItem(found);
      });
      console.log("Logged user:", loggedUserId);
  console.log("Item user:", item?.userId);
  }, [type, id]);

  if (!item)
    return (
      <div className="h-screen flex items-center justify-center text-xl font-semibold">
        Loading item details...
      </div>
    );

    
const handleDelete = async () => {
  if(!window.confirm("Are you sure you got your item?")) return;

  try{
    const res = await fetch(`https://lostandfound-psrf.onrender.com/api/${type}/${id}`,{
      method:"DELETE",
      headers:{
        Authorization:`Bearer ${token}`
      }
    });

    if(!res.ok) throw new Error();

    alert("Item deleted successfully");
    navigate("/");
  }
  catch{
    alert("Delete failed");
  }
};




  return (
    <div className="flex items-center justify-center min-h-screen" >
      

      {/* Card */}
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden">

        {/* Image */}
        <div className="overflow-hidden">
          <img
            src={`http://localhost:5000/uploads/${item.image}`}
            alt={item.item}
           className="w-full max-h-[600px] object-contain bg-black"

          />
        </div>

        {/* Content */}
        <div className="p-8">

          {/* Top row */}
          <div className="flex justify-between items-start">
            <h1 className="text-4xl font-bold text-gray-800">{item.item}</h1>

            <span
              className={`px-4 py-1 text-sm font-semibold rounded-full ${
                type === "lost"
                  ? "bg-red-100 text-red-600"
                  : "bg-green-100 text-green-600"
              }`}
            >
              {type.toUpperCase()}
            </span>
          </div>

          {/* Info */}
          <div className="mt-6 space-y-3 text-lg text-gray-700">

            <p>
              📍 <span className="font-semibold">Location:</span>{" "}
              {item.location}
            </p>

            <p>
              👤 <span className="font-semibold">Reported By:</span>{" "}
              {item.name}
            </p>
            <p>
  📞 <span className="font-semibold">Phone:</span>{" "}
  {item.phone || "Not provided"}
</p>


            {item.description && (
              <p className="pt-4 border-t">
                📝 <span className="font-semibold">Description:</span>
                <br />
                {item.description}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            onClick={() => navigate(-1)}
            className="mt-8 w-full bg-orange-300 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-semibold transition"
          >
            ← Back
          </button>
         
{String(loggedUserId) === String(item.userId)
 && (
  <button
    onClick={handleDelete}
    className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl text-lg font-semibold transition"
  >
    I got my item — Delete Post
  </button>
)}

        </div>
      </div>
    </div>
  );
}
