import { useState } from "react";
import Logo from "../assets/logo-text.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="container sticky top-0 z-50 bg-white  mx-auto px-4 py-4 ">
   

      <div className="flex justify-between items-center">
        
      
    
     
        <div className="order-2 md:order-1 flex justify-center md:justify-start">
          <img src={Logo} alt="Logo" className="w-32 md:w-40" />
        </div>

       
        <ul className="hidden gap-8 font-medium text-[#475569] md:order-2 md:flex">
          <li className="text-[#DB2777] font-semibold cursor-pointer">Home</li>
          <li className="cursor-pointer">Technologies</li>
          <li className="cursor-pointer">Projects</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>

        
        <div className="order-3 flex items-center gap-1 sm:gap-3">
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="rounded-md p-2 text-xl text-[#334155] md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? "×" : "☰"}
          </button>
    
          <button className="px-2 py-1.5 text-sm font-medium text-[#334155] hover:opacity-90 sm:px-4 md:px-6 md:py-2.5 md:text-base">
            Sing In
          </button>
          
          <button className="rounded-full bg-[#D91B7E] px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:opacity-90 sm:px-4 md:px-6 md:py-2.5 md:text-base">
            Sign Up
          </button>
          
        </div>

      </div>

     
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-b border-gray-100">
          <ul className="flex flex-col gap-4 font-medium text-[#475569]">
            <li className="text-[#DB2777] font-semibold">Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
            <li className="pt-2 border-t">Sign In</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;