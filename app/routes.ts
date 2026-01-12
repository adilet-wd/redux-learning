import {type RouteConfig, index, route} from "@react-router/dev/routes";

export default [
        index("routes/home.tsx"),
        route("about-us", "pages/about-us/about.tsx"),
] satisfies RouteConfig;
