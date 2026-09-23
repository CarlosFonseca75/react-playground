import { POSTS_PER_PAGE } from "@/constants/pagination";
import type { Post } from "@/types/post";

interface FetchPostsOutput {
  posts: Post[];
  total: number;
}

export const fetchPosts = async (page: number): Promise<FetchPostsOutput> => {
  const params = new URLSearchParams({
    _page: String(page),
    _limit: String(POSTS_PER_PAGE),
  });

  const url = `https://jsonplaceholder.typicode.com/posts?${params}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Something went wrong while fetching posts");
  }

  const posts: Post[] = await response.json();

  const total = Number(response.headers.get("X-Total-Count"));

  return { posts, total };
};
