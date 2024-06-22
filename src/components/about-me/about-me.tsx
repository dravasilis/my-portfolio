import './about-me.css'
function AboutMe(){
   return(
      <div className=" flex flex-col gap-16">
            <span className='text-5xl text-teal-200 font-bold neon-sign-purple w-max rounded-xl p-4'> &lt; About me / &gt;</span>
            <div className=" flex items-center">
               <span className="w-[40rem] text-xl leading-8 tracking-wider  neon-sign-blue p-8 bg-slate-900 rounded-3xl text-glow-blue text-white">I am a programmer and more specifically i develop websites and applications. What drives me is the continuous urge for knowledge and always setting myself against challenges that will make me a better developer.</span>
                 <div className="w-[20rem] h-1 p-[1px] gradient-line"></div>
                  <div className="neon-sign-purple rounded-3xl gap-4 pl-16 pr-16 pt-16 pb-8 flex flex-col bg-slate-950">
                     <img src="/assets/svg/programmer.svg" alt="programmer" width={150}  />
                     <div className="flex gap-4 items-center justify-center">
                        <div className=' flex flex-col items-center justify-center gap-2'>
                           <img src="/assets/svg/instagram.svg" alt=" " className="insta hover:cursor-pointer hover:brightness-150"    width={37}/>
                           <span id='bullet1' className=' text-center text-white invisible font-bold'>*</span>
                        </div>
                        <div className=' flex flex-col items-center justify-center gap-2'>
                           <img src="/assets/svg/linkedin.svg" alt=" " className="linkedin hover:cursor-pointer hover:brightness-150"    width={40}/>
                           <span id='bullet2' className=' text-center text-white invisible font-bold'>*</span>
                        </div>
                        <div className=' flex flex-col items-center justify-center gap-2'>
                           <img src="/assets/svg/mail.svg" alt=" " className="mail hover:cursor-pointer hover:brightness-150"    width={42}/>
                           <span id='bullet3' className=' text-center text-white invisible font-bold'>*</span>
                        </div>
                     </div>
                  </div>
            </div>
      </div>
   )
}
export default AboutMe;
