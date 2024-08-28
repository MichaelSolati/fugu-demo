import { useEffect, useState } from "react";
import { useGamepads } from "react-gamepads";
import { useSearchParam } from "react-use";

import pagesData from "../pagesData.ts";

const getPageIndex = (pathname: string) => {
  const pages = Object.entries(pagesData);
  return pages.findIndex((p) => p[0] === pathname);
};

const getSearchParams = () => {
  if (typeof window === "undefined") return "";
  const params = new URLSearchParams(window.location.search);
  return params.toString();
};

export default function Navigation() {
  const pathname = location.pathname;
  const origin = location.origin;
  const pageIndex = getPageIndex(pathname);
  const nextPageIndex = (pageIndex + 1) % Object.keys(pagesData).length;
  const previousPageIndex =
    (pageIndex - 1 + Object.keys(pagesData).length) %
    Object.keys(pagesData).length;
  const [gamepads, setGamepads] = useState<{
    [key: number]: Gamepad;
  }>({});
  const slides = useSearchParam("slides");
  const slide = useSearchParam("slide");
  const [search, setSearch] = useState(getSearchParams());

  useGamepads((gamepads) => setGamepads(gamepads));

  useEffect(() => {
    setSearch(getSearchParams());
  }, [slides, slide]);

  useEffect(() => {
    const buttons = gamepads[0]?.buttons;
    if (!buttons || slides === "true") return;
    if (buttons[6].pressed || buttons[7].pressed) {
      const pageNumber = buttons[6].pressed ? previousPageIndex : nextPageIndex;
      const url = new URL(Object.keys(pagesData)[pageNumber], origin);
      url.search = search;
      location.href = url.toString();
    }
  }, [gamepads[0]?.buttons]);

  return (
    <div className="mdc-top-app-bar__row">
      <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
        <a
          className="mdc-button"
          href={`${Object.keys(pagesData)[previousPageIndex]}${
            search ? `?${search}` : ""
          }`}
        >
          <span className="mdc-button__label">
            {pagesData[Object.keys(pagesData)[previousPageIndex]].title}
          </span>
        </a>
      </section>
      <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
        <a
          className="mdc-button"
          href={`${Object.keys(pagesData)[nextPageIndex]}${
            search ? `?${search}` : ""
          }`}
        >
          <span className="mdc-button__label">
            {pagesData[Object.keys(pagesData)[nextPageIndex]].title}
          </span>
        </a>
      </section>
    </div>
  );
}
