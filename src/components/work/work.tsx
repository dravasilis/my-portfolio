import { useRef, useEffect } from 'react';
import './work.css'
import { Project } from '../../models/project';
import { log } from 'console';
function Work(){
   const projects:Project[] =[
      {
      name:'Movie Database Application',
      description:'It is about a movie application resembling iMDB, including database information about movies, tv shows and video games.',
      img:'/assets/img/movie-app.png',
      skills:'Frontend Development, React, Typescript, Http Client'
   },
      {
      name:'Md Application',
      description:'It is about a movie application resembling iMDB, including database information about movies, tv shows and video games.',
      img:'/assets/img/movie-app.png',
      skills:'Frontend Development, React, Typescript, Http Client'
   },
]
   // const projectRef = useRef(null);
   const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
   useEffect(() => {
       const observer = new IntersectionObserver((entries) => {
           entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  console.log(1);
                  
                   entry.target.classList.add('visible');
               } 
               else {
                   entry.target.classList.remove('visible');
               }
           });
       }, {
           threshold: 0.4
       });

       projectRefs.current.forEach(ref => {
         if (ref) {
             observer.observe(ref);
         }
     });
     return () => {
      projectRefs.current.forEach(ref => {
          if (ref) {
              observer.unobserve(ref);
          }
      });
  };
}, []);
   return(
      <div className='flex flex-col gap-24 '>
            <span className='text-5xl text-teal-200 font-bold'> &lt; Work / &gt;</span>
            <div className='flex flex-col gap-8'>
               {projects.map((project,index) =>(
                  <div key={index}ref={el => projectRefs.current[index] = el} className={`fade-in -ml-44 relative w-max flex items-center gap-2 p-4 z-10 ${index===1? 'flex-row-reverse':''} `}>
                     <span className={`absolute z-[1]  glass text-white text-3xl  top-16 py-3 px-4 w-80 ${index===1? '-right-32':'-left-32'}`}>{project.name}</span>
                     <div className='projectImg-container'>
                        <img  src={project.img} alt="" className='rounded-xl ' />
                     </div>
                     <div className='  text-white  glassDesc  flex items-center justify-center'></div>
                     <span className=' description truncate whitespace-break-spaces '>{project.description}</span>
                  </div>
               ))}
            </div>
      </div>
   )
}
export default Work;
