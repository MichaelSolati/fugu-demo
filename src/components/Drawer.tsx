import { useEffect } from "react";

import "../styles/components/Drawer.scss";
import { environment } from "../environment";
import pagesData from "../pagesData.ts";

interface Props {
  isOpen: boolean;
  setIsOpen: (_: any) => void;
}

export default function Drawer({ isOpen, setIsOpen }: Props) {
  const pages = Object.entries(pagesData);

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
      <div className="drawer__content">
        <ul className="mdc-deprecated-list">
          {pages.map((page) => (
            <a key={page[0]} href={page[0]} className="mdc-deprecated-list-item">
              <li tabIndex={0}>
                <span className="mdc-deprecated-list-item__text">
                  {page[1].navHome ?? page[1].title}
                </span>
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}
