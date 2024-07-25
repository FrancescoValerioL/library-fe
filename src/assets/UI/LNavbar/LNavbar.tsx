import LButton from "../LButton/Lbutton";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="navbar-brand justify-content-start">Home Library</div>
        <div className="justify-content-end">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" role="search">
            <LButton variant="outline-primary" type="button" toggle="modal" target="#createModal" text="Create New" />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
