import Navbar from "@/components/Navbar";
import styles from "@/styles/Home.module.css";

const index = () => {
  return (
    <div className={styles.main}>
      <div className="h-full max-w-[800px] w-full flex flex-wrap pt-5">
        <Navbar />
        <div className="flex flex-col max-w-[550px] h-full overflow-y-scroll xs:p-5">
          <p className="font-mono h-[80px] flex flex-row items-center font-bold text-4xl">
            About Me
          </p>
          <p className="text-gray-800 mb-5 mt-5 font-semibold text-md">
            Hey 👋, I'm Durgesh ❤️.<br></br>
            <br></br> Currently Senior Developer at LTIMindtree, where I lead
            development team for one of our client's project. I focus on
            educating and growing the LinkedIN, Twitter and Hashnode
            connections.
          </p>
          <hr className="border-groove border-gray-400"></hr>
          <p className="text-gray-800 mt-5 font-semibold text-md">
            I'm passionate about many creative pursuits, including music 🎵,
            start-ups 🚀, marketing 📈, and of course, development 💻. This
            combination of interests is what ultimately led me to build
            JoltCollab, a platform for developers to collaborate and show their
            side-projects / open-source projects.<br></br>
            <br></br> I love building for the web 🌐. From something as simple
            as a single HTML file – all the way to large Next.js applications.
            The web is incredible. Anyone can become a developer, writer, or
            creator – and no one has to ask for permission. You can just build.
            🔨<br></br>
            <br></br>
            Outside of LTIMindtree, I angel invest my knowledge to build my own
            platforms and advise early-stage startups. I also do Developer
            Relations consulting work, helping companies take their DevRel
            function from 0 to 1, or provide guidance on growing start-ups,
            recommend features, and developer marketing. 💼✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
