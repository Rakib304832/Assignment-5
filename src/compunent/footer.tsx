
import Logo from "../assets/logo-text.png";


export default function Footer() {
  return (
  
    <footer className="bg-white border-t border-gray-100 px-6 md:px-12 py-10 md:py-12">
     
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 text-center md:text-left">

  
        <div className="md:col-span-1">
          
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
          <img src={Logo}/>
          </div>

         
          <p className="text-gray-500 text-sm leading-relaxed mb-4 max-w-xs mx-auto md:mx-0">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="flex justify-center md:justify-start gap-4 text-sm text-gray-600">
            <a href="#" className="hover:text-pink-600 transition-colors">GitHub</a> 
            <a href="#" className="hover:text-pink-600 transition-colors">Twitter</a>
            <a href="#" className="hover:text-pink-600 transition-colors">LinkedIn</a>
          </div>
        </div>

       
        <div>
          <h3 className="font-semibold text-gray-900 mb-4 text-sm">PRODUCT</h3>
          
          <ul className="space-y-3 text-sm text-gray-500">
            <li><a href="#" className="hover:text-pink-600 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-pink-600 transition-colors">Technologies</a></li>
            <li><a href="#" className="hover:text-pink-600 transition-colors">Projects</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="font-semibold text-gray-900 mb-4 text-sm">COMPANY</h3>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><a href="#" className="hover:text-pink-600 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-pink-600 transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-pink-600 transition-colors">Careers</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold text-gray-900 mb-4 text-sm">LEGAL</h3>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><a href="#" className="hover:text-pink-600 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-pink-600 transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 md:mt-10 pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-xs text-gray-400">
      
        <span>© {new Date().getFullYear()} Dev Stack. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-pink-600 transition-colors">Privacy</a>
          <a href="#" className="hover:text-pink-600 transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}