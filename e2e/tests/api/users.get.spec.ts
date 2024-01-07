import { test, expect } from "@playwright/test";

test.describe("Users GET", () => {
  test("should get user details", async ({ request }) => {
    const response = await request.get("https://reqres.in/api/users/2");
    expect(response.status()).toBe(200);
  });
});
