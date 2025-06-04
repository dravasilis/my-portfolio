import { useEffect, useRef } from "react";
import "./menu-dropdown-panel.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import MainView from "../main-view/Main-View";
type MenuDropdownPanelProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
function MenuDropdownPanel({
  isMenuOpen,
  setIsMenuOpen,
}: MenuDropdownPanelProps) {
  const menuPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuPanelRef.current) {
      return;
    }
    menuPanelRef.current.style.transitionDuration = "500ms";
    if (!isMenuOpen) {
      document.body.style.overflow = "auto";
      menuPanelRef.current.style.transitionDuration = "750ms";
      if (!menuPanelRef.current) {
        return;
      }
      menuPanelRef.current.style.top = "-100vh";
    } else {
      menuPanelRef.current.style.top = "0";
    }
  }, [isMenuOpen]);
  return (
    <div
      ref={menuPanelRef}
      className="panelGlass  absolute -top-[100vh] left-0  duration-500 w-[100vw] h-[100vh]"
    >
      <div className="w-full h-full flex  items-center justify-around max-[1450px]:gap-[12rem] max-mobileXS:flex-col-reverse max-mobileXS:justify-center max-mobileXS:gap-16">
        <div className="flex flex-col gap-8 max-mobile:ml-4  w-24 max-mobileXS:w-auto">
          <button
            onClick={() => {
              setIsMenuOpen(false);
              document
                .getElementById("work")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="tabs"
          >
            &lt; Work /&gt;
          </button>
          <button
            onClick={() => {
              setIsMenuOpen(false);
              document
                .getElementById("experience")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="tabs"
          >
            &lt; Experience /&gt;
          </button>
          <button
            onClick={() => {
              setIsMenuOpen(false);
              document
                .getElementById("about-me")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="tabs"
          >
            &lt; About Me /&gt;
          </button>
          <button
            onClick={() => {
              setIsMenuOpen(false);
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="tabs"
          >
            &lt; Contact /&gt;
          </button>
        </div>
        <div className="flex flex-col gap-16 w-[30rem]  max-mobileXS:items-center max-mobileXS:gap-6">
          <span className=" text-5xl max-mobile:text-[2rem] font-bold text-white">
            Let's work together!
          </span>
          <span className=" text-2xl max-mobile:text-xl text-white leading-relaxed tracking-wide max-mobileXS:w-[18rem]">
            Feeling ready for our first collaboration? Feel free to contact me
            down below!
          </span>
          <button
            className="text-xl flex gap-2 items-center font-bold text-white border-2 rounded-lg border-white w-max py-2 px-4 hover:bg-white 
               hover:text-teal-800 duration-200 active:scale-95  hover:tracking-wider "
          >
            {" "}
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuDropdownPanel;
