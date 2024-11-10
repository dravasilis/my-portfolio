import { useRef, useEffect } from 'react';
import './work.css'
import { Project } from '../../models/project';
import { log } from 'console';
import './../../../src/index.css'
function Work(){
   const projects:Project[] =[
      {
      name:'Movie Database Application',
      description:'It is about a movie application resembling iMDB, including database information about movies, tv shows and video games.',
      img:'https://dravasilis.github.io/my-portfolio/assets/img/movie-app.png',
      skills:'Frontend Development, React, Typescript, Http Client'
   },
      {
      name:'3D Scene',
      description:'High texture 3D scene made with Unity Engine including 3D models made and designed from scratch accompanied by lighting sources and animations using keyframes and physics.',
      img:'https://dravasilis.github.io/my-portfolio/assets/img/3d-room.png',
      skills:'Unity, C#, 3D Graphics'
   },
      {
      name:'Admin Software Application',
      description:'Admin Software developed for businesses.',
      img:'https://dravasilis.github.io/my-portfolio/assets/img/LB.png',
      skills:'Frontend Development, Angular, RxJS, Typescript, HTTP Client'
   },
]
   // const projectRef = useRef(null);
   const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
   useEffect(() => {
       const observer = new IntersectionObserver((entries) => {
           entries.forEach((entry) => {
               if (entry.isIntersecting) {
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
      <div className='flex flex-col gap-24 max-[650px]:items-center'>
            <span className='text-5xl max-mobile:text-4xl max-[430px]:text-[2rem] max-[430px]:p-3  text-teal-200 font-bold neon-sign-purple w-max rounded-xl p-4  '> &lt; Work / &gt;</span>
            <div className='flex flex-col gap-12 -ml-8'>
               {projects.map((project,index) =>(
                  <div key={index} ref={el => projectRefs.current[index] = el} className={`fade-in flex-row max-mobile:flex-col  relative   flex items-center gap-2 p-4 z-[1] ${index===1? 'flex-row-reverse':''} `}>
                    {/* label  */}
                     <span className={`absolute z-[1] title  glass text-white text-3xl max-mobile:text-xl  top-16 py-3 px-4 w-80 max-mobile:w-60 ${index===1? 'right-[13rem] max-mobile:right-4':'-left-32 max-mobile:left-0'}`}>{project.name}</span>
                    {/* image  */}
                     <div className=' relative'>
                        <div className='projectImg-container'>
                           <img  src={project.img} alt="" className='rounded-xl ' />
                        </div>
                        <div className=' flex flex-col items-center justify-center py-3 text-white max-sm:text-base text-lg absolute bottom-0 glassSkills w-full neon-sign-purple'>
                           <span className=' tracking-wider text-center'>{project.skills}</span>
                        </div>
                     </div>
                     {/* line  */}
                     <div className=' max-mobile:!h-20 max-mobile:!w-[1px] text-white  glassDesc  flex items-center justify-center'></div>
                     <span className=' description truncate whitespace-break-spaces bg-[#101010]'>{project.description}</span>
                  </div>
               ))}
            </div>
      </div>
   )
}
export default Work;
