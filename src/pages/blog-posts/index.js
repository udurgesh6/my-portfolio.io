import Navbar from "@/components/Navbar";
import styles from "@/styles/Home.module.css";

const index = () => {
  return (
    <div className={styles.main}>
      <div className="h-full max-w-[800px] w-full flex flex-wrap pt-5">
        <Navbar />
        <div className="flex flex-col max-w-[500px] h-full overflow-y-scroll xs:p-5">
          <p className="font-mono h-[80px] flex flex-row items-center font-bold text-4xl mb-7">
            Blogs & Posts
          </p>
          <a
            href="https://udurgesh6.hashnode.dev/beginners-guide-for-webpack"
            target="_blank"
            className="mb-5 font-serif hover:underline"
          >
            Beginner's guide for Webpack
          </a>
          <a
            href="https://udurgesh6.hashnode.dev/control-props-pattern"
            target="_blank"
            className="mb-5 font-serif hover:underline"
          >
            Control props pattern
          </a>
          <a
            href="https://udurgesh6.hashnode.dev/control-props-pattern"
            target="_blank"
            className="mb-5 font-serif hover:underline"
          >
            getServerSideProps in NextJS
          </a>
          <a
            href="https://udurgesh6.hashnode.dev/generate-pdf-and-send-through-aws-ses"
            target="_blank"
            className="mb-5 font-serif hover:underline"
          >
            Streamlining Your Workflow: How to Generate and Send PDFs via AWS
            SES using Node.js
          </a>
          <a
            href="https://udurgesh6.hashnode.dev/useeffect-vs-uselayouteffect"
            target="_blank"
            className="mb-5 font-serif hover:underline"
          >
            useEffect Vs useLayoutEffect
          </a>
          <a
            href="https://www.linkedin.com/posts/activity-7053211602547843072-wQq8?utm_source=share&utm_medium=member_desktop"
            target="_blank"
            className="mb-5 font-serif hover:underline"
          >
            Webpack key feature that every developer should know about
          </a>
          <a
            href="https://www.linkedin.com/posts/activity-7053051208629923840-b1A_?utm_source=share&utm_medium=member_desktop"
            target="_blank"
            className="mb-5 font-serif hover:underline"
          >
            what exactly is Webpack
          </a>
          <a
            href="https://www.linkedin.com/posts/activity-7049905626553946112-7MsQ?utm_source=share&utm_medium=member_desktop"
            target="_blank"
            className="mb-5 font-serif hover:underline"
          >
            challenges of server rendering dates
          </a>
          <a
            href="https://www.linkedin.com/posts/activity-7049790882027298817-J_W-?utm_source=share&utm_medium=member_desktop"
            target="_blank"
            className="mb-5 font-serif hover:underline"
          >
            Polyfills in #javascript
          </a>
          <a
            href="https://www.linkedin.com/posts/activity-7049779960084893697-vY7B?utm_source=share&utm_medium=member_desktop"
            target="_blank"
            className="mb-5 font-serif hover:underline"
          >
            SQL TRANSACTION example
          </a>
          <a
            href="https://www.linkedin.com/posts/activity-7049252300422348800-qu1T?utm_source=share&utm_medium=member_desktop"
            target="_blank"
            className="mb-5 font-serif hover:underline"
          >
            prisma is love
          </a>
          <a
            href="https://www.linkedin.com/posts/activity-7048265357156835328-_LR9?utm_source=share&utm_medium=member_desktop"
            target="_blank"
            className="mb-5 font-serif hover:underline"
          >
            is default export a mistake? Just a thought...
          </a>
          <a
            href="https://www.linkedin.com/posts/activity-7047615576147468288-3Tgt?utm_source=share&utm_medium=member_desktop"
            target="_blank"
            className="mb-5 font-serif hover:underline"
          >
            #React Performance - Optimizing re-rendering on every keystroke
          </a>
          <a
            href="https://www.linkedin.com/posts/activity-7045058822586929152-dU4W?utm_source=share&utm_medium=member_desktop"
            target="_blank"
            className="mb-5 font-serif hover:underline"
          >
            Optimisation in #react 18 with automatic batching of state updates ?
          </a>
          <a
            href="https://www.linkedin.com/posts/activity-7044986172158164992-EtZK?utm_source=share&utm_medium=member_desktop"
            target="_blank"
            className="mb-5 font-serif hover:underline"
          >
            Have you heard about #React Portal?{" "}
          </a>
          <a
            href="https://www.linkedin.com/posts/activity-7044338229361201153-Ht7r?utm_source=share&utm_medium=member_desktop"
            target="_blank"
            className="mb-5 font-serif hover:underline"
          >
            #Hydration and #Rehydration
          </a>
          <a
            href="https://www.linkedin.com/posts/activity-7044269590230540288-WeT5?utm_source=share&utm_medium=member_desktop"
            target="_blank"
            className="mb-5 font-serif hover:underline"
          >
            Ever heard of the term Isomorphic React ?
          </a>
        </div>
      </div>
    </div>
  );
};

export default index;
