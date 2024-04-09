import AboutView from "@/views/AboutView.vue"
import HomeView from "@/views/HomeView.vue"
import CarView from "@/views/CarView.vue"
import ContactView from "@/views/ContactView.vue";
import  { createRouter, createWebHistory } from "vue-router";
import FOFView from "@/views/FOFView.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:"/",
            name:"home",
            component: HomeView
        },
        {
            path:"/home",
            redirect: "/"
        },
        {
            path:"/about",
            name:"about",
            component: AboutView
        },
        {
            path:"/cars/:id",
            name:"cars",
            component: CarView,
            children:[
                {
                    path:"contact",
                    component: ContactView
                }
            ]
        },
        {
            path: "/:catchall(.*)*",
            name: "Not Found",
            component: FOFView
        }
    ]
})

export default router