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
   let exp = document.getElementById('experience')
   const expFromTop =exp&& exp.getBoundingClientRect().top + window.scrollY;
   let contact = document.getElementById('contact')
   const contactFromTop =contact&& contact.getBoundingClientRect().top + window.scrollY;
   useEffect(()=>{
      if(!menuPanelRef.current){return}
      menuPanelRef.current.style.transitionDuration = '500ms';
      if(!isMenuOpen){
         document.body.style.overflow = 'auto'
         menuPanelRef.current.style.transitionDuration = '750ms';
            if(!menuPanelRef.current){return}
            menuPanelRef.current.style.top = '-100vh';
            document.body.style.overflow = '';
         }
         else{
            document.body.style.overflow = 'hidden';
             menuPanelRef.current.style.top = '0';
      }
   },[isMenuOpen])
   return(
      <div ref={menuPanelRef} className="panelGlass  absolute -top-[100vh] left-0  duration-500 w-[100vw] h-[100vh]">
         <div className="w-full h-full flex  items-center justify-around max-[1450px]:gap-[12rem] max-mobileXS:flex-col-reverse max-mobileXS:gap-0 max-mobileXS:p-12   ">
            <div className="flex flex-col gap-8 max-mobileXS:gap-6 max-mobile:ml-4  w-24 max-mobileXS:w-full max-mobileXS:items-center max-mobileXXS:mb-4">
               <button onClick={()=>{ setIsMenuOpen(false);window.scrollTo({top:0,left:0,behavior:'smooth'})}}  className="tabs" >&lt; Home /&gt;</button>
               <button onClick={()=>{ setIsMenuOpen(false);document.querySelector('#about-me')?.scrollIntoView({behavior:'smooth'})}} className="tabs">&lt; About Me /&gt;</button>
               <button onClick={()=>{ setIsMenuOpen(false);document.querySelector('#work')?.scrollIntoView({behavior:'smooth'})}} className="tabs">&lt; Work /&gt;</button>
               <button onClick={()=>{ setIsMenuOpen(false);window.scrollTo({top:expFromTop!-200,left:0,behavior:'smooth'})}} className="tabs">&lt; Experience /&gt;</button>
               <button onClick={()=>{ setIsMenuOpen(false);window.scrollTo({top:contactFromTop!-150,left:0,behavior:'smooth'})}} className="tabs">&lt; Contact /&gt;</button>
            </div>
            <div className="flex flex-col gap-16 max-mobileXS:gap-4 max-mobileXS:items-center w-[30rem] max-mobileXS:w-full max-mobileXS:text-center">
               <span className=" text-5xl max-mobile:text-[2rem] font-bold text-white w-max">Let's work together!</span>
               <span className=" text-2xl max-mobile:text-xl max-mobileXXS:text-[1.1rem] text-white leading-relaxed tracking-wide">Feeling ready for our first collaboration? Feel free to contact me down below!</span>
               <button className="text-xl max-mobileXS:text-base max-mobileXS:px-2 max-mobileXS:py-1 flex gap-2 items-center font-bold text-white border-2 rounded-lg border-white w-max py-2 px-4 hover:bg-white 
               hover:text-teal-800 duration-200 active:scale-95  hover:tracking-wider max-mobileXS:hidden">  Get in touch</button>
            </div>
         </div>
         </div>
   )
}

export default MenuDropdownPanel;
