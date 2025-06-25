import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { API_URL, DISPLAY_CARDS_COUNT } from "@/constant";

export const usePostStore = defineStore('postStore', () => {
    const posts = ref([])
    const postValue = ref("")

    async function postFetch() {
        try {
            const response = await axios.get(API_URL);
            posts.value = response.data.filter((item) => item.id <= DISPLAY_CARDS_COUNT)
        } catch (error) {
            console.error("Error fetching jobs", error);
        }
    }

    async function postItemFetch() {
        const route = useRoute();
        const postItem = route.params.id;
        try {
            const response = await axios.get(API_URL);
            postValue.value = response.data.filter((item) => item.id == postItem);
        } catch (error) {
            console.error("Error fetching jobs", error);
        }
    }

    return { posts, postValue, postFetch, postItemFetch }
})
