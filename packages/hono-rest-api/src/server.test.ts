import { describe, expect, it } from "vitest";
import app from "./server";

const baseUrl = "http://localhost:8787";
const getRequestUrl = (path: `/${string}`) => `${baseUrl}${path}`;

describe("GET /", () => {
  it("gets a response", async () => {
    const response = await app.request(getRequestUrl("/"));
    expect(response.status).toBe(200);
    expect(response.headers.get("x-powered-by")).toBe("Hono");

    const body = await response.json();
    expect(body).toStrictEqual({ hello: "world!" });
  });
});

describe("POST /", () => {
  it("sends a json body and gets a response with the same body", async () => {
    const request = new Request(getRequestUrl("/"), {
      method: "POST",
      body: JSON.stringify({ hello: "world!" }),
    });
    const response = await app.request(request);

    const body = await response.json();
    expect(body).toStrictEqual({ hello: "world!" });
  });
});

describe("GET /u/:id", () => {
  it("requests to /1 and gets 1 as id", async () => {
    const response = await app.request("/u/1");

    const body = await response.json();
    expect(body).toStrictEqual({ id: "1" });
  });
});

describe("/all", () => {
  it("requests to GET /all and gets HTTP Status Code 200", async () => {
    const response = await app.request(getRequestUrl("/all"));

    expect(response.status).toBe(200);
    const body = await response.json();
    expect(body).toStrictEqual({ hello: "all!" });
  });

  it("requests to POST /all and gets HTTP Status Code 200", async () => {
    const request = new Request(getRequestUrl("/all"), {
      method: "POST",
    });
    const response = await app.request(request);

    expect(response.status).toBe(200);
    const body = await response.json();
    expect(body).toStrictEqual({ hello: "all!" });
  });

  it("requests to PATCH /all and gets HTTP Status Code 200", async () => {
    const request = new Request(getRequestUrl("/all"), {
      method: "PATCH",
    });
    const response = await app.request(request);

    expect(response.status).toBe(200);
    const body = await response.json();
    expect(body).toStrictEqual({ hello: "all!" });
  });

  it("requests to DELETE /all and gets HTTP Status Code 200", async () => {
    const request = new Request(getRequestUrl("/all"), {
      method: "DELETE",
    });
    const response = await app.request(request);

    expect(response.status).toBe(200);
    const body = await response.json();
    expect(body).toStrictEqual({ hello: "all!" });
  });
});
