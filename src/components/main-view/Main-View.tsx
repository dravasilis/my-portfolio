import { useEffect, useRef, useState } from "react";
import "./Main-View.css";
import Navigation from "../navigation/navigation";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "../introduction/introduction";
import Introduction from "../introduction/introduction";
import Work from "../work/work";
import { log } from "console";
import Experience from "../experience/experience";
import { verify } from "crypto";
import AboutMe from "../about-me/about-me";
import Contact from "../contact/contact";

function MainView() {
  const starsRef = useRef<HTMLImageElement>(null);
  const starsRef2 = useRef<HTMLImageElement>(null);
  const routerLinkRef = useRef<HTMLDivElement>(null);
  const verticalProgressbarRef = useRef<HTMLDivElement>(null);
  const verticalProgressbarRef2 = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const horizontalProgressbarRef = useRef<HTMLDivElement>(null);
  const horizontalProgressbarRef2 = useRef<HTMLDivElement>(null);
  const horizontalProgressbarRef3 = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State lifted to parent
  const [scrollToWork, setScrollToWork] = useState(false); // State lifted to parent
  useEffect(() => {
    if (!starsRef.current || !starsRef2.current || !routerLinkRef.current) {
      return;
    }
    starsRef.current.style.transitionDuration = "1000ms";
    starsRef2.current.style.transitionDuration = "2500ms";
    routerLinkRef.current.style.transitionDuration = "2500ms";
    setInterval(() => {
      if (!starsRef.current || !routerLinkRef.current) {
        return;
      }
      routerLinkRef.current.style.bottom = "33rem";
      starsRef.current.style.opacity = "0.7";
      routerLinkRef.current.style.opacity = "1";
      starsRef.current.style.marginLeft = "-100px";

      setInterval(() => {
        if (!starsRef2.current) {
          return;
        }
        starsRef2.current.style.opacity = "0.3";
        starsRef2.current.style.marginLeft = "0px";
      }, 100);
    }, 1000);
  }, []);

  window.addEventListener("scroll", () => {
    const scrollValue = document.documentElement.scrollTop;
    const maxVerticalHeight = 3655; // Maximum height for the vertical bar
    const maxHorizontalWidth = 720; // 45rem in pixels
    const maxVerticalHeight2 = 5500; // Example value for second vertical line
    const maxHorizontalWidthNew = window.innerWidth; // Example value for new horizontal lines
    const verticalThresholdScroll = maxVerticalHeight / 1.2;
    const secondVerticalThresholdScroll = maxVerticalHeight2 / 1.2;
    const horizontalThresholdScroll =
      verticalThresholdScroll + maxHorizontalWidth / 2;
    const horizontalThresholdScroll2 =
      secondVerticalThresholdScroll + maxHorizontalWidthNew / 2;
    if (scrollValue <= verticalThresholdScroll) {
      if (
        verticalProgressbarRef.current &&
        horizontalProgressbarRef.current &&
        verticalProgressbarRef2.current
      ) {
        verticalProgressbarRef.current.style.height = scrollValue * 1.2 + "px";
        horizontalProgressbarRef.current.style.width = "0px";
        verticalProgressbarRef2.current.style.height = "0px";
      }
    } else if (scrollValue <= horizontalThresholdScroll) {
      if (
        verticalProgressbarRef.current &&
        horizontalProgressbarRef.current &&
        verticalProgressbarRef2.current
      ) {
        verticalProgressbarRef.current.style.height = maxVerticalHeight + "px";
        horizontalProgressbarRef.current.style.width =
          (scrollValue - verticalThresholdScroll) * 1.9 + "px";
        verticalProgressbarRef2.current.style.height = "0px";
      }
    } else if (scrollValue <= secondVerticalThresholdScroll) {
      if (
        verticalProgressbarRef.current &&
        horizontalProgressbarRef.current &&
        verticalProgressbarRef2.current
      ) {
        verticalProgressbarRef.current.style.height = maxVerticalHeight + "px";
        horizontalProgressbarRef.current.style.width =
          maxHorizontalWidth + "px";
        verticalProgressbarRef2.current.style.height =
          (scrollValue - horizontalThresholdScroll) * 1.5 + "px";
      }
    } else {
      // New condition for additional horizontal lines
      if (
        verticalProgressbarRef.current &&
        horizontalProgressbarRef.current &&
        verticalProgressbarRef2.current &&
        horizontalProgressbarRef2.current &&
        horizontalProgressbarRef3.current
      ) {
        verticalProgressbarRef.current.style.height = maxVerticalHeight + "px";
        horizontalProgressbarRef.current.style.width =
          maxHorizontalWidthNew + "px";
        verticalProgressbarRef2.current.style.height =
          maxVerticalHeight2 + "px";

        const newHorizontalScrollValue =
          scrollValue - secondVerticalThresholdScroll;
        horizontalProgressbarRef2.current.style.transform = "translateX(-100%)";
        // horizontalProgressbarRef2.current.style.rotate = "0deg !important";
        horizontalProgressbarRef2.current.style.width =
          newHorizontalScrollValue * 1 + "px";
        horizontalProgressbarRef3.current.style.width =
          newHorizontalScrollValue * 1 + "px";
      }
    }
  });

  return (
    <div className="view h-full">
      <div className=" w-full fixed top-0 z-10">
        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
      <div className="image-container">
        <div ref={starsRef} className="image"></div>
        <img
          ref={starsRef2}
          src="/assets/img/stars.jpg"
          alt="stars"
          className=" opacity-0 object-cover absolute   top-0 h-[50rem] w-full"
        />
      </div>
      <div
        ref={routerLinkRef}
        className="gap-8 opacity-0 relative bottom-[40rem] pt-12 overflow-hidden"
      >
        <div
          ref={verticalProgressbarRef}
          className="min-h-[25rem] max-h-[3610px] setOverflow  absolute ml-80  p-[2px] z-0 rounded-3xl bg-myTeal glow"
        ></div>
        <div
          ref={horizontalProgressbarRef}
          className="absolute max-w-[45rem]    ml-80 top-[3655px]  p-[2px] z-0 rounded-3xl bg-myTeal glow"
        ></div>
        <div
          ref={verticalProgressbarRef2}
          className="absolute max-h-[1848px]   ml-[65rem] top-[3655px]  p-[2px] z-0 rounded-3xl bg-myTeal glow"
        ></div>
        <div
          ref={horizontalProgressbarRef2}
          className="absolute       ml-[65rem] top-[5500px]  p-[2px] z-0 rounded-3xl bg-myTeal glow"
        ></div>
        <div
          ref={horizontalProgressbarRef3}
          className="absolute       ml-[65rem] top-[5500px]  p-[2px] z-0 rounded-3xl bg-myTeal glow"
        ></div>
        <div className="flex flex-col pl-96 gap-96">
          <Introduction setScrollToWork={setScrollToWork} />
          <div id="about-me">
            <AboutMe />
          </div>
          <div id="work">
            <Work />
          </div>
          <div id="experience" ref={experienceRef}>
            <Experience />
          </div>
          <div id="contact" className=" relative -top-48">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainView;
