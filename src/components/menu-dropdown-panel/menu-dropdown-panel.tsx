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
         document.body.style.overflow = 'auto'
         menuPanelRef.current.style.transitionDuration = '750ms';
            if(!menuPanelRef.current){return}
            menuPanelRef.current.style.top = '-100vh';
         }
         else{
            menuPanelRef.current.style.top = '0';
      }
   },[isMenuOpen])
   return(
      <div ref={menuPanelRef} className="panelGlass  absolute -top-[100vh] left-0  duration-500 w-[100vw] h-[100vh]">
         <div className="w-full h-full flex  items-center justify-around ">
            <div className="flex flex-col gap-8  w-24">
               <a onClick={()=>{ setIsMenuOpen(false)}}  className="tabs" href="/">&lt; Home /&gt;</a>
               <a onClick={()=>{ setIsMenuOpen(false)}} className="tabs" href="/">&lt; Work /&gt;</a>
               <a onClick={()=>{ setIsMenuOpen(false)}} className="tabs" href="/">&lt; Experience /&gt;</a>
               <a onClick={()=>{ setIsMenuOpen(false)}} className="tabs" href="/">&lt; About Me /&gt;</a>
               <a onClick={()=>{ setIsMenuOpen(false)}} className="tabs" href="/">&lt; Contact /&gt;</a>
            </div>
            <div className="flex flex-col gap-16 w-[30rem]">
               <span className=" text-5xl font-bold text-white">Let's work together!</span>
               <span className=" text-2xl text-white leading-relaxed tracking-wide">Feeling ready for our first collaboration? Feel free to contact me down below!</span>
               <button className="text-xl flex gap-2 items-center font-bold text-white border-2 rounded-lg border-white w-max py-2 px-4 hover:bg-white 
               hover:text-teal-800 duration-200 active:scale-95  hover:tracking-wider ">  Get in touch</button>
            </div>
         </div>
         </div>
   )
}

export default MenuDropdownPanel;
