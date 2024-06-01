import { useEffect, useRef, useState } from 'react';
import './Main-View.css'
import Navigation from '../navigation/navigation';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Home from '../home/home';
import Contact from '../contact/contact';



function MainView(){
    const starsRef = useRef<HTMLImageElement>(null)
    const starsRef2 = useRef<HTMLImageElement>(null)
    const routerLinkRef = useRef<HTMLImageElement>(null)
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State lifted to parent
    useEffect(() => {
        if(!starsRef.current || !starsRef2.current || !routerLinkRef.current   ){return}
            starsRef.current.style.transitionDuration = '1000ms';
            starsRef2.current.style.transitionDuration = '2500ms';
            routerLinkRef.current.style.transitionDuration = '2500ms';
            setInterval(()=>{
            routerLinkRef.current!.style.bottom = '30rem';
                starsRef.current!.style.opacity = '0.5'
                routerLinkRef.current!.style.opacity = '1'
                starsRef.current!.style.marginLeft = '-100px'
                
                setInterval(()=>{
                    starsRef2.current!.style.opacity = '0.3'
                    starsRef2.current!.style.marginLeft = '0px'
                },100)
            },1000)

            navigate('/home')
      },[]);
    return(
        <div className="view h-full bg-red-400">
            <div className=' w-full'>
                <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
            </div>
            <div className="image-container">
                <div ref={starsRef} className='image'  ></div>
                <img ref={starsRef2} src="/assets/img/stars.jpg" alt="stars" className=' opacity-0 object-cover absolute top-0 h-full w-full'/>
            </div>  
            <div ref={routerLinkRef}   className={`opacity-0 relative bottom-[32rem] left-96 ${isMenuOpen ? 'isMenuOpen':null}`} >
                <Routes>
                    <Route path='/home'  element={<Home />}/>  
                    <Route path="/work"/>
                    <Route path="/experience"/>
                    <Route path="/about-me"/>
                    <Route path="/contact" element={<Contact />}/>
                </Routes>
            </div>
        
          </div>
    )
}

export default MainView;