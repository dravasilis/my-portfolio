import './introduction.css'

  type IntroductionProps ={
   setScrollToWork: React.Dispatch<React.SetStateAction<boolean>>;
  }

function Introduction({setScrollToWork}:IntroductionProps){
   const scrollWorkIntoView =() =>{
      document.querySelector('#work')?.scrollIntoView({
         behavior: 'smooth'
      })
   }
   return(
      <div className='flex flex-col  gap-44 relative'>
         <div className="text-5xl font-bold tracking-wide text-white leading-relaxed ">
            <span >Hi, my name is <span className="text-myTeal">Vasilis Dramitinos</span><br></br>and I develop</span>
            <div className='wrapper'>
               <ul className="dynamic-texts">
                  <li><span>&lt; websites  / &gt;</span></li>
                  <li><span>&lt; webapps  / &gt;</span></li>
                  <li><span>&lt; applications  / &gt;</span></li>
                  <li><span>&lt; things  / &gt;</span></li>
               </ul>
            </div>
         </div>
         <div className='flex w-max gap-2 relative right-12 hover:cursor-pointer hoverClass' onClick={()=>scrollWorkIntoView()}>
               <img src="/assets/svg/scroll.svg" alt="scroll" width={'30'} />
               <span className='text-teal-400 text-xl font-bold'>Take a look </span>
         </div>
      </div>
   )
}
export default Introduction;
