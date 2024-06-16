import { useEffect, useRef, useState } from "react";
import CustomMenuIcon from "../custom-menu-icon/custom-menu-icon";
import './navigation.css'
import MenuDropdownPanel from "../menu-dropdown-panel/menu-dropdown-panel";
import { Link, Route, Routes } from "react-router-dom";
import MainView from "../main-view/Main-View";

type NavigationProps = {
   isMenuOpen: boolean;
   setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
 };

function Navigation({ isMenuOpen, setIsMenuOpen }: NavigationProps){
   const nameRef = useRef<HTMLAnchorElement>(null)

   // let [isMenuOpen,setIsMenuOpen] = useState(false)
   useEffect(()=>{
      if( !nameRef.current){return}
      nameRef.current.style.transitionDuration = '1500ms';
      setInterval(()=>{
         if( !nameRef.current   ){return}
         nameRef.current.style.top = '3rem'
         nameRef.current.style.left = '8rem'
         setInterval(()=>{
         if( !nameRef.current ){return}
            nameRef.current.style.transitionDuration = '250ms'
         },150)
   },1000)

   },[])
   const handleMenu = () => {
      if(isMenuOpen){
         setIsMenuOpen(false)
      }
      else{
         setIsMenuOpen(true)
      }
   }

  
   return(
      <div >  
      {/* navigation bar */}
            <a onClick={()=>{ setIsMenuOpen(false)}} href="" ref={nameRef} className='absolute text-lg tracking-normal opacity-75 font-bold -left-24  text-glow-blue
            text-white   hover:tracking-widest  z-1 '>
            &lt; V.D. / &gt;
            </a>
           <CustomMenuIcon handleClick={()=> handleMenu()} isMenuOpen={isMenuOpen}/>
      {/* dropdown menu panel */}
        <MenuDropdownPanel isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
   )
}

export default Navigation; 