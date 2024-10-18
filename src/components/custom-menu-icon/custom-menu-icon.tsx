import { useEffect, useRef } from "react";

type CustomMenuIconProps = {
  handleClick: () => void;
  isMenuOpen: boolean;
};

function CustomMenuIcon({ handleClick, isMenuOpen }: CustomMenuIconProps) {
  const firstLineRef = useRef<HTMLDivElement>(null);
  const secondLineRef = useRef<HTMLDivElement>(null);
  const thirdLineRef = useRef<HTMLDivElement>(null);
  const menuIconRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!menuIconRef.current) {
      return;
    }
    menuIconRef.current.style.transitionDuration = "1500ms";
    setInterval(() => {
      if (!menuIconRef.current) {
        return;
      }
      menuIconRef.current.style.top = "2rem";
      menuIconRef.current.style.right = "5%";
    }, 1000);

    if (isMenuOpen) {
      if (
        !firstLineRef.current ||
        !secondLineRef.current ||
        !thirdLineRef.current
      ) {
        return;
      }
      secondLineRef.current.style.display = "none";
      firstLineRef.current.style.rotate = "45deg";
      firstLineRef.current.style.position = "relative";
      firstLineRef.current.style.top = "10px";
      thirdLineRef.current.style.width = "100%";
      thirdLineRef.current.style.rotate = "-45deg";
    } else {
      if (
        !firstLineRef.current ||
        !secondLineRef.current ||
        !thirdLineRef.current
      ) {
        return;
      }
      secondLineRef.current.style.display = "block";
      firstLineRef.current.style.rotate = "180deg";
      firstLineRef.current.style.position = "relative";
      firstLineRef.current.style.top = "0px";
      thirdLineRef.current.style.width = "50%";
      thirdLineRef.current.style.rotate = "180deg";
    }
  }, [isMenuOpen]);

  const handleMenuHover = (type: string) => {
    if (isMenuOpen === true) {
      return;
    }
    if (!secondLineRef.current || !thirdLineRef.current) {
      return;
    }
    if (type === "hover") {
      secondLineRef.current.style.width = "100%";
      thirdLineRef.current.style.width = "100%";
    } else if (type === "leave") {
      secondLineRef.current.style.width = "75%";
      thirdLineRef.current.style.width = "50%";
    }
  };
  return (
    <div
      ref={menuIconRef}
      className=" flex flex-col z-10 items-end gap-2 w-9 hover:cursor-pointer  absolute opacity-75   -right-[20%] "
      onClick={() => handleClick()}
      onMouseOver={() => handleMenuHover("hover")}
      onMouseLeave={() => handleMenuHover("leave")}
    >
      <div
        ref={firstLineRef}
        className="py-[1.5px] bg-white w-full duration-300  rounded-xl  glow "
      ></div>
      <div
        ref={secondLineRef}
        className="py-[1.5px] bg-white w-3/4 duration-300 rounded-xl glow "
      ></div>
      <div
        ref={thirdLineRef}
        className="py-[1.5px] bg-white w-1/2 duration-300 rounded-xl  glow "
      ></div>
    </div>
  );
}
export default CustomMenuIcon;
