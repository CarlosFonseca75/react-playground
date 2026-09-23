import type { ReactNode } from "react";

import styles from "./Table.module.scss";

interface ContainerProps {
  children: ReactNode;
}

interface HeaderProps {
  columns: string[];
}

interface BodyProps {
  children: ReactNode;
}

interface RowProps {
  children: ReactNode;
}

interface CellProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>{children}</table>
    </div>
  );
};

const Header = ({ columns }: HeaderProps) => {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column} className={styles.column}>
            {column}
          </th>
        ))}
      </tr>
    </thead>
  );
};

const Body = ({ children }: BodyProps) => {
  return <tbody>{children}</tbody>;
};

const Row = ({ children }: RowProps) => {
  return <tr className={styles.row}>{children}</tr>;
};

const Cell = ({ children }: CellProps) => {
  return <td className={styles.cell}>{children}</td>;
};

export const Table = Object.assign(Container, {
  Header,
  Body,
  Row,
  Cell,
});
