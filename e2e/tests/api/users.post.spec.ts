import { test, expect } from "@playwright/test";

test.describe("Users POST", () => {
  test("should create new user", async ({ request }) => {
    const response = await request.post("https://reqres.in/api/users", {
      data: {
        name: "morpheus",
        job: "leader",
      },
    });
    const responseBody = await response.json();
    expect(response.status()).toBe(201);
    expect(responseBody).toStrictEqual(
      expect.objectContaining({
        name: "morpheus",
        job: "leader",
        id: expect.any(String),
        createdAt: expect.any(String),
      })
    );
  });
});
