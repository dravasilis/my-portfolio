import './about-me.css'
import '../main-view/Main-View.css'
function AboutMe(){
   return(
      <div className=" flex flex-col max-mobileXS:items-center gap-16">
            <span className='text-5xl max-mobile:text-4xl text-teal-200 font-bold neon-sign-purple w-max rounded-xl p-4  '> &lt; About me / &gt;</span>
            <div className=" flex   !flex-row items-center reflection max-mobileXS:w-max max-mobileXS:!flex-col-reverse max-mobileXS:items-baseline ">
              {/* text */} 
               <span className="w-[40rem] max-mobileXS:w-[17rem] max-mobileXS:text-lg  text-xl max-tablet:text-[1.05rem] leading-8   tracking-wider neon-sign-blue max-tablet:p-6 p-8 bg-slate-900 rounded-3xl text-glow-blue text-white">I am a programmer and more specifically i develop websites and applications. What drives me is the continuous urge for knowledge and always setting myself against challenges that will make me a better developer.</span>
                 {/* line */}
                 <div className='contents max-mobileXS:flex max-mobileXS:w-full items-center justify-center'>
                  <span className="w-[20rem] max-mobileXS:w-1  h-1 max-mobileXS:h-[15rem] p-[1px] gradient-line"></span>
                 </div>
                 {/* sign */}
                  <div className="neon-sign-purple rounded-3xl gap-4  p-8 flex flex-col bg-slate-950 h-[23rem] max-mobileXS:h-[19rem] w-[16rem] max-mobileXS:!w-[15rem] max-tablet:!w-[23rem] items-center justify-center">
                     <img src="https://dravasilis.github.io/my-portfolio/assets/svg/programmer.svg" alt="programmer" width={150}  />
                     <div className="flex gap-4 items-center justify-center">
                        <div className=' flex flex-col items-center justify-center gap-2'>
                           <img src="https://dravasilis.github.io/my-portfolio/assets/svg/instagram.svg" alt=" " className="insta hover:cursor-pointer hover:brightness-150"    width={37}/>
                           <span id='bullet1' className=' text-center text-white invisible font-bold'>*</span>
                        </div>
                        <div className=' flex flex-col items-center justify-center gap-2'>
                           <img src="https://dravasilis.github.io/my-portfolio/assets/svg/linkedin.svg" alt=" " className="linkedin hover:cursor-pointer hover:brightness-150"    width={40}/>
                           <span id='bullet2' className=' text-center text-white invisible font-bold'>*</span>
                        </div>
                        <div className=' flex flex-col items-center justify-center gap-2'>
                           <img src="https://dravasilis.github.io/my-portfolio/assets/svg/mail.svg" alt=" " className="mail hover:cursor-pointer hover:brightness-150"    width={42}/>
                           <span id='bullet3' className=' text-center text-white invisible font-bold'>*</span>
                        </div>
                     </div>
                  </div>
            </div>
      </div>
   )
}
export default AboutMe;
