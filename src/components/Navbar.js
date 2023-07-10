import styles from "@/styles/Home.module.css";
import Link from "next/link";
const Navbar = () => {
  return (
    <aside className="md:w-[200px] flex md:flex-col sm:flex-row items-center p-3">
      <img
        src="/animated_logo.gif"
        height="50px"
        width="80px"
        className="mr-3"
      />
      <nav className="flex md:flex-col xs:flex-wrap sm:justify-center md:mt-5 ">
        <Link
          href="/"
          className={`${styles.nav_links} shadow-2xl hover:shadow-2xl rounded-lg mr-2 xs:mb-2 sm:mb-3 border border-gray-400`}
        >
          <span>home</span>
        </Link>
        <Link
          href="/about"
          className={`${styles.nav_links} shadow-2xl hover:shadow-2xl rounded-lg mr-2 xs:mb-2 sm:mb-3  border border-gray-400`}
        >
          <span>about</span>
        </Link>
        <Link
          href="/blog-posts"
          className={`${styles.nav_links} shadow-2xl hover:shadow-2xl rounded-lg mr-2 xs:mb-2 sm:mb-3  border border-gray-400`}
        >
          <span>blogs</span>
        </Link>
        <Link
          href="/projects"
          className={`${styles.nav_links} shadow-2xl hover:shadow-2xl rounded-lg mr-2 xs:mb-2 sm:mb-3  border border-gray-400`}
        >
          <span>projects</span>
        </Link>
      </nav>
    </aside>
  );
};

export default Navbar;
