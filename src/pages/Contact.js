export default function Contact() {
  return (
      
      <div className="max-w-xl w-full  bg-white rounded-3xl shadow-2xl pt-16 px- p-10 text-center ">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Contact Me
        </h1>

        <p className="text-gray-600 mb-10">
          You can connect with me through these platforms
        </p>

        <div className="space-y-5">

          <a
            href="https://luminous-paletas-bf21c2.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-900 text-white py-3 rounded-xl font-semibold hover:scale-105 transition duration-300"
          >
            Visit My Portfolio
          </a>

          <a
            href="http://www.linkedin.com/in/aryanraj2709"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-blue-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transition duration-300"
          >
            LinkedIn Profile
          </a>

          <a
            href="https://github.com/AryanZenith"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-800 text-white py-3 rounded-xl font-semibold hover:scale-105 transition duration-300"
          >
            GitHub Profile
          </a>

        </div>

      </div>
  );
}