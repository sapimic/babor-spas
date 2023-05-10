import styles from "../styles/Navbar.module.scss";
import Image from "next/image";
import logo from "../public/images/etra-logo.png";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FaHome,
  FaList,
  FaUserFriends,
  FaSpa,
  FaCalendarAlt,
} from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image src={logo} alt="Etra Spa Logo" width={110} height={110} />
        </div>
        <ul>
          <li className={styles.li}>
            <Link href="/ocean-blue">
              <a
                className={
                  router.pathname.endsWith("/ocean-blue") ? styles.active : ""
                }
              >
                <FaHome className={styles.icon} />
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/ocean-blue/menu">
              <a
                className={
                  router.pathname.startsWith("/ocean-blue/menu")
                    ? styles.active
                    : ""
                }
              >
                <FaList className={styles.icon} />
                Menu
              </a>
            </Link>
          </li>
          <li className="display-none-m">
            <Link href="/ocean-blue/booking">
              <a
                className={
                  router.pathname.startsWith("/ocean-blue/booking")
                    ? styles.active
                    : ""
                }
              >
                <FaCalendarAlt className={styles.icon} />
                Booking
              </a>
            </Link>
          </li>
          <li>
            <Link href="/ocean-blue/products">
              <a
                className={
                  router.pathname.startsWith("/ocean-blue/products")
                    ? styles.active
                    : ""
                }
              >
                <FaSpa className={styles.icon} />
                Products
              </a>
            </Link>
          </li>
          <li>
            <Link href="/ocean-blue/team">
              <a
                className={
                  router.pathname.startsWith("/ocean-blue/team")
                    ? styles.active
                    : ""
                }
              >
                <FaUserFriends className={styles.icon} />
                Team
              </a>
            </Link>
          </li>
        </ul>

        <Link href="/ocean-blue/booking">
          <a className="floating-button">
            <FaCalendarAlt
              style={{
                verticalAlign: "bottom",
                fontSize: "18px",
                marginRight: "10px",
              }}
            />
            Book Now
          </a>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
