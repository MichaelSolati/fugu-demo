import "../styles/components/Drawer.scss";
import pagesData from "../pagesData.ts";

interface Props {
  isOpen: boolean;
  toggleDrawer: () => void;
}

export default function Drawer({ isOpen }: Props) {
  const pages = Object.entries(pagesData);

  return (
    <div
      className={`drawer ${isOpen ? "open" : ""} mdc-top-app-bar--fixed-adjust`}
    >
      <div className="drawer__content">
        <ul className="mdc-deprecated-list">
          {pages.map((page) => (
            <a
              key={page[0]}
              href={page[0]}
              className="mdc-deprecated-list-item"
            >
              <li tabIndex={0}>
                <span className="mdc-deprecated-list-item__text">
                  {page[1].navHome ?? page[1].title}
                </span>
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}
