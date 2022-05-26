import styles from "../../styles/components/skillCard.module.css";

interface SkillCardProps {
  principalSkill?: boolean;
  skill: string;
  skillPath: string;
}

export default function SkillCard(props: SkillCardProps, {className}: any) {
  return (
    <div
      className={`${styles.skillCard} ${
        props.principalSkill ? `${styles.skillCardPrincipal}` : ``
      } ${className}`}
      
    >
      <div className={`${styles.skillCardContent}`}>
        <div className={`${styles.skillCard__icon}`}>
          <img src={props.skillPath} alt={props.skill} />
        </div>
        <div className={`${styles.skillCard__text}`}>
          <h3>{props.skill}</h3>
        </div>
      </div>
    </div>
  );
}
