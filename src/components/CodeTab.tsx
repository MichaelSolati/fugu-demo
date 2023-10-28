import { useEffect, useRef, useState } from "react";
import { MDCTabBar } from "@material/tab-bar";
import CodeBlock from "./CodeBlock";

interface Props {
  children?: JSX.Element;
  code: string;
}

export default function CodeTab({ children, code }: Props) {
  const tabsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const tabBar = new MDCTabBar(
      tabsRef.current?.querySelector(".mdc-tab-bar") as Element
    );
    return () => tabBar.destroy();
  }, []);

  return (
    <div ref={tabsRef}>
      <div className="mdc-tab-bar mdc-theme--on-surace" role="tablist">
        <div className="mdc-tab-scroller">
          <div className="mdc-tab-scroller__scroll-area">
            <div className="mdc-tab-scroller__scroll-content">
              <button
                onClick={() => setActiveIndex(0)}
                className="mdc-tab mdc-tab--active"
                role="tab"
                aria-selected="true"
                tabIndex={0}
              >
                <span className="mdc-tab__content">
                  <span className="mdc-tab__text-label">Code</span>
                </span>
                <span className="mdc-tab-indicator mdc-tab-indicator--active">
                  <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span className="mdc-tab__ripple"></span>
              </button>
              {children && (
                <button
                  onClick={() => setActiveIndex(1)}
                  className="mdc-tab"
                  role="tab"
                  aria-selected="true"
                  tabIndex={0}
                >
                  <span className="mdc-tab__content">
                    <span className="mdc-tab__text-label">Example</span>
                  </span>
                  <span className="mdc-tab-indicator">
                    <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                  </span>
                  <span className="mdc-tab__ripple"></span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container is-fluid">
        <br />
        <div style={activeIndex !== 0 ? { display: "none" } : {}}>
          <CodeBlock client:load code={code} />
        </div>
        {children && (
          <div style={activeIndex !== 1 ? { display: "none" } : {}}>
            {children}
            <br />
          </div>
        )}
      </div>
      <br />
    </div>
  );
}
