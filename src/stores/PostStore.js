import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

import { API_URL, DISPLAY_CARDS_COUNT } from "@/constant";

export const usePostStore = defineStore('postStore', () => {
    const posts = ref([])

    async function postFetch() {
        try {
            const response = await axios.get(API_URL);
            const data = response.data;
            posts.value = data.filter((item) => item.id <= DISPLAY_CARDS_COUNT)
        } catch (error) {
            console.error("Error fetching jobs", error);
        }
    }

    return { posts, postFetch }
})
