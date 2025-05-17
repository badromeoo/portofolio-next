import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import Aurora from "./components/Aurora/Aurora";
import RollingGallery from "./components/RollingGallery/RollingGallery";
import TrueFocus from "./components/TrueFocus/TrueFocus";
export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0c0c0c]">
      <Aurora colorStops={["#00D8FF", "#7CFF67", "#00D8FF"]} blend={0.5} amplitude={1.0} speed={1} />
      <div className="">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold">I'm Ready For Job</h1>
              <RotatingText
                texts={["Web Design", "Web Development", "Web Programming"]}
                mainClassName="px-2 sm:px-2 md:px-3 bg-[#A2EF44] text-black overflow-hidden py-0.5 sm:py-1  justify-center rounded-lg text-2xl font-bold inline-flex"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
            <div className="flex flex-col items-start mt-4">
              <SplitText
                text="I'm Bintang"
                className="text-6xl font-bold text-[#f3f3f3] "
                animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                threshold={0.1}
                delay={150}
              />
              <SplitText
                text="Fullstack Developer"
                className="text-6xl font-bold text-[#A2EF44] "
                animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                threshold={0.1}
                delay={150}
              />
            </div>
            <div>
              <BlurText
                text="I am a highly motivated and results-oriented recent graduate with a Bachelor's degree in Information Systems from ITB STIKOM Bali. I have developed a strong foundation in web development, including proficiency in HTML, CSS, and JavaScript. My practical experience in IT support was gained through an internship at a contracting company, where I honed my technical skills and learned the importance of effective problem-solving.
              "
                delay={50}
                animateBy="words"
                direction="top"
                className="text-xl font-bold mb-8"
              />
            </div>
          </div>
          <div className="col-span-5 mt-0">
            <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]}></Lanyard>
          </div>
          <div className="col-span-12 text-center mt-10">
            <TrueFocus sentence="My Projects" manualMode={false} blurAmount={5} borderColor="green" animationDuration={2} pauseBetweenAnimations={1} />
          </div>

          <div className="col-span-12 mt-0">
            <RollingGallery autoplay={true} />

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
