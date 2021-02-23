import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function Header() {
    return (
        <>
            {/* // <!-- Topbar --> */}
			<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                {/* <!-- Sidebar Toggle (Topbar) --> */}
                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                    <i className="fa fa-bars"></i>
                </button>
                        
                {/* <!-- Topbar Navbar --> */}
                <ul className="navbar-nav ml-auto">
                    <Router>
                        
                        {/* <!-- Nav Item - Alerts --> */}
                        <li className="nav-item dropdown no-arrow mx-1">
                            <Link className="nav-link dropdown-toggle" to="/" id="alertsDropdown">
                                <i className="fas fa-bell fa-fw"></i>
                                {/* <!-- Counter - Alerts --> */}
                                <span className="badge badge-danger badge-counter">3+</span>
                            </Link>
                        </li>

                        {/* <!-- Nav Item - Messages --> */}
                        <li className="nav-item dropdown no-arrow mx-1">
                            <Link className="nav-link dropdown-toggle" to="/" id="messagesDropdown">
                                <i className="fas fa-envelope fa-fw"></i>
                                {/* <!-- Counter - Messages --> */}
                                <span className="badge badge-danger badge-counter">7</span>
                            </Link>
                        </li>

                        <div className="topbar-divider d-none d-sm-block"></div>
                        
                        {/* <!-- Nav Item - User Information --> */}
                        <li class="nav-item dropdown no-arrow">
                            <Link class="nav-link dropdown-toggle" href="/" id="userDropdown">
                                <span class="mr-2 d-none d-lg-inline text-gray-600 small">Walter White</span>
                                <image class="img-profile rounded-circle" src="./../../public/images/dummy-avatar.jpg" width="60"></image>
                            </Link>
                        </li>
                        
                    </Router>
                </ul>
					
            </nav>
        </>
    )
}

export default Header



