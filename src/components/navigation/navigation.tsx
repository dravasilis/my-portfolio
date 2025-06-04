import { useEffect, useRef } from "react";
import CustomMenuIcon from "../custom-menu-icon/custom-menu-icon";
import MenuDropdownPanel from "../menu-dropdown-panel/menu-dropdown-panel";
import "./navigation.css";

type NavigationProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Navigation({ isMenuOpen, setIsMenuOpen }: NavigationProps) {
  const nameRef = useRef<HTMLAnchorElement>(null);

  // let [isMenuOpen,setIsMenuOpen] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      if (!nameRef.current) {
        return;
      }
      nameRef.current.style.transitionDuration = "1500ms";
      nameRef.current.style.top = "2rem";
      nameRef.current.style.left = "5%";
    }, 2000);
  }, []);
  const handleMenu = () => {
    if (isMenuOpen) {
      document.body.style.overflow = "auto";
      setIsMenuOpen(false);
    } else {
      document.body.style.overflow = "hidden";
      setIsMenuOpen(true);
    }
  };

  return (
    <div>
      {/* navigation bar */}
      <a
        onClick={() => {
          setIsMenuOpen(false);
        }}
        href=""
        ref={nameRef}
        className="absolute text-lg tracking-normal opacity-75 font-bold -left-[20%]  text-glow-blue
            text-white   hover:tracking-widest  z-1 "
      >
        &lt; V.D. / &gt;
      </a>
      <CustomMenuIcon
        handleClick={() => handleMenu()}
        isMenuOpen={isMenuOpen}
      />
      {/* dropdown menu panel */}
      <MenuDropdownPanel
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </div>
  );
}

export default Navigation;
