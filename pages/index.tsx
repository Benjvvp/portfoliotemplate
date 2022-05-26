import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/navBar";
import SkillCard from "../components/skillCard";
import ProjectLarge from "../components/projectLarge";
import ProjectSmall from "../components/projectSmall";
import Footer from "../components/footer";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Walter Lara - Home</title>
        <meta name="description" content="Hi I'm walter, a front-end developer specialized in the task you need." />
        <meta name="keywords" content="front-end, developer, walter, walter-mendoza, waltermendoza, waltermendoza.com, waltermendoza.com/portfolio, waltermendoza.com/portfolio/home" />
        <meta name="author" content="Walter Mendoza" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="referrer" content="origin" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Walter Mendoza" />
        <meta name="application-name" content="Walter Mendoza" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className={`${styles.heroSection}`}>
        <p className={`${styles.heroSection__greetings}`}>HEY! I AM</p>
        <h1 className={`${styles.heroSection__name}`}>Walter lara</h1>
        <p className={`${styles.heroSection__description}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
        </p>
        <img
          src="/svg/DoubleArrow.svg"
          className={`${styles.heroSection__arrowDown}`}
          alt="Arrow down, scroll"
        />
      </div>
      <div className={`${styles.aboutSection} px-5`}>
        <div className={`flex flex-row justify-evenly ${styles.aboutSection__Container}`}>
          <h2
            className={`${styles.aboutSection__title} titleWithLine`}
            data-aos="fade-right"
          >
            Front-End Web Developer
          </h2>
          <p
            className={`${styles.aboutSection__description}`}
            data-aos="fade-left"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel fringilla est ullamcorper eget nulla facilisi etiam
            dignissim diam quis enim lobortis scelerisque fermentum dui faucibus
            in ornare quam viverra
          </p>
        </div>
        <p
          className={`${styles.aboutSection_skills__title}`}
          data-aos="fade-up"
        >
          My Skills
        </p>
        <div
          className={`flex flex-row justify-center gap-10 mt-[5em] ${styles.aboutSectionContainerCards}`}
          data-aos="fade-up"
        >
          <SkillCard
            principalSkill
            skill="Responsive Design"
            skillPath="/svg/responsiveBanner.svg"
          />
          <SkillCard
            skill="eCommerce Design"
            skillPath="/svg/ecommerceBanner.svg"
          />
          <SkillCard
            skill="Web Improvement"
            skillPath="/svg/improvementBanner.svg"
          />
          <SkillCard
            skill="Web & UX Design"
            skillPath="/svg/webUxUiBanner.svg"
          />
        </div>
      </div>
      <div className={`${styles.workSection} px-5`} id="projects">
        <h2 className={`${styles.workSection__title} titleWithLine`}>
          Recent Work
        </h2>
        <div className={`${styles.workSection_LargeProjects__Container}`}>
          <div data-aos="fade-right">
            <ProjectLarge
              title="Lorem ipsum dolor sit"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim"
              linkWebsite="#"
              bannerPath="/png/work.png"
            />
          </div>
          <div data-aos="fade-left">
            <ProjectLarge
              title="Lorem ipsum"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim"
              linkWebsite="#"
              bannerPath="/png/work.png"
            />
          </div>
        </div>
        <div className={`grid grid-cols-3 auto-rows-max gap-5 mt-10 mb-[5em] justify-center justify-items-center ${styles.containerSmallCards}`}>
          <ProjectSmall
            title="Lorem ipsum dolor sit"
            bannerPath="/jpg/workBanner_1.jpg"
            link="#"
          />
          <ProjectSmall
            title="Lorem ipsum dolor "
            bannerPath="/jpg/workBanner_2.jpg"
            link="#"
          />
          <ProjectSmall
            title="Lorem ipsum"
            bannerPath="/jpg/workBanner_3.jpg"
            link="#"
          />
        </div>
      </div>

      <div className={`${styles.whyMySection} px-10`}>
        <div className="flex flex-row justify-between px-[8em]">
          <div className="flex flex-col">
            <h2
              className={`${styles.whyMySection__title} titleWithLine`}
              data-aos="fade-right"
            >
              Why me?
            </h2>
            <p
              className={`${styles.whyMySection__description} mt-[4em]`}
              data-aos="fade-left"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
              etiam dignissim diam quis enim lobortis scelerisque fermentum dui
              faucibus in ornare quam viverra
            </p>
          </div>
          <img src="/svg/memoryStorage.svg" className={`${styles.whyMySection__banner}`} alt="" />
        </div>
      </div>

      <Footer
        myName="Walter Lara"
        imgPath="/svg/goodTeam.svg"
        myServices={[
          { name: "Web design", link: "#" },
          { name: "Web development", link: "#" },
          { name: "eCommerce Design", link: "#" },
          { name: "Responsive Layout", link: "#" },
          { name: "Web & UX Design", link: "#" },
        ]}
        mySocials={[
          { name: "Instagram", link: "#" },
          { name: "Twitter", link: "#" },
          { name: "Github", link: "#" },
          { name: "Linkedin", link: "#" },
        ]}
      />
    </div>
  );
};

export default Home;
