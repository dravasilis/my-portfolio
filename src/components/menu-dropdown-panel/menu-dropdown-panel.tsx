import { useEffect, useRef } from "react";
import './menu-dropdown-panel.css'
type MenuDropdownPanelProps = {
   isMenuOpen: boolean
}
function MenuDropdownPanel({isMenuOpen}:MenuDropdownPanelProps){
   const menuPanelRef = useRef<HTMLDivElement>(null);

   useEffect(()=>{
      if(!menuPanelRef.current){return}
      menuPanelRef.current.style.transitionDuration = '500ms';
      if(!isMenuOpen){
         menuPanelRef.current.style.transitionDuration = '750ms';
         setTimeout(() => {
            if(!menuPanelRef.current){return}
            menuPanelRef.current.style.top = '-100vh';
            
         }, 100)
         }
         else{
            menuPanelRef.current.style.top = '0';
      }
   },[isMenuOpen])
   return(
      <div ref={menuPanelRef} className="gradient  absolute -top-[100vh] left-0  duration-500 w-[100vw] h-[100vh]">
         <div className="w-full h-full flex  items-center justify-around ">
            <div className="flex flex-col gap-8  w-24">
               <a className="tabs" href="">&lt; Work /&gt;</a>
               <a className="tabs" href="">&lt; Experience /&gt;</a>
               <a className="tabs" href="">&lt; About Me /&gt;</a>
               <a className="tabs" href="">&lt; Contact /&gt;</a>
            </div>
            <div className="flex flex-col gap-16 w-[30rem]">
               <span className=" text-5xl font-bold text-stone-300">Let's work together!</span>
               <span className=" text-2xl text-stone-300 leading-relaxed tracking-wide">Feeling ready for our first collaboration? Feel free to contact me down below!</span>
               <button className="text-xl flex gap-2 items-center font-bold text-stone-300 border-2 rounded-lg border-stone-300 w-max py-2 px-4 hover:bg-stone-300 
               hover:text-teal-800 duration-150 active:scale-95 ">  Get in touch</button>
            </div>
         </div>
         </div>
   )
}

export default MenuDropdownPanel;
