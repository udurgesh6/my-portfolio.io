import Navbar from "@/components/Navbar";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
const index = () => {
  return (
    <div className={styles.main}>
      <div className="sm:h-full max-w-[800px] w-full flex flex-wrap pt-5">
        <Navbar />
        <div className="flex flex-col max-w-[600px] h-full overflow-y-scroll xs:p-5 w-[100%]">
          <p className="font-mono h-[80px] flex flex-row items-center font-bold text-4xl sm:mb-7">
            Projects
          </p>
          <a
            className="mt-5 max-w-[400px] rounded-xl shadow-xl flex xs:flex-col p-3 border-t border-gray-300"
            href="https://www.bohoprocure.com/"
            target="_blank"
          >
            <Image
              width="400"
              height="400"
              className="rounded-t-md w-full"
              src="/bohosite.webp"
              priority
            />
            <div className="flex flex-col ">
              <p className="font-semibold text-gray-800 mr-2 xs:mt-3 ">Boho</p>
              <p className="text-sm mt-2">
                Introducing Boho, a groundbreaking platform that is
                revolutionizing the interior design industry! As the CTO and
                Co-founder, I am thrilled to share how we are transforming the
                way architects and interior designers create their masterpieces.
                Boho is not just another run-of-the-mill procurement platform.
                It is a creative hub where designers can unleash their
                imaginations and bring their visions to life. With our
                cutting-edge technology and a vast array of high-quality
                products, we are redefining the possibilities of interior
                design.
              </p>
            </div>
          </a>

          <a
            className="mt-5 max-w-[400px] rounded-xl shadow-xl flex xs:flex-col p-3 border-t border-gray-300"
            href="https://www.happyagility.com/"
            target="_blank"
          >
            <Image
              width="400"
              height="400"
              className="rounded-t-md w-full h-full"
              src="/happyagilitysite.png"
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
            className="mt-5 max-w-[400px] rounded-xl shadow-xl flex xs:flex-col p-3 border-t border-gray-300"
            href="https://remix.happyagility.com/certificate/1623076852477"
            target="_blank"
          >
            <Image
              width="400"
              height="400"
              className="rounded-t-md w-full h-full"
              src="/remixsite.png"
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
            className="mt-5 max-w-[400px] rounded-xl shadow-xl flex xs:flex-col p-3 border-t border-gray-300"
            href="https://udurgesh6.wixsite.com/joltcollab"
            target="_blank"
          >
            <Image
              width="400"
              height="400"
              className="rounded-t-md w-full h-full"
              src="/joltcollabsite.png"
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
        </div>
      </div>
    </div>
  );
};

export default index;
