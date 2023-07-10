import Link from "next/link";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="sm:h-full max-w-[800px] w-full flex flex-wrap pt-5">
        <Navbar />
        <div className="flex flex-col max-w-[550px] h-full overflow-y-scroll xs:p-5 pb-5">
          <p className="font-mono flex flex-row items-center font-bold text-4xl xs:mb-2 text-gray-900">
            Durgesh Upadhyay
          </p>
          <div className="flex flex-row items-center mb-3">
            <Link
              href="https://twitter.com/udurgesh6"
              target="_blank"
              className="mr-3 shadow-lg"
            >
              <Image priority src="/twitter.png" height="25" width="25" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/durgeshupadhyay/"
              target="_blank"
              className="mr-3 shadow-lg"
            >
              <Image priority src="/linkedin.png" height="25" width="25" />
            </Link>
            <Link
              href="https://hashnode.com/@udurgesh6"
              target="_blank"
              className="mr-3 shadow-lg"
            >
              <Image priority src="/hashnode.png" height="25" width="25" />
            </Link>
            <Link
              href="https://github.com/udurgesh6"
              target="_blank "
              className="shadow-lg"
            >
              <Image priority src="/github.png" height="25" width="25" />
            </Link>
          </div>
          <p className="text-gray-800 font-semibold text-md">
            Hey 👋, I'm a Senior Software Developer at LTIMINDTREE, where I help
            clients build faster web apps.
          </p>

          <div className="flex md:flex-row xs:flex-col sm:flex-col mt-5  ">
            <img
              src="/dp-rem.png"
              className="rounded-full shadow-2xl mr-5 md:w-[35%]"
            />
            <div className="flex flex-col justify-around">
              <div className="flex flex-row items-center xs:mb-3">
                <Image
                  src="/joltcollab.png"
                  priority
                  height="35"
                  width="35"
                  className="mr-3"
                />
                <p className="text-sm text-gray-800 font-semibold text-wrap">
                  Collaboration platform for developers & recruiters
                </p>
              </div>
              <div className="flex flex-row items-center xs:mb-3">
                <Image
                  src="/boho_logo.webp"
                  priority
                  height="35"
                  width="35"
                  className="mr-3 rounded-full"
                />
                <p className="text-sm text-gray-800 font-semibold text-wrap">
                  AI based procurement space for architects & interior designers
                </p>
              </div>
              <div className="flex flex-row items-center ">
                <Image
                  src="/happyagility.png"
                  priority
                  height="35"
                  width="35"
                  className="mr-3"
                />
                <p className="text-sm text-gray-800 font-semibold text-wrap">
                  Feedback analytics & customer experience platform for
                  businesses
                </p>
              </div>
            </div>
          </div>
          <p className="mt-5 text-gray-800 font-semibold text-md">
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
        </div>
      </div>
    </main>
  );
}
