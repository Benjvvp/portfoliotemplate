import Footer from "../components/footer";
import NavBar from "../components/navBar";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <>
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
