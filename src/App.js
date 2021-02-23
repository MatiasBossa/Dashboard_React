import Navbar from './components/Navbar'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import './App.css';



function App() {
  return (
    <>
      {/* <!-- Page Wrapper --> */}
      <head>
      <meta charset="utf-8"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <title>Corporate Dashboard - Admin</title>

      {/* <!-- Custom fonts for this dashboard --> */}
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet"></link>

      {/* <!-- Custom styles for this dashboard --> */}
      <link href="assets/css/app.css" rel="stylesheet"></link>
      </head>
      <div id="wrapper">
        <Navbar />
        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" class="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            <Header />
            <Dashboard />
          </div>
          {/* <!-- End of Main Content --> */}
          <Footer />
        </div>
        {/* <!-- End of Content Wrapper --> */}

      </div>
      {/* <!-- End of Page Wrapper --> */}
    </>
  );
}

export default App;
