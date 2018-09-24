import Vue from "vue";
import VueMaterial from "vue-material";
import VueRouter from "vue-router";

import "./component-hooks";
import HeaderComponent from "./components/header";
import PortfolioRoutes from "./routers/portfolio";

Vue.use(VueRouter);
Vue.use(VueMaterial);

const router = new VueRouter({
    routes: PortfolioRoutes,
});

if (document.getElementById("app")) {
    // tslint:disable-next-line:no-unused-expression
    const v = new Vue({
        components: {
            "app-header": HeaderComponent,
        },
        el: "#app",
        router,
    });
}
