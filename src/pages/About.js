export default function About() {
  return (
    <div>
      
      <div>

       
        <h1 className="text-4xl font-bold text-center mb-6 text-white">
          About This Platform
        </h1>

        
        <p className="text-lg text-white text-center mb-10">
          This Lost & Found portal helps people reconnect with their lost belongings.
          Users can report lost or found items, upload images, and contact each other directly.
        </p>

        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          
          <div className="bg-gray-100 rounded-2xl p-6 shadow">
            <h2 className="font-semibold text-xl mb-2"> Report Lost Items</h2>
            <p className="text-gray-600">Post details of lost items to notify others.</p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-6 shadow">
            <h2 className="font-semibold text-xl mb-2">Found Something?</h2>
            <p className="text-gray-600">Upload found items and help return them.</p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-6 shadow">
            <h2 className="font-semibold text-xl mb-2"> Image Upload</h2>
            <p className="text-gray-600">Upload photos to identify items easily.</p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-6 shadow">
            <h2 className="font-semibold text-xl mb-2">Secure</h2>
            <p className="text-gray-600">Only post owners can delete their posts.</p>
          </div>

        </div>

       
        <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-2xl p-8 text-center shadow-xl">

          <h2 className="text-2xl font-bold mb-2">Developer</h2>
          <p className="text-lg mb-4">Aryan Raj — Full Stack Developer</p>
        </div>

      </div>
    </div>
  );
}