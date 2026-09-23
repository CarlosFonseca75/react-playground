import { Link } from "react-router";

import styles from "./ExerciseCard.module.scss";

interface ExerciseCardProps {
  title: string;
  description: string;
  path: string;
}

export const ExerciseCard = ({
  title,
  description,
  path,
}: ExerciseCardProps) => {
  return (
    <article className={styles.card}>
      <Link to={path} className={styles.link}>
        <div className={styles.content}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <span className={styles.arrow} aria-hidden="true">
          →
        </span>
      </Link>
    </article>
  );
};
