import { useEffect, useState } from "react";
import { useGamepads } from "react-gamepads";

import pagesData from "../pagesData.ts";

export default function Navigation() {
  const pages = Object.entries(pagesData);
  const pathname = location.pathname;
  const origin = location.origin;
  const pagesIndex = pages.findIndex((p) => p[0] === pathname);
  const nextPageIndex = pages.length <= pagesIndex + 1 ? 0 : pagesIndex + 1;
  const previousPageIndex =
    pagesIndex === 0 ? pages.length - 1 : pagesIndex - 1;
  const [gamepads, setGamepads] = useState<{
    [key: number]: Gamepad;
  }>({});

  useGamepads((gamepads) => setGamepads(gamepads));

  useEffect(() => {
    const buttons = gamepads[0]?.buttons;
    if (!buttons) return;
    if (buttons[6].pressed) {
      location.href = new URL(pages[previousPageIndex][0], origin).toString();
    } else if (buttons[7].pressed) {
      location.href = new URL(pages[nextPageIndex][0], origin).toString();
    }
  }, [gamepads[0]?.buttons]);

  return (
    <div className="mdc-top-app-bar__row">
      <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
        <a className="mdc-button" href={pages[previousPageIndex][0]}>
          <span className="mdc-button__label">{pages[previousPageIndex][1].title}</span>
        </a>
      </section>
      <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
        <a className="mdc-button" href={pages[nextPageIndex][0]}>
          <span className="mdc-button__label">{pages[nextPageIndex][1].title}</span>
        </a>
      </section>
    </div>
  );
}
