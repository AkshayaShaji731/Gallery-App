import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { API_URL } from "@/constant";

export const usePostStore = defineStore('postStore', () => {
    const posts = ref([]);

    const updatePosts = (posts) => {
        posts.value = posts;
    }

    const fetchPosts = async () => {
        try {
            const response = await axios.get(API_URL);
            const data = response.data;

            return data;

        } catch (error) {
            console.error("Error fetching jobs", error);
        }
    }

    const getPostByID = (postId) => {
        return posts.value.find((item) => item.id == postId);
    }

    return { posts, fetchPosts, updatePosts, getPostByID }
},
    {
        persist: true,
    }
)
