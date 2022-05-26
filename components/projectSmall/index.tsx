import styles from "../../styles/components/projectSmall.module.css";

interface ProjectSmallProps {
  title: string;
  link: string;
  bannerPath: string;
}

export default function ProjectSmall(
  props: ProjectSmallProps,
  { className }: any
) {
  return (
    <div className={`${styles.projectSmallCard} ${className}`}>
      <div className={`${styles.projectSmallCard__Banner}`}>
        <img src={props.bannerPath} alt={props.title} />
      </div>
      <a href="#">
        <div className={`${styles.projectSmallCard__textContent}`}>
          <h4 className={`${styles.projectSmallCard__textContent__title}`}>
            {props.title}
          </h4>
        </div>
      </a>
    </div>
  );
}
