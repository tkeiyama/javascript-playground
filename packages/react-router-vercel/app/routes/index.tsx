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
      <ul style={{ width: "fit-content" }}>
        {dynamicRoutes.map((route) => (
          <Link key={route} to={`/things/${route}`}>
            <li>{route}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
