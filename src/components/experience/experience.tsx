import { useEffect, useRef } from 'react';
import './experience.css'
import { Timeline } from '../../models/timeline';
import { log } from 'console';


function Experience( ){
   const timestamps:Timeline[] =[
      {
         description:'Started studying at Department of Information and Electronic Engineering'
      },
      {
         description:'Started developing personal projects'
      },
      {
         description:'Started working at SmartUp IKE - a company that develops apps and admin platforms'
      },
      
   ]
   const timestampRefs = useRef<(HTMLDivElement | null)[]>([]);
   const yearLabelRef = useRef<HTMLDivElement>(null)
   const yearLabelRef2 = useRef<HTMLDivElement>(null)
   const yearLabelRef3 = useRef<HTMLDivElement>(null)

   useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                 console.log(1);
                 
                  entry.target.classList.add('visibleTimestamp');
              } 
              else {
                  entry.target.classList.remove('visibleTimestamp');
              }
          });
      }, {
          threshold: 1,
      });

      timestampRefs.current.forEach(ref => {
         if (ref) {
             observer.observe(ref);
         }
     });
     if(yearLabelRef.current)
         observer.observe(yearLabelRef.current)
      if(yearLabelRef2.current)
         observer.observe(yearLabelRef2.current)
      if(yearLabelRef3.current)
         observer.observe(yearLabelRef3.current)
}, []);
   return(
   <div className=' flex flex-col '>
      <span className='text-5xl text-teal-200 font-bold neon-sign-purple w-max rounded-xl p-4'> &lt; Experience / &gt;</span>
      <div className=' w-max  ml-[36rem] top-[3400px] absolute  flex flex-col gap-[20rem]'>
         <span ref={yearLabelRef} className='neon-sign-purple opacity-0    text-white w-max py-4 px-12 duration-1000 z-[1] text-3xl bg-slate-900  rounded-xl'>2018</span>
         <span ref={yearLabelRef2} className='neon-sign-purple opacity-0   text-white w-max py-4 px-12 duration-1000 z-[1] text-3xl bg-slate-900  rounded-xl'>2021</span>
         <span ref={yearLabelRef3} className='neon-sign-purple opacity-0   text-white w-max py-4 px-12 duration-1000 z-[1] text-3xl bg-slate-900  rounded-xl'>2023</span>
      </div>
      <div className=' flex flex-col gap-[20rem] py-[20rem]'>
         {timestamps.map((timestamp,index)=>(
            <div key={index} ref={el => timestampRefs.current[index] = el} 
            className={`flex ${index===(1 || 3)?'relative -right-[32rem]':''} bg-slate-900 z-[1] flex-col gap-2 items-center neon-sign-blue -ml-44 duration-1000 opacity-0 p-8 w-max rounded-2xl `}>
               <span className='text-white text-xl'>{timestamp.description}</span>
            </div>
         ))}
      </div>
  </div> 
   ) 
}
export default Experience;
