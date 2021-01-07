import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import goTo from "vuetify/es5/services/goto";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "home",
        component: Home,
        meta: {
            requiresAuth: false
        }
    },
    {
        path: "/login",
        name: "login",
        component: () =>
            import ("../views/Login.vue"),
        meta: {
            requiresAuth: false
        }
        // afterEach: (to, from, next) => {
        //     let isAuthenticated = store.getters.authenticated;
        //     if (isAuthenticated) next({ name: "profile" });
        //     else next();
        // }
    },
    {
        path: "/:uid/profile",
        name: "profile",
        props: true,
        component: () =>
            import ("../views/Profile.vue"),
        meta: {
            requiresAuth: true
        },
        beforeEnter: (to, from, next) => {
            let isAuthenticated = store.getters.authenticated;
            if (!isAuthenticated) next({ name: "login" });
            else next();
        }
    },
    {
        path: "/about",
        name: "about",
        component: () =>
            import ("../views/About.vue"),
        meta: {
            requiresAuth: false
        }
    },

    {
        path: "*",
        name: "404",
        component: () =>
            import ("../views/NotFound.vue")
    }
];

let scrollBehavior = (to, from, savedPosition) => {
    let scrollTo = 0;

    if (to.hash) scrollTo = to.hash;
    else if (savedPosition) scrollTo = savedPosition.y;

    return goTo(scrollTo);
};

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    scrollBehavior,
    routes
});

export default router;