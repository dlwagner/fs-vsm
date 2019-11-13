import Vue from "vue";
import Router from "vue-router";
import UsersList from "./components/UsersList.vue";
import User from "./components/User.vue";
import { truncate } from "fs";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "users",
            alias: "/user",
            component: UsersList,
            children: [
                {
                    path: "/user/:id",
                    name: "user-details",
                    component: User,
                    props: true
                }
            ]
        },
        {
            path: "/add",
            name: "add",
            component: AddUser
        }
    ]
});
