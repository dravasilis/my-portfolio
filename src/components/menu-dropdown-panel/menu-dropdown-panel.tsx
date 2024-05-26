import { useEffect, useRef } from "react";

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
         <div className="flex flex-col gap-16 w-full px-96 py-52">
            <a className=" text-5xl text-stone-300" href="">Work</a>
            <a className=" text-5xl text-stone-300" href="">Experience</a>
            <a className=" text-5xl text-stone-300" href="">About Me</a>
         </div>
         </div>
   )
}

export default MenuDropdownPanel;
