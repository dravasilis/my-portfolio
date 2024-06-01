import { useEffect, useRef } from "react";
import './menu-dropdown-panel.css'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import MainView from "../main-view/Main-View";
type MenuDropdownPanelProps = {
   isMenuOpen: boolean,
   setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
function MenuDropdownPanel({isMenuOpen, setIsMenuOpen}:MenuDropdownPanelProps){
   const menuPanelRef = useRef<HTMLDivElement>(null);

   useEffect(()=>{
      if(!menuPanelRef.current){return}
      menuPanelRef.current.style.transitionDuration = '500ms';
      if(!isMenuOpen){
         menuPanelRef.current.style.transitionDuration = '750ms';
            if(!menuPanelRef.current){return}
            menuPanelRef.current.style.top = '-100vh';
         }
         else{
            menuPanelRef.current.style.top = '0';
      }
   },[isMenuOpen])
   return(
      <div ref={menuPanelRef} className="gradient  absolute -top-[100vh] left-0  duration-500 w-[100vw] h-[100vh]">
         <div className="w-full h-full flex  items-center justify-around ">
            <div className="flex flex-col gap-8  w-24">
               <Link onClick={()=>{ setIsMenuOpen(false)}}  className="tabs" to="/home">&lt; Home /&gt;</Link>
               <Link onClick={()=>{ setIsMenuOpen(false)}} className="tabs" to="/work">&lt; Work /&gt;</Link>
               <Link onClick={()=>{ setIsMenuOpen(false)}} className="tabs" to="/experience">&lt; Experience /&gt;</Link>
               <Link onClick={()=>{ setIsMenuOpen(false)}} className="tabs" to="/about-me">&lt; About Me /&gt;</Link>
               <Link onClick={()=>{ setIsMenuOpen(false)}} className="tabs" to="/contact">&lt; Contact /&gt;</Link>
            </div>
            <Routes>
               
            </Routes>
            <div className="flex flex-col gap-16 w-[30rem]">
               <span className=" text-5xl font-bold text-stone-300">Let's work together!</span>
               <span className=" text-2xl text-stone-300 leading-relaxed tracking-wide">Feeling ready for our first collaboration? Feel free to contact me down below!</span>
               <button className="text-xl flex gap-2 items-center font-bold text-stone-300 border-2 rounded-lg border-stone-300 w-max py-2 px-4 hover:bg-stone-300 
               hover:text-teal-800 duration-200 active:scale-95  hover:tracking-wider ">  Get in touch</button>
            </div>
         </div>
         </div>
   )
}

export default MenuDropdownPanel;
