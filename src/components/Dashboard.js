import ProductTable from './micro_components/ProductTable'
import CardLeft from './cards/CardLeft'

function Dashboard() {
    return (
        <>
            {/* // <!-- Begin Page Content --> */}
			<div className="container-fluid">
                {/* <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                </div>

                {/* <!-- Content Row --> */}
                <div className="row">

					{/* <!-- Amount of Products in DB --> */}
					<CardLeft />

                    {/* <!-- $$$ of all products in DB --> */}
                    <div className="col-md-4 mb-4">
                        <div className="card border-left-success shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1"> Amount in products</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">$546.456</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Amount of users in DB --> */}
                    
                </div>

                {/* <!-- Content Row --> */}
				<div className="row">

					{/* <!-- Products in DB --> */}
					<div className="col-lg-6 mb-4">
						<div className="card shadow mb-4">
							<div className="card-header py-3">
								<h6 className="m-0 font-weight-bold text-primary">Products in Data Dase</h6>
							</div>
							<div className="card-body">
							<ProductTable />
							</div>
						</div>
					</div>
					
					{/* <!-- Categories in DB --> */}
					<div className="col-lg-6 mb-4">						
						<div className="card shadow mb-4">
							<div className="card-header py-3">
								<h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
							</div>
							<div className="card-body">
								<div className="row">
									<div className="col-lg-6 mb-4">
										<div className="card bg-info text-white shadow">
											<div className="card-body">
												Category 01
											</div>
										</div>
									</div>
									<div className="col-lg-6 mb-4">
										<div className="card bg-info text-white shadow">
											<div className="card-body">
												Category 02
											</div>
										</div>
									</div>
									<div className="col-lg-6 mb-4">
										<div className="card bg-info text-white shadow">
											<div className="card-body">
												Category 03
											</div>
										</div>
									</div>
									<div className="col-lg-6 mb-4">
										<div className="card bg-info text-white shadow">
											<div className="card-body">
												Category 04
											</div>
										</div>
									</div>
									<div className="col-lg-6 mb-4">
										<div className="card bg-info text-white shadow">
											<div className="card-body">
												Category 05
											</div>
										</div>
									</div>
									<div className="col-lg-6 mb-4">
										<div className="card bg-info text-white shadow">
											<div className="card-body">
												Category 06
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* <!-- Last Product in DB --> */}
					<div className="col-lg-6 mb-4">
						<div className="card shadow mb-4">
							<div className="card-header py-3">
								<h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
							</div>
							<div className="card-body">
								<div className="text-center">
									<image className="img-fluid px-3 px-sm-4 mt-3 mb-4" src="assets/images/product_dummy.svg" alt="image dummy"></image>
								</div>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
								<a target="_blank" rel="nofollow" href="/">View product detail</a>
							</div>
						</div>
					</div>

				</div>
				
            </div>
            {/* <!-- /.container-fluid --> */}
        </>
    )
}

export default Dashboard



