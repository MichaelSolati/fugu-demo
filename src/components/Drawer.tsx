import { useEffect, useState } from "react";
import { useSearchParam } from "react-use";

import "../styles/components/Drawer.scss";
import pagesData from "../pagesData.ts";

interface Props {
  isOpen: boolean;
  toggleDrawer: () => void;
}

const getSearchParams = () => {
  if (typeof window === "undefined") return "";
  const params = new URLSearchParams(window.location.search);
  return params.toString();
};

export default function Drawer({ isOpen }: Props) {
  const slides = useSearchParam("slides");
  const slide = useSearchParam("slide");
  const [search, setSearch] = useState(getSearchParams());

  useEffect(() => {
    setSearch(getSearchParams());
  }, [slides, slide]);

  return (
    <div
      className={`drawer ${isOpen ? "open" : ""} mdc-top-app-bar--fixed-adjust`}
    >
      <div className="drawer__content">
        <ul className="mdc-deprecated-list">
          {Object.entries(pagesData).map(([path, page]) => (
            <a
              key={path}
              href={`${path}${search ? `?${search}` : ""}`}
              className="mdc-deprecated-list-item"
            >
              <li tabIndex={0}>
                <span className="mdc-deprecated-list-item__text">
                  {page.navHome ?? page.title}
                </span>
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}
