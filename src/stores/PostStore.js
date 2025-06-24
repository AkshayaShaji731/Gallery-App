import axios from "axios";
import { defineStore } from "pinia";
import { API_URL, DISPLAY_CARDS_COUNT } from "@/constant";
import { ref, onMounted } from "vue";

export const usePostStore = defineStore('postStore', () => {
    const posts = ref([]);

    onMounted(async () =>{
        try {
            const response = await axios.get(API_URL);
            posts.value = response.data.filter(
                (item) => item.id <= DISPLAY_CARDS_COUNT
            );
        } catch (error) {
            console.error("Error fetching jobs", error);
        }
    }
    )
    return { posts }
})
