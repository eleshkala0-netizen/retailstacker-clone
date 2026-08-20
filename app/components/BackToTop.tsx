"use client";
import {useEffect , useState} from "react";
export default function BackToTop(){
    const[show,setShow]= useState(false);
    useEffect(()=>{
        const handleScroll=()=> {
            setShow(window.scrollY>400);
        };
        window.addEventListener("scroll",handleScroll);
        return()=> window.removeEventListener("scroll",handleScroll);
    }, []);
    if (!show)return null;
    return(
        <button
                onClick={()=> window.scrollTo({top:0, behavior: "smooth"})}
                className="fixed bottom-6 right-6 bg-blue-600 text-white w-12 h-12 rounded-full shadow-Ig border-2 border-white

                hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center text-xl z-50"
                ></button>

    );
    }
