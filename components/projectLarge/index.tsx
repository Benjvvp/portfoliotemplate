import styles from '../../styles/components/projectLarge.module.css';

interface SkillCardProps {
      title: string;
      description: string;
      linkWebsite: string;
      bannerPath: string;
}




export default function ProjectLarge(props: SkillCardProps, {className}: any) {
      return (
            <div className={`${styles.projectLargeCard} ${className}`}>
                  <div className={`${styles.projectLargeCard__textContent}`}>
                        <h4 className={`${styles.projectLargeCard_textContent__title}`}>{props.title}</h4>
                        <p className={`${styles.projectLargeCard_textContent__description}`}>{props.description}</p>
                        <a href={props.linkWebsite} className={`${styles.projectLargeCard_textContent__link}`}>
                              View Website
                              <img src="/svg/arrowProject.svg" alt="Arrow link" className={`${styles.projectLargeCard__linkArrow}`} />
                        </a>
                  </div>
                  <div className={`${styles.projectLargeCard__banner}`} data-tilt>
                        <img src={props.bannerPath} alt={props.title} />
                  </div>
            </div>

      )
}