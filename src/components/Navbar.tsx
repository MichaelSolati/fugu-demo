import "../styles/components/Navbar.scss";

interface Props {
  toggleDrawer: () => void;
}

export default function Navbar({ toggleDrawer }: Props) {
  return (
    <header className="mdc-top-app-bar">
      <div className="mdc-top-app-bar__row">
        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
          <button
            onClick={toggleDrawer}
            className="mdc-button"
            id="menu-button"
            aria-label="Open menu of pages"
          >
            <span className="mdc-button__ripple"></span>
            <i className="material-icons mdc-button__icon" aria-hidden="true">
              menu
            </i>
          </button>
          <span className="mdc-top-app-bar__title">Fugu Demo</span>
        </section>
        <section
          className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end"
          role="toolbar"
        >
          <a
            className="mdc-top-app-bar__action-item mdc-button"
            href="https://github.com/MichaelSolati/fugu-demo"
            target="_blank"
          >
            <span className="mdc-button__ripple"></span>
            <span className="mdc-button__label">GitHub</span>
          </a>
        </section>
      </div>
    </header>
  );
}
