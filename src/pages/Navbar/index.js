import React from "react";
import styles from "@/styles/Home.module.css";

const index = () => {
  return (
    <aside className="md:w-[200px] flex md:flex-col sm:flex-row items-center p-3">
      <img
        src="/animated_logo.gif"
        height="50px"
        width="80px"
        style={{ marginBottom: "10px", marginRight: "5px" }}
      />
      <nav className="flex md:flex-col xs:flex-wrap sm:justify-center md:mt-5 ">
        <a href="/" className={styles.nav_links}>
          <span>home</span>
        </a>
        <a href="/about" className={styles.nav_links}>
          <span>about</span>
        </a>
        <a href="/blog-posts" className={styles.nav_links}>
          <span>blog</span>
        </a>
        <a href="/projects" className={styles.nav_links}>
          <span>projects</span>
        </a>
      </nav>
    </aside>
  );
};

export default index;
