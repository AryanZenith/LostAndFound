import React from 'react';

export default function Herosection() {
    return (
        
       
        <section className="relative flex flex-col md:flex-row items-center justify-between px-6 py-1 ">
            
         
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-5%] w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-orange-200 rounded-full blur-3xl"></div>
            </div>

          
            <div className="relative z-10 md:w-1/2 space-y-8 text-center md:text-left md:pl-12">
                <h1 className="text-4xl md:text-7xl font-black text-slate-900 leading-[1.1]">
                    Lost it? Found it? <br /> 
                    <span className="text-white italic">You're on the right platform!</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-900 max-w-lg leading-relaxed font-medium">
                    The most trusted community-driven portal to recover your missing belongings. 
                    Simple, fast, and secure.
                </p>
            </div>

            <div className="relative z-10 md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
               
              <div className="relative p-1  rounded-full overflow-hidden border-4 bg-gradient-to-r from-[#9bc5e2] to-[#d9b26b] ">
    <img 
  src="https://img.freepik.com/premium-photo/3d-smiling-face-cute-boy-with-glasses-wearing-black-shirt_920742-332.jpg" 
  alt="Lost and Found Assistant Avatar" 

  className="w-full max-w-md mix-blend-multiply transform hover:scale-105 transition duration-500"
/>
</div>
            </div>
        </section>
    );
}