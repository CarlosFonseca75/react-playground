import { useEffect, useRef, useState } from "react";

import { Table } from "@/components/Table/Table";
import { useFetchInfinitePosts } from "@/hooks/useFetchInfinitePosts";

import styles from "./InfiniteScroll.module.scss";

const LoadingRow = () => (
  <Table.Row>
    <Table.Cell>Loading...</Table.Cell>
    <Table.Cell>Loading...</Table.Cell>
    <Table.Cell>Loading...</Table.Cell>
    <Table.Cell>Loading...</Table.Cell>
  </Table.Row>
);

const ErrorRow = ({ message }: { message: string }) => (
  <Table.Row>
    <Table.Cell>{message}</Table.Cell>
  </Table.Row>
);

export const InfiniteScroll = () => {
  const [page, setPage] = useState<number>(1);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const { posts, isLoading, error, loadPosts, hasMore } =
    useFetchInfinitePosts();

  useEffect(() => {
    loadPosts(page);
  }, [loadPosts, page]);

  useEffect(() => {
    const sentinel = sentinelRef.current;

    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting && hasMore && !isLoading) {
          setPage((currentPage) => currentPage + 1);
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, [hasMore, isLoading]);

  return (
    <div className={styles.page}>
      <h1>Infinite Scroll</h1>

      <Table>
        <Table.Header columns={["ID", "User ID", "Title", "Body"]} />

        <Table.Body>
          {posts.map((post) => (
            <Table.Row key={post.id}>
              <Table.Cell>{post.id}</Table.Cell>
              <Table.Cell>{post.userId}</Table.Cell>
              <Table.Cell>{post.title}</Table.Cell>
              <Table.Cell>{post.body}</Table.Cell>
            </Table.Row>
          ))}

          {isLoading && <LoadingRow />}

          {error && <ErrorRow message={error} />}
        </Table.Body>
      </Table>

      <div ref={sentinelRef} className={styles.sentinel} />
    </div>
  );
};
