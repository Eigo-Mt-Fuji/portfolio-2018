import {  RouteConfig } from "vue-router";
import EntranceComponent from "../components/entrance";
import GuidepostComponent from "../components/guidepost";

const routes: RouteConfig[] = [

    {
        component: EntranceComponent,
        name: "entrance",
        path: "/",
    },
    {
        component: GuidepostComponent,
        path: "/guidepost",
    },
];
export default routes;
