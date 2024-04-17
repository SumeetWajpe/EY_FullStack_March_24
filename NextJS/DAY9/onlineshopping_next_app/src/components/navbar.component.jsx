import { auth } from "@/app/auth";
import Link from "next/link";
async function Navbar() {
  const session = await auth();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/products">
          Online Shopping
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/newproduct">
                New Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/posts">
                Posts
              </Link>
            </li>
          </ul>
        </div>
        Hello {session?.user?.name} !
        <Link className="btn btn-outline-primary" href="/api/auth/signout">
          Logout
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
