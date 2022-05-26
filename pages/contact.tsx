import { Head } from "next/document";
import Footer from "../components/footer";
import NavBar from "../components/navBar";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Walter Lara - Contact</title>
        <meta
          name="description"
          content="Hello on this page you can contact me, I hope you have met me properly."
        />
        <meta
          name="keywords"
          content="front-end, developer, walter, walter-mendoza, waltermendoza, waltermendoza.com, waltermendoza.com/portfolio, waltermendoza.com/portfolio/home"
        />
        <meta name="author" content="Walter Mendoza" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="referrer" content="origin" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Walter Mendoza" />
        <meta name="application-name" content="Walter Mendoza" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className={`${styles.heroSection}`}>
        <h1 className={`${styles.heroSection__name}`}>Contact me</h1>
        <p className={`${styles.heroSection__description}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
        </p>
        <img
          src="/svg/DoubleArrow.svg"
          className={`${styles.heroSection__arrowDown}`}
          alt="Arrow down, scroll"
        />
      </div>
      <div className={`${styles.formSection} px-[10%]`}>
        <h1 className={`${styles.formSection__title} titleWithLine`}>
          Please fill in the form
        </h1>
        <div className={`${styles.formSection__Form} mt-[5%]`}>
          <div className="flex flex-row gap-10 w-full">
            <input
              type="text"
              name="textInput"
              id=""
              placeholder="Full Name"
              className={`${styles.formSection__InputCustomize} w-full`}
            />
            <input
              type="email"
              name="textInput"
              id=""
              placeholder="Email"
              className={`${styles.formSection__InputCustomize} w-full`}
            />
          </div>
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Message"
            className={`${styles.formSection__InputCustomize} w-full mt-10`}
          ></textarea>
          <div className="flex flex-row items-center justify-between w-full mt-5">
            <button className={`${styles.formSection__Button}`}>Send</button>
          </div>
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
    </>
  );
}
