import { useEffect, useRef, useState } from "react";
import AboutMe from "../about-me/about-me";
import Contact from "../contact/contact";
import Experience from "../experience/experience";
import Introduction from "../introduction/introduction";
import Navigation from "../navigation/navigation";
import Work from "../work/work";
import "./Main-View.css";

function MainView() {
  const starsRef = useRef<HTMLImageElement>(null);
  const starsRef2 = useRef<HTMLImageElement>(null);
  const routerLinkRef = useRef<HTMLDivElement>(null);
  const verticalProgressbarRef = useRef<HTMLDivElement>(null);
  const verticalProgressbarRef2 = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const horizontalProgressbarRef = useRef<HTMLDivElement>(null);
  const horizontalProgressbarRef2 = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State lifted to parent
  const [scrollToWork, setScrollToWork] = useState(false); // State lifted to parent
  useEffect(() => {
    if (
      !starsRef.current ||
      !starsRef2.current ||
      !routerLinkRef.current ||
      !horizontalProgressbarRef2.current ||
      !verticalProgressbarRef2.current
    ) {
      return;
    }
    starsRef.current.style.transitionDuration = "1000ms";
    starsRef2.current.style.transitionDuration = "2500ms";
    routerLinkRef.current.style.transitionDuration = "2500ms";

    setTimeout(() => {
      if (!starsRef.current || !routerLinkRef.current) {
        return;
      }
      routerLinkRef.current.style.bottom =
        window.innerWidth < 1235 ? "43rem" : "33rem";
      starsRef.current.style.opacity = "0.7";
      routerLinkRef.current.style.opacity = "1";
      starsRef.current.style.marginLeft = "-100px";

      setTimeout(() => {
        starsRef2.current && (starsRef2.current.style.opacity = "0.3");
        starsRef2.current && (starsRef2.current.style.marginLeft = "0px");
      }, 100);
    }, 1000);
  }, []);

  window.addEventListener("scroll", () => {
    const scrollValue = document.documentElement.scrollTop;
    const maxVerticalHeight =
      window.innerWidth > 870 && window.innerWidth < 1235
        ? 3005
        : window.innerWidth > 1235
        ? 3655
        : window.innerWidth < 680
        ? 4125
        : 3705; // Maximum height for the vertical bar

    const maxHorizontalWidth = 720; // 45rem in pixels
    const maxVerticalHeight2 =
      window.innerWidth < 1235 && window.innerWidth > 870
        ? 4460
        : window.innerWidth < 870 && window.innerWidth > 680
        ? 5200
        : window.innerWidth < 680
        ? 5700
        : 5500; // Example value for second vertical line
    const maxHorizontalWidthNew = window.innerWidth; // Example value for new horizontal lines
    const verticalThresholdScroll = maxVerticalHeight / 1.2;
    const secondVerticalThresholdScroll = maxVerticalHeight2 / 1.2;
    const horizontalThresholdScroll =
      verticalThresholdScroll + maxHorizontalWidth / 2;
    horizontalProgressbarRef2.current &&
      (horizontalProgressbarRef2.current.style.opacity = "0");
    verticalProgressbarRef2.current &&
      (verticalProgressbarRef2.current.style.opacity = "0");
    horizontalProgressbarRef.current &&
      (horizontalProgressbarRef.current.style.opacity = "0");
    if (scrollValue <= verticalThresholdScroll) {
      verticalProgressbarRef.current &&
        (verticalProgressbarRef.current.style.height =
          scrollValue * 1.2 + "px");
      horizontalProgressbarRef.current &&
        (horizontalProgressbarRef.current.style.width = "0px");
      verticalProgressbarRef2.current &&
        (verticalProgressbarRef2.current.style.height = "0px");
    } else if (scrollValue <= horizontalThresholdScroll) {
      horizontalProgressbarRef.current &&
        (horizontalProgressbarRef.current.style.opacity = "1");
      verticalProgressbarRef.current &&
        (verticalProgressbarRef.current.style.height =
          maxVerticalHeight + "px");
      horizontalProgressbarRef.current &&
        (horizontalProgressbarRef.current.style.width =
          (scrollValue - verticalThresholdScroll) * 1.9 + "px");
      verticalProgressbarRef2.current &&
        (verticalProgressbarRef2.current.style.height = "0px");
    } else if (scrollValue <= secondVerticalThresholdScroll) {
      horizontalProgressbarRef.current &&
        (horizontalProgressbarRef.current.style.opacity = "1");
      verticalProgressbarRef2.current &&
        (verticalProgressbarRef2.current.style.opacity = "1");
      verticalProgressbarRef.current &&
        (verticalProgressbarRef.current.style.height =
          maxVerticalHeight + "px");
      horizontalProgressbarRef.current &&
        (horizontalProgressbarRef.current.style.width =
          maxHorizontalWidth + "px");
      verticalProgressbarRef2.current &&
        (verticalProgressbarRef2.current.style.height =
          (scrollValue - horizontalThresholdScroll) * 1.9 + "px");
    } else {
      // New condition for additional horizontal lines
      verticalProgressbarRef.current &&
        (verticalProgressbarRef.current.style.height =
          maxVerticalHeight + "px");
      horizontalProgressbarRef.current &&
        (horizontalProgressbarRef.current.style.width =
          maxHorizontalWidthNew + "px");
      verticalProgressbarRef2.current &&
        (verticalProgressbarRef2.current.style.height =
          maxVerticalHeight2 + "px");
      verticalProgressbarRef2.current &&
        (verticalProgressbarRef2.current.style.opacity = "1");
      const newHorizontalScrollValue =
        scrollValue - secondVerticalThresholdScroll;
      horizontalProgressbarRef2.current &&
        (horizontalProgressbarRef2.current.style.opacity = "1");
      horizontalProgressbarRef2.current &&
        (horizontalProgressbarRef2.current.style.transform =
          "translateX(-100%)");
      horizontalProgressbarRef2.current &&
        (horizontalProgressbarRef2.current.style.width =
          newHorizontalScrollValue * 1.5 + "px");
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
          src="https://dravasilis.github.io/my-portfolio/assets/img/stars.jpg"
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
          className="min-h-[25rem] max-h-[3610px]  max-tablet:max-h-[2750px] max-mobile:max-h-[3510px] max-mobileXS:max-h-[250rem] setOverflow  absolute ml-80 max-mobile:ml-[3rem] max-tablet:ml-[15rem]  p-[2px] z-0 rounded-3xl bg-myTeal glow"
        ></div>
        <div
          ref={horizontalProgressbarRef}
          className="absolute max-w-[45rem] max-laptop:!max-w-[32rem] max-mobile:!max-w-[20rem] max-mobileXS:!max-w-[18.5rem] max-mobileXXS:!max-w-[14.5rem]   ml-80  max-mobile:ml-[3rem] max-tablet:ml-[15rem] top-[3655px]  max-tablet:top-[2800px] max-mobile:top-[222.25rem] max-mobileXS:top-[252.75rem]  p-[2px] z-0 rounded-3xl bg-myTeal glow"
        ></div>
        <div
          ref={verticalProgressbarRef2}
          className="absolute max-h-[1848px] max-tablet:max-h-[1600px] max-mobile:max-h-[1540px] max-mobileXS:max-h-[1447px] ml-[65rem] max-laptop:!ml-[52rem] max-tablet:!ml-[47rem] max-mobile:!ml-[23rem] max-mobileXS:!ml-[21.5rem] max-mobileXXS:!ml-[17.5rem] top-[3655px] max-tablet:!top-[2800px] max-mobile:!top-[222.25rem] max-mobileXS:!top-[252.75rem]   p-[2px] z-0 rounded-3xl bg-myTeal glow"
        ></div>
        <div
          ref={horizontalProgressbarRef2}
          className="absolute ml-[65rem] max-laptop:ml-[52rem] max-tablet:ml-[47.2rem] max-mobile:ml-[23.2rem] max-mobileXS:ml-[21.75rem] max-mobileXXS:ml-[17.75rem] top-[5500px] max-tablet:top-[4400px] max-mobile:top-[318.25rem] max-mobileXS:top-[343rem]  p-[2px] z-0 rounded-3xl bg-myTeal glow"
        ></div>
        <div className="flex flex-col pl-96 max-mobile:pl-[5rem] max-mobile:mt-4 max-tablet:pl-[19rem] gap-96 max-tablet:gap-40">
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
