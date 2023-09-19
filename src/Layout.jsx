import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function Layout({ children }) {
  return (
    <div>
      <div className=" bg-gray-800 w-full h-16">
        <Navbar />
      </div>
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
