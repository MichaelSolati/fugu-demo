import { useEffect, useState } from "react";

export default function NotificationButton() {
  const [canNotify, setCanNotify] = useState(false);

  const onClick = async () => {
    if (canNotify && Notification.permission === "granted") {
      new Notification("Hi there!");
    }

    if (canNotify && Notification.permission !== "denied") {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        new Notification("Hi there!");
      }
    }
  };

  useEffect(() => {
    setCanNotify("Notification" in window);
  });

  return canNotify ? (
    <button onClick={onClick}>Click me to trigger a notification</button>
  ) : (
    <p>Your browser doesn't support notifications.</p>
  );
}
