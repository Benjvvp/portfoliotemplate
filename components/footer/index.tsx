import Link from "next/link";
import styles from "../../styles/components/footer.module.css";

interface socialsObject {
  name: string;
  link: string;
}
interface servicesObject {
  name: string;
  link: string;
}
interface FooterProps {
  myName: string;
  myServices: servicesObject[];
  mySocials: socialsObject[];
  imgPath: string;
}

export default function Footer(props: FooterProps, { className }: any) {
  return (
    <div className={`${styles.footer} ${className}`}>
      <div className={`${styles.footerContent}`}>
        <h1 className={`${styles.footerContent__myName}`}>{props.myName}</h1>
        <div className={`${styles.footerContent__myServices}`}>
          <h2 className={`${styles.footerContent__titleSubSection}`}>
            Services
          </h2>
          {props.myServices.map((service: servicesObject, index: number) => {
            return (
              <div
                className={`${styles.footerContent__link}`}
                key={index}
              >
                <a href={service.link}>{service.name}</a>
              </div>
            );
          })}
        </div>
        <div className={`${styles.footerContent__mySocials}`}>
          <h2 className={`${styles.footerContent__titleSubSection}`}>
            Socials
          </h2>
          {props.mySocials.map((social: socialsObject, index: number) => {
            return (
              <div
                className={`${styles.footerContent__link}`}
                key={index}
              >
                <a href={social.link}>{social.name}</a>
              </div>
            );
          })}
        </div>
        <div className={`${styles.footer__img}`}>
          <img src={props.imgPath} alt="decorative" />
        </div>
      </div>
    </div>
  );
}
