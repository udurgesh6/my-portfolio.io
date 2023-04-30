import Link from "next/link";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="h-full max-w-[800px] w-full flex flex-wrap pt-5">
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
        <div className="flex flex-col max-w-[500px] h-full overflow-y-scroll xs:p-5 pb-5">
          <p className="font-mono h-[80px] flex flex-row items-center font-bold text-4xl xs:mb-4">
            Durgesh Upadhyay
          </p>
          <p className="text-gray-800 font-semibold text-sm">
            Hey, I'm Durgesh. I'm a Senior Software Developer at LTIMINDTREE,
            where I help clients build faster web apps.
          </p>
          <div className="flex md:flex-row xs:flex-col sm:flex-col mt-5  ">
            <img
              src="/dp-rem.png"
              className="rounded-full border border-groove border-gray-200 shadow-lg hover:shadow-xl mr-5 md:w-[20%]"
            />
            <div className="flex flex-col justify-around xs:mt-5">
              <div className="flex flex-row items-center xs:mb-3">
                <Image
                  src="/joltcollab.png"
                  priority
                  height="30"
                  width="30"
                  className="mr-2"
                />
                <p className="text-xs text-gray-600 font-semibold text-wrap">
                  Built platform for developers and collaborators to showcase
                  their ideas!
                </p>
              </div>
              <div className="flex flex-row items-center ">
                <Image
                  src="/happyagility.png"
                  priority
                  height="30"
                  width="30"
                  className="mr-2"
                />
                <p className="text-xs text-gray-600 font-semibold text-wrap">
                  Built a feedback collection and analytics platform for market
                  research and businesses!
                </p>
              </div>
            </div>
          </div>
          <p className="mt-5 text-gray-800 font-semibold text-sm">
            <br></br>
            As a full stack developer with a passion for building full-stack
            applications, I have extensive experience in ReactJS, NodeJS,
            NextJS, RemixJS, Git, and AWS. My expertise has enabled me to create
            full stack products for various startups that are currently
            operating in the market.
            <br></br>
            <br></br>I am dedicated to continuous learning and implementation,
            and I enjoy sharing my knowledge with others and establishing
            connections with fellow professionals in the industry. My ultimate
            goal is to utilize my skills and expertise to help companies achieve
            their business objectives while continuously improving my craft.
          </p>
          <div className="flex flex-row mt-5 items-center">
            <a
              href="https://twitter.com/udurgesh6"
              target="_blank"
              className="mr-3"
            >
              <Image priority src="/twitter.png" height="25" width="25" />
            </a>
            <a
              href="https://www.linkedin.com/in/durgeshupadhyay/"
              target="_blank"
              className="mr-3"
            >
              <Image priority src="/linkedin.png" height="25" width="25" />
            </a>
            <a
              href="https://hashnode.com/@udurgesh6"
              target="_blank"
              className="mr-3"
            >
              <Image priority src="/hashnode.png" height="25" width="25" />
            </a>
            <a href="https://github.com/udurgesh6" target="_blank">
              <Image priority src="/github.png" height="25" width="25" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
