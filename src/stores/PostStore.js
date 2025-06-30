import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { API_URL } from "@/constant";

export const usePostStore = defineStore('postStore', () => {
    const posts = ref([])

    const updatePost = (data) => {
        posts.value = data;
    }

    async function postFetch() {
        try {
            const response = await axios.get(API_URL);
            const data = response.data;

            return data;

        } catch (error) {
            console.error("Error fetching jobs", error);
        }
    }

    return { posts, postFetch, updatePost }
},
    {
        persist: true,
    }
)
