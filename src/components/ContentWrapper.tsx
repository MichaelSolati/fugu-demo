import { useEffect, useState } from "react";

import Drawer from "./Drawer";
import Navbar from "./Navbar";
import { environment } from "../environment";

interface Props {
  children: React.ReactNode;
  "client:load"?: boolean;
}

export default function ContentWrapper({ children }: Props) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsOpen(window.innerWidth > environment.breakpoints.mobile);
  }, []);

  const toggleDrawer = () => {
    if (window.innerWidth <= environment.breakpoints.mobile)
      setIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <Navbar toggleDrawer={toggleDrawer} />
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
      {children}
    </>
  );
}
