import styles from "@/styles/Home.module.css";
import Link from "next/link";
const Navbar = () => {
  return (
    <aside className="md:w-[200px] flex md:flex-col sm:flex-row items-center p-3">
      <img
        src="/animated_logo.gif"
        height="50px"
        width="80px"
        style={{ marginBottom: "10px", marginRight: "5px" }}
      />
      <nav className="flex md:flex-col xs:flex-wrap sm:justify-center md:mt-5 ">
        <Link
          href="/"
          className={`${styles.nav_links} shadow-2xl hover:shadow-2xl rounded-lg`}
        >
          <span>home</span>
        </Link>
        <Link
          href="/about"
          className={`${styles.nav_links} shadow-2xl hover:shadow-2xl rounded-lg`}
        >
          <span>about</span>
        </Link>
        <Link
          href="/blog-posts"
          className={`${styles.nav_links} shadow-2xl hover:shadow-2xl rounded-lg`}
        >
          <span>blogs</span>
        </Link>
        <Link
          href="/projects"
          className={`${styles.nav_links} shadow-2xl hover:shadow-2xl rounded-lg`}
        >
          <span>projects</span>
        </Link>
      </nav>
    </aside>
  );
};

export default Navbar;
