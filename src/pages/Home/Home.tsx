import { ExerciseCard } from "@/components/ExerciseCard/ExerciseCard";
import { EXERCISES } from "@/constants/exercises";

import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <div className={styles.page}>
      <div className={styles.grid}>
        {EXERCISES.map((exercise) => (
          <ExerciseCard key={exercise.path} {...exercise} />
        ))}
      </div>
    </div>
  );
};
