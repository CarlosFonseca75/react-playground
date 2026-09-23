import { useEffect, useState } from "react";

import { Button } from "@/components/Button/Button";
import { Table } from "@/components/Table/Table";
import { useFetchPosts } from "@/hooks/useFetchPosts";

import styles from "./Pagination.module.scss";

const LoadingRows = () => (
  <>
    {Array.from({ length: 10 }).map((_, index) => (
      <Table.Row key={index}>
        <Table.Cell>Loading...</Table.Cell>
        <Table.Cell>Loading...</Table.Cell>
        <Table.Cell>Loading...</Table.Cell>
        <Table.Cell>Loading...</Table.Cell>
      </Table.Row>
    ))}
  </>
);

const ErrorRow = ({ message }: { message: string }) => (
  <Table.Row>
    <Table.Cell>{message}</Table.Cell>
  </Table.Row>
);

export const Pagination = () => {
  const [page, setPage] = useState<number>(1);

  const { posts, isLoading, error, loadPosts, totalPages } = useFetchPosts();

  useEffect(() => {
    loadPosts(page);
  }, [loadPosts, page]);

  return (
    <div className={styles.page}>
      <h1>Pagination</h1>

      <div className={styles.pagination}>
        <Button
          type="button"
          disabled={page === 1}
          onClick={() => setPage((currentPage) => currentPage - 1)}
        >
          Previous
        </Button>

        <span>
          Page {page} of {totalPages}
        </span>

        <Button
          type="button"
          disabled={page === 10}
          onClick={() => setPage((currentPage) => currentPage + 1)}
        >
          Next
        </Button>
      </div>

      <Table>
        <Table.Header columns={["ID", "User ID", "Title", "Body"]} />

        <Table.Body>
          {isLoading && <LoadingRows />}

          {error && <ErrorRow message={error} />}

          {!isLoading &&
            !error &&
            posts.map((post) => (
              <Table.Row key={post.id}>
                <Table.Cell>{post.id}</Table.Cell>
                <Table.Cell>{post.userId}</Table.Cell>
                <Table.Cell>{post.title}</Table.Cell>
                <Table.Cell>{post.body}</Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </div>
  );
};
