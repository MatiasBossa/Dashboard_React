import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import NavItem from './cards/NavItem'


function Navbar() {
    
    return (
		<>
			<Router>
				{/* <!-- Sidebar --> */}
				<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

					{/* <!-- Sidebar - Brand --> */}
					<Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
						<div className="sidebar-brand-icon">
							<i className="fas fa-chart-line"></i>
						</div>
						<div className="sidebar-brand-text mx-3">Admin</div>
					</Link>

					{/* <!-- Divider --> */}
					<hr className="sidebar-divider my-0"></hr>

					{/* <!-- Nav Item - Dashboard --> */}
					<NavItem
						name="Dashboard"
						icon="fas fa-fw fa-tachometer-alt"
						link="/"
					/>

					{/* <!-- Divider --> */}
					<hr className="sidebar-divider"></hr>

					{/* <!-- Heading --> */}
					<div className="sidebar-heading">Actions</div>

					{/* <!-- Nav Item - Pages --> */}
					<NavItem
						name="Pages"
						icon="fas fa-fw fa-folder"
						link="/"
					/>

					{/* <!-- Nav Item - Charts --> */}
					<NavItem
						name="Charts"
						icon="fas fa-fw fa-chart-area"
						link="/"
					/>

					{/* <!-- Nav Item - Tables --> */}
					<NavItem
						name="Tables"
						icon="fas fa-fw fa-table"
						link="/"
					/>

					{/* <!-- Divider --> */}
					<hr className="sidebar-divider d-none d-md-block"></hr>
				</ul>
				{/* <!-- End of Sidebar --> */}
			</Router>
        </>
    )
}

export default Navbar
				

				



