import styles from "@/styles/Home.module.css";
import Image from "next/image";
const index = () => {
  return (
    <div className={styles.main}>
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
        <div className="flex flex-col max-w-[600px] h-full overflow-y-scroll xs:p-5 w-[100%]">
          <p className="font-mono h-[80px] flex flex-row items-center font-bold text-4xl mb-7">
            Projects
          </p>
          <a
            className="mt-2 border border-solid border-gray-400 max-w-[400px] rounded-lg shadow-lg flex xs:flex-col p-3"
            href="https://udurgesh6.wixsite.com/joltcollab"
            target="_blank"
          >
            <img
              src="/joltcollabsite.png"
              width="200"
              height="200"
              className="rounded-t-md w-full"
              priority
            />
            <div className="flex flex-col ">
              <p className="font-semibold text-md text-gray-800 mr-2 xs:mt-3">
                JoltCollab
              </p>
              <p className="text-sm mt-2">
                JoltCollab is an innovative web platform that empowers
                developers, founders, product owners, and tech enthusiasts to
                collaborate, showcase their projects, and connect with
                like-minded individuals.
              </p>
            </div>
          </a>
          <a
            className="mt-5 border border-solid border-gray-400 max-w-[400px] rounded-lg shadow-lg flex xs:flex-col p-3"
            href="https://www.happyagility.com/"
            target="_blank"
          >
            <img
              src="/happyagilitysite.png"
              width="200"
              height="200"
              className="rounded-t-md w-full"
              priority
            />
            <div className="flex flex-col ">
              <p className="font-semibold text-gray-800 mr-2 xs:mt-3">
                HappyAgility
              </p>
              <p className="text-sm mt-2">
                HappyAgility's AI-powered platform revolutionizes the customer
                feedback process by providing real-time insights, instant
                alerts, and detailed reports, helping businesses improve
                customer satisfaction, increase retention rates, and achieve
                better product-market fit.
              </p>
            </div>
          </a>
          <a
            className="mt-5 border border-solid border-gray-400 max-w-[400px] rounded-lg shadow-lg flex xs:flex-col p-3"
            href="https://remix.happyagility.com/certificate/1623076852477"
            target="_blank"
          >
            <img
              src="/remixsite.png"
              width="200"
              height="200"
              className="rounded-t-md w-full"
              priority
            />
            <div className="flex flex-col ">
              <p className="font-semibold text-gray-800 mr-2 xs:mt-3">Remark</p>
              <p className="text-sm mt-2">
                This platform helps businesses showcase their positive feedback
                and gain an upper hand in generating leads. The platform is
                designed to leverage customer feedback from various sources and
                help businesses highlight their strengths to potential
                customers.
              </p>
            </div>
          </a>
          <a
            className="mt-5 border border-solid border-gray-400 max-w-[400px] rounded-lg shadow-lg flex xs:flex-col p-3"
            href="https://www.bohoprocure.com/"
            target="_blank"
          >
            <img
              width="200"
              height="200"
              className="rounded-t-md w-full"
              src="/bohosite.png"
              priority
            />
            <div className="flex flex-col ">
              <p className="font-semibold text-gray-800 mr-2 xs:mt-3 ">Boho</p>
              <p className="text-sm mt-2">
                This platform helps businesses showcase their positive feedback
                and gain an upper hand in generating leads. The platform is
                designed to leverage customer feedback from various sources and
                help businesses highlight their strengths to potential
                customers.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default index;
