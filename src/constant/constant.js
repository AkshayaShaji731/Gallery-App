import { ref } from "vue";

export const POST_IMAGE = "https://fastly.picsum.photos/id/488/200/200.jpg?hmac=V8mvdG1ON09kNw80-qS00BSFq5gGhqRYoYPJftrsYA8";
export const POST = ref([]);
export const API_BASE = 'https://jsonplaceholder.typicode.com/photos'
export const SEARCH_INPUT = ref("")
export const NAV_TITLE = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "Gallery",
        path: "/gallery",
    },
    {
        title: "About",
        path: "/about",
    },
];
export const CARD_NUM=40