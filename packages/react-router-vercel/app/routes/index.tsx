import { Link } from "react-router";

export const meta = () => {
  return [
    { title: "Index Page" },
    { name: "description", content: "React Router on Vercel!" },
  ];
};

export const dynamicRoutes = ["foo", "bar"];

export default function R() {
  return (
    <div>
      <h1>
        Index Page!
      </h1>
      <ul>
        {dynamicRoutes.map((route) => (
          <li key={route}>
            <Link to={`/things/${route}`}>{route}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
