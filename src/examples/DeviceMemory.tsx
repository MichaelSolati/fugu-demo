import { useEffect, useState } from "react";

export default function DeviceMemory() {
  const [memory, setMemory] = useState(0);
  const [canAccessMemory, setCanAccessMemory] = useState(false);

  useEffect(() => {
    if ("deviceMemory" in navigator) {
      setMemory(navigator.deviceMemory as number);
      setCanAccessMemory(true);
    }
  });

  return (
    <>
      {canAccessMemory ? (
        <p>Your device has {memory} GiB of RAM!</p>
      ) : (
        <p>
          Your device doesn't support <code>navigator.deviceMemory</code>
        </p>
      )}
    </>
  );
}
