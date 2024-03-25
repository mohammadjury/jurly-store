import { Link } from "react-router-dom";

export default function AdminHeader(props) {
  const handleHeaderChoice = props.handleHeaderChoice;

  const clickedChoice = (choice) => {
    handleHeaderChoice(choice);
  };

  return (
    <>
      <header className="bg-light">
        <nav className="navbar container-fluid d-flex navbar-expand-lg bg-light p-0">
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand ms-2 me-auto" to="">
            <h2 className="pt-2">
              <strong>ADMIN</strong>
            </h2>
          </Link>

          <div
            className="collapse navbar-collapse ms-2 "
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav nav-tabs border-0 me-3 d-md-flex">
              <Link
                className=" nav-item nav-link rounded ps-auto"
                to=""
                name="users"
                onClick={() => clickedChoice("users")}
              >
                <strong>Users</strong>
              </Link>

              <Link
                className="nav-link  rounded ps-auto"
                to=""
                name="products"
                onClick={() => clickedChoice("products")}
              >
                <strong>Products</strong>
              </Link>

              <Link className="nav-item nav-link rounded ps-auto" to="">
                <strong>Settings</strong>
              </Link>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
