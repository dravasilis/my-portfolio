import { useEffect, useRef, useState } from "react";
import CustomMenuIcon from "../custom-menu-icon/custom-menu-icon";
import './navigation.css'

function Navigation(){
   const menuPanelRef = useRef<HTMLDivElement>(null);
   const nameRef = useRef<HTMLImageElement>(null)

   let [isMenuOpen,setIsMenuOpen] = useState(false)
   useEffect(()=>{
      if( !nameRef.current   ){return}
      nameRef.current.style.transitionDuration = '1500ms';
      
      setInterval(()=>{
         if( !nameRef.current   ){return}
         nameRef.current.style.top = '1rem'
         nameRef.current.style.left = '13rem'
         setInterval(()=>{
         if( !nameRef.current ){return}
            nameRef.current.style.transitionDuration = '250ms'
         },150)
   },1000)

   },[])
   const handleMenu = () => {
      if(!menuPanelRef.current){return}
      menuPanelRef.current.style.transitionDuration = '500ms';
      if(isMenuOpen){
            menuPanelRef.current.style.top = '-100vh';
            setIsMenuOpen(false)
            return;
      }
      else{
            menuPanelRef.current.style.top = '0';
            setIsMenuOpen(true)
            return;
      }
   }

  
   return(
      <div className="z-[1000] relative">  
      {/* navigation bar */}
      <div className=" sticky top-0 left-0 z-[1001] overflow-x-clip ">
            <span ref={nameRef} className='absolute text-lg opacity-75 font-bold -left-24 
            text-white tracking-tighter hover:tracking-widest hover:cursor-default'>
            &lt; V.D. / &gt;</span>
           <CustomMenuIcon handleClick={()=> handleMenu()} isMenuOpen={isMenuOpen}/>
      </div>
      {/* dropdown menu panel */}
         <div ref={menuPanelRef} className="gradient  absolute -top-[100vh] left-0  duration-500 w-[100vw] h-[100vh]   ">
         </div>
      </div>
   )
}

export default Navigation;
