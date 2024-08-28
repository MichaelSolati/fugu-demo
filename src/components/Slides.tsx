import { useEffect, useState } from "react";
import { useGamepads } from "react-gamepads";
import { useSearchParam } from "react-use";

const MAX_SLIDES = 33;

function getValidSlide(slide: string | null) {
  const num = parseInt(slide as string, 10);
  return isNaN(num) ? 1 : Math.min(Math.max(num, 1), MAX_SLIDES);
}

function intToTwoCharString(num: number) {
  return num.toString().padStart(2, "0");
}

const debounce = (func: () => void, wait: number = 250) => {
  let timeout: number | null = null;

  return () => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = window.setTimeout(func, wait);
  };
};

export default function Slides() {
  const [gamepads, setGamepads] = useState<{
    [key: number]: Gamepad;
  }>({});
  const slides = useSearchParam("slides");
  const slide = useSearchParam("slide");

  useGamepads((gamepads) => setGamepads(gamepads));

  const debouncedUpdateUrl = debounce(() => {
    if (slides === "true") {
      const url = new URL(window.location.href);
      const validSlide = getValidSlide(slide);
      url.searchParams.set("slide", intToTwoCharString(validSlide));
      window.history.pushState({}, "", url.href);
    }
  });

  const debouncedHandleGamepadInput = debounce(() => {
    const buttons = gamepads[0]?.buttons;
    if (!buttons) return;
    if (buttons[16].pressed) {
      const url = new URL(window.location.href);
      url.searchParams.set("slides", slides === "true" ? "false" : "true");
      window.history.pushState({}, "", url.href);
    } else if (slides === "true" && (buttons[6].pressed || buttons[7].pressed)) {
      const currentSlide = getValidSlide(slide);
      const nextSlide = buttons[6].pressed 
        ? (currentSlide - 1 <= 0) ? MAX_SLIDES : currentSlide - 1 
        : (currentSlide + 1 > MAX_SLIDES) ? 1 : currentSlide + 1;
      const url = new URL(window.location.href);
      url.searchParams.set("slide", intToTwoCharString(nextSlide));
      window.history.pushState({}, "", url.href);
    }
  });

  useEffect(() => {
    debouncedUpdateUrl();
  }, [slides, slide]);

  useEffect(() => {
    debouncedHandleGamepadInput();
  }, [gamepads[0]?.buttons, slides, slide]);

  return slides === "true" ? (
    <div
      style={{
        backgroundColor: "black",
        backgroundImage: `url(/slides/${slide}.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: "100vh",
        width: "100vw",
        left: 0,
        top: 0,
        position: "fixed",
        zIndex: 100,
      }}
    >
    </div>
  ) : (
    <></>
  );
}