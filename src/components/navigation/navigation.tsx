import { useEffect, useRef, useState } from "react";
import CustomMenuIcon from "../custom-menu-icon/custom-menu-icon";
import './navigation.css'
import MenuDropdownPanel from "../menu-dropdown-panel/menu-dropdown-panel";

function Navigation(){
   const nameRef = useRef<HTMLImageElement>(null)

   let [isMenuOpen,setIsMenuOpen] = useState(false)
   useEffect(()=>{
      if( !nameRef.current){return}
      nameRef.current.style.transitionDuration = '1500ms';
      setInterval(()=>{
         if( !nameRef.current   ){return}
         nameRef.current.style.top = '3rem'
         nameRef.current.style.left = '13rem'
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
      <div className="z-[1000] relative">  
      {/* navigation bar */}
      <div className=" sticky top-0 left-0 z-[1001] overflow-x-clip ">
            <span ref={nameRef} className='absolute text-lg tracking-normal opacity-75 font-bold -left-24 
            text-white   hover:tracking-widest hover:cursor-default'>
            &lt; V.D. / &gt;</span>
           <CustomMenuIcon handleClick={()=> handleMenu()} isMenuOpen={isMenuOpen}/>
      </div>
      {/* dropdown menu panel */}
        <MenuDropdownPanel isMenuOpen={isMenuOpen} />
      </div>
   )
}

export default Navigation;
