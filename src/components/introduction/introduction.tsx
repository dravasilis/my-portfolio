import './introduction.css'

  type IntroductionProps ={
   setScrollToWork: React.Dispatch<React.SetStateAction<boolean>>;
  }

function Introduction({setScrollToWork}:IntroductionProps){
   const scrollWorkIntoView =() =>{
      document.querySelector('#about-me')?.scrollIntoView({
         behavior: 'smooth'
      })
   }
   return(
      <div className='flex flex-col  gap-44 relative'>
         <div className="text-5xl max-mobileXS:text-lg max-tablet:text-[2rem] font-bold tracking-wide text-white leading-relaxed flex">
            <span >Hi, my name is <span className="text-myTeal ">Vasilis Dramitinos</span><br></br>
            <p className='flex items-center w-max'>
               and i develop
               <div className='wrapper'>
               <ul className="dynamic-texts">
                  <li><span>&lt; websites  / &gt;</span></li>
                  <li><span>&lt; webapps  / &gt;</span></li>
                  <li><span>&lt; applications  / &gt;</span></li>
                  <li><span>&lt; things  / &gt;</span></li>
               </ul>
            </div>
            </p>
            </span>
            
         </div>
         <div className='flex w-max gap-2 relative !right-12 max-mobile:!right-0 hover:cursor-pointer hoverClass' onClick={()=>scrollWorkIntoView()}>
               <img src="https://dravasilis.github.io/my-portfolio/assets/svg/scroll.svg" alt="scroll" width={'30'} />
               <span className='textShadow text-xl font-bold'>Take a look </span>
         </div>
      </div>
   )
}
export default Introduction;
