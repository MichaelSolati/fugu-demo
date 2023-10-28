import { useEffect, useState } from "react";

export default function AddToHomeScreenButton() {
  const [installPrompt, setInstallPrompt] = useState<any>();

  useEffect(() => {
    const installHandler = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event);
    };

    window.addEventListener("beforeinstallprompt", installHandler);

    return () =>
      window.removeEventListener("beforeinstallprompt", installHandler);
  });

  const onClick = async () => {
    if (!installPrompt) return;
    await installPrompt.prompt();
    setInstallPrompt(false);
  };

  return (
    <button onClick={onClick} disabled={!installPrompt}>
      Install this Demo!
    </button>
  );
}
