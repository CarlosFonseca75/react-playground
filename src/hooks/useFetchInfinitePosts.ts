import { useCallback, useState } from "react";

import { fetchPosts } from "@/services/postsApi";
import type { Post } from "@/types/post";
import { getErrorMessage } from "@/utils/getErrorMessage";

export const useFetchInfinitePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadPosts = useCallback(async (page: number) => {
    setIsLoading(true);
    setError(null);

    try {
      const { posts, total } = await fetchPosts(page);

      setPosts((currentPosts) =>
        page === 1 ? posts : [...currentPosts, ...posts],
      );

      setTotal(total);
    } catch (error) {
      console.error("Error", error);
      setError(getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  }, []);

  const hasMore = posts.length < total;

  return {
    posts,
    isLoading,
    error,
    loadPosts,
    hasMore,
  };
};
