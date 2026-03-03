import { useNavigate } from "react-router-dom";

export default function ActionSection() {
  const navigate = useNavigate();

  return (
    <section className="w-full py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 justify-center items-center">
        
        <button
          onClick={() => navigate("/lost")}
          className="px-9 py-3 rounded-2xl font-semibold bg-red-600 shadow-md shadow-white hover:bg-black hover:shadow-lg active:scale-95 transition-all duration-200 text-white "
        >
          Lost Something
        </button>

        <button
          onClick={() => navigate("/found")}
          className="px-9 py-3 rounded-2xl font-semibold bg-green-600 shadow-md shadow-white hover:bg-black hover:shadow-lg active:scale-95 transition-all duration-200 text-white"
        >
          Found Something
        </button>

      </div>
    </section>
  );
}
