import { Meta, Outlet } from "react-router";

export default function R() {
  return (
    <html lang="en">
      <head>
        <Meta />
      </head>
      <body>
        <Outlet />
      </body>
    </html>
  );
}
