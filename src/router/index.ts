import { createRouter, createWebHistory } from "vue-router";

import aboutPage from "@/pages/AboutPage.vue";
import galleryPage from "@/pages/GalleryPage.vue";
import homepage from "@/pages/HomePage.vue";
import PostItem from "@/pages/PostItem.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: homepage,
    },

    {
      path: "/about",
      name: "about",
      component: aboutPage,
    },
    {
      path: "/gallery",
      name: "gallery",
      component: galleryPage,
    },
    {
      path: "/postItem/:id",
      name: "postItem",
      component: PostItem,
    },
  ],
});

export default router;
