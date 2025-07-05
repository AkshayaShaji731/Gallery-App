import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { API_URL } from "@/constant";
import type { Post } from "@/types/Posts";

export const usePostStore = defineStore(
  "postStore",
  () => {
    const posts = ref<Post[]>([]);

    const updatePosts = (post: Post[]) => (posts.value = post);

    const fetchPosts = async () => {
      try {
        const response = await axios.get(API_URL);
        const data = response.data;

        return data;
      } catch (error) {
        console.error("Error fetching jobs", error);
      }
    };

    const getPostByID = (postId: string) =>
      posts.value.find((item: Post) => item.id === Number(postId));

    const latestPosts = () =>
      posts.value.filter((post: Post) => post.id >= posts.value.length - 9);

    return { fetchPosts, getPostByID, latestPosts, posts, updatePosts };
  },
  {
    persist: true,
  }
);
