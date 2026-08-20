"use client"
import{useState} from "react";
import SignInModal from "./SignInModal";
export default function Navbar() {
  const [open, setOpen]= useState(false);
  const[showSignIn, setSHowSignIn]= useState(false);
  return (
    <nav className=" sticky top-0 z-50 w-full flex items-center justify-between px-4 md:px-8 py-4 bg-white shadow-sm">
        <div className="text-xl font-bold text-black">
            RetailStacker
        </div>
      <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
        <li><a href="#home" className="hover:text-black transition-colors cursor-pointer">Home</a></li>
        <li><a href="#features" className="hover:text-black transition-colors cursor-pointer">Shop</a></li>
        <li><a href="#about" className="hover:text-black transition-colors cursor-pointer">about</a></li>
        <li><a href="#contact" className="hover:text-black transition-colors cursor-pointer">contact</a></li>
      </ul>
      <div className="flex items-center gap-4">
      <button className="bg-black text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
onClick={() => setSHowSignIn(true)}>
  Sign In
        </button>

      <button className="md:hidden text-black text-2xl"
  onClick={() => setOpen(!open)}>
    =
         </button>
      </div>
     { open && (
       <div className="md:hidden relative  w-full flex flex-col gap-4 px-8 py-6 bg-white shadow-md text-sm font-medium text-gray-700 border-t border-gray-100">
          <a href="#home" className="cursor-pointer hover:text-black" onClick={() => setOpen(false)}>Home</a>
          <a href="#features" className="cursor-pointer hover:text-black" onClick={() => setOpen(false)}>Shop</a>
          <a href="#about" className="cursor-pointer hover:text-black" onClick={() => setOpen(false)}>About</a>
          <a href="#contact" className="cursor-pointer hover:text-black" onClick={() => setOpen(false)}>Contact</a>
        </div> )}
{showSignIn && <SignInModal onClose={()=> setSHowSignIn(false)} />}
      </nav>
  );
 }

  
    
  



        

        
      
      

          

      
    
       
    

      
      
  
