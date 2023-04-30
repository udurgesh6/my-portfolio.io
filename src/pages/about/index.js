import styles from "@/styles/Home.module.css";

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
        <div className="flex flex-col max-w-[500px] h-full overflow-y-scroll xs:p-5">
          <p className="font-mono h-[80px] flex flex-row items-center font-bold text-4xl">
            About Me
          </p>
          <p className="text-gray-800 mb-10 mt-5 font-semibold text-sm">
            Hey, I'm Durgesh ❤️<br></br>
            <br></br> I'm currently Senior Developer at LtiMindtree, where I
            lead development team for one of our client's project. I focus on
            educating and growing the LinkedIN, Twitter and Hashnode
            connections.
          </p>
          <hr className="border border-solid border-gray-500"></hr>
          <p className="text-gray-800 mt-10 font-semibold text-sm">
            I'm passionate about many creative pursuits, including music,
            start-ups, marketing, and of course, development. This combination
            of interests is what ultimately led me to build JoltCollab a
            platform for developers to collaborate and show their side-projects
            / open-source projects.<br></br>
            <br></br> I love building for the web. From something as simple as a
            single HTML file – all the way to large Next.js applications. The
            web is incredible. Anyone can become a developer, writer, or creator
            – and no one has to ask for permission. You can just build.<br></br>
            <br></br>
            Outside of LTIMINDTREE, I angel invest my knowledge to build my own
            platforms and advise early-stage startups. I also do Developer
            Relations consulting work, helping companies take their DevRel
            function from 0 to 1, or provide guidance on growing communities,
            content creation, and developer marketing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
