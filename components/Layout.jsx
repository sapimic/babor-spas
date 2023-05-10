import { useRouter } from "next/router";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const router = useRouter();
  let showNavbar = true;

  if (router.pathname === "/" || router.pathname.startsWith("/location")) {
    showNavbar = false;
  } else {
    showNavbar = true;
  }

  return (
    <>
      {showNavbar && <Navbar />}
      <main>{children}</main>
    </>
  );
};

export default Layout;
