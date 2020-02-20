import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Deneme from "@/components/Deneme";
import RacePage from "@/components/RacePage";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/deneme",
            name: "Deneme",
            component: Deneme,
        },
        {
            path: "/",
            name: "HelloWorld",
            component: HelloWorld,
        },
        {
            path: "/race",
            name: "race",
            component: RacePage,
        },
    ],
});
