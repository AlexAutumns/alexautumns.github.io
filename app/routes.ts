import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("projects", "routes/Projects.tsx"),
    route("about", "routes/About.tsx"),
] satisfies RouteConfig;
