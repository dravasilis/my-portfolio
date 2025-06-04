import "./snackbar.css";

import React, { useEffect, useState } from "react";
interface SnackbarProps {
  isSubmitted: boolean;
  message: string;
  endOfMessage: () => void;
}
const Snackbar = ({ message, endOfMessage, isSubmitted }: SnackbarProps) => {
  const [isVisible, setIsVisible] = useState(isSubmitted);
  useEffect(() => {
    isSubmitted && setIsVisible(true);
    const timeout = setTimeout(() => {
      setIsVisible(false);
      endOfMessage();
    }, 4000);
    return () => clearTimeout(timeout);
  }, [isSubmitted]);
  return (
    <div
      className={` ${
        isVisible ? "top-0" : "-top-40"
      }   bg-[#79dfff] fixed w-full rounded-b-lg duration-[2000ms] left-1/2 neon-sign-blue glow px-5 py-3   transform -translate-x-1/2 z-50`}
    >
      <span className="text-lg text-[#8d46ba]">{message}</span>
    </div>
  );
};

export default Snackbar;
