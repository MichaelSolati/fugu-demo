import { useEffect, useState } from "react";

export default function GamepadDetector() {
  const [gamepadName, setGamepadName] = useState("No gamepad detected!");

  useEffect(() => {
    const handleGamepadconnected = (e: GamepadEvent) => {
      const gp = navigator.getGamepads()[e.gamepad.index] as Gamepad;
      setGamepadName(gp.id);
    };

    window.addEventListener("gamepadconnected", handleGamepadconnected);

    return () =>
      window.removeEventListener("gamepadconnected", handleGamepadconnected);
  });

  return <p>{gamepadName}</p>;
}
