import { useCallback, useState } from "react";

import { POSTS_PER_PAGE } from "@/constants/pagination";
import { fetchPosts } from "@/services/postsApi";
import type { Post } from "@/types/post";
import { getErrorMessage } from "@/utils/getErrorMessage";

export const useFetchPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadPosts = useCallback(async (page: number) => {
    setIsLoading(true);
    setError(null);

    try {
      const { posts, total } = await fetchPosts(page);

      const totalPages = Math.ceil(total / POSTS_PER_PAGE);

      setPosts(posts);
      setTotalPages(totalPages);
    } catch (error) {
      console.error("Error", error);
      setError(getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    posts,
    isLoading,
    error,
    loadPosts,
    totalPages,
  };
};
