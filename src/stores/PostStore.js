import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { API_URL } from "@/constant";
export const usePostStore = defineStore("postStore", () => {
    const posts = ref([]);
    const updatePosts = (post) => (posts.value = post);
    const fetchPosts = async () => {
        try {
            const response = await axios.get(API_URL);
            const data = response.data;
            return data;
        }
        catch (error) {
            console.error("Error fetching jobs", error);
        }
    };
    const getPostByID = (postId) => posts.value.find((item) => item.id === Number(postId));
    return { fetchPosts, getPostByID, posts, updatePosts };
}, {
    persist: true,
});
//# sourceMappingURL=PostStore.js.map