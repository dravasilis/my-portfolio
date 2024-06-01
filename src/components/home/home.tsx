import './home.css'

function Home(){
   return(
      <div className="text-5xl font-bold tracking-wide text-white leading-relaxed ">
        <span >Hi, my name is <span className="text-teal-300">Vasilis Dramitinos</span><br></br>and I develop</span>
         <div className='wrapper'>
        <ul className="dynamic-texts">
         <li><span>&lt; websites  / &gt;</span></li>
         <li><span>&lt; webapps  / &gt;</span></li>
         <li><span>&lt; applications  / &gt;</span></li>
         <li><span>&lt; things  / &gt;</span></li>
        </ul>

         </div>
      </div>
   )
}
export default Home;
