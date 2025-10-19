import { index, route, RouteConfig } from "@react-router/dev/routes";

export default [
  index("./routes/index.tsx"),
  route("/things/:thing", "./routes/thing.tsx"),
] satisfies RouteConfig;
