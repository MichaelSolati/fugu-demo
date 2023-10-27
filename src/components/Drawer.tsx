import { useEffect } from "react";

import "../styles/components/Drawer.scss";
import { environment } from "../environment";

interface Props {
  isOpen: boolean;
  setIsOpen: (_: any) => void;
}

export default function Drawer({ isOpen, setIsOpen }: Props) {
  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > environment.breakpoints.mobile);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`drawer ${isOpen ? "open" : ""} mdc-top-app-bar--fixed-adjust`}
    >
      <div className="drawer__content"></div>
    </div>
  );
}
