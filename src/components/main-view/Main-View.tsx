import { useEffect, useRef } from 'react';
import './Main-View.css'
import Navigation from '../navigation/navigation';



function MainView(){
    const starsRef = useRef<HTMLImageElement>(null)
    const starsRef2 = useRef<HTMLImageElement>(null)
    const welcomeRef = useRef<HTMLImageElement>(null)
    useEffect(() => {
        if(!starsRef.current || !starsRef2.current || !welcomeRef.current  ){return}
            starsRef.current.style.transitionDuration = '2500ms';
            starsRef2.current.style.transitionDuration = '2500ms';
            welcomeRef.current.style.transitionDuration = '3000ms';
            setInterval(()=>{
                starsRef.current!.style.opacity = '0.5'
                starsRef.current!.style.marginLeft = '0px'
                welcomeRef.current!.style.opacity = '1'
              
                setInterval(()=>{
                    starsRef2.current!.style.opacity = '0.3'
                    starsRef2.current!.style.marginLeft = '0px'
                },100)
            },1000)


      },[]);
    return(
        <div className="view h-full bg-red-400">
            <div className=' w-full'>
                <Navigation />
            </div>
            <div className="image-container">
                <div ref={starsRef} className='image'  ></div>
                <img ref={starsRef2} src="/assets/img/stars.jpg" alt="stars" className=' opacity-0 object-cover absolute top-0 h-full w-full'/>
            </div>
            <span ref={welcomeRef} className=' opacity-0 flex justify-center absolute top-52 text-white text-7xl text-center w-full'>Welcome</span>
          
          </div>
    )
}

export default MainView;