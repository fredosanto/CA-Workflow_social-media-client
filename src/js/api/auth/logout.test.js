import { logout } from "./logout.js";
import { localStorageMock } from "../../storage/localStorageMock.js";

global.localStorage = new localStorageMock();
const MOCKUP_TOKEN = "token1234";
const MOCKUP_USER = {
  email: "mockup@email.com",
  password: "mockPassword",
  token: MOCKUP_TOKEN,
  value: "tokenValue",
};

describe("Logout", () => {
  it("should clear local storage when logout", async () => {
    const tokenKey = "token";
    const tokenValue = MOCKUP_TOKEN;
    const profileKey = "profile";
    const profileValue = JSON.stringify(MOCKUP_USER);

    global.localStorage.setItem(tokenKey, tokenValue);
    global.localStorage.setItem(profileKey, profileValue);

    logout();
    expect(global.localStorage.getItem("token")).toBeNull();
    expect(global.localStorage.getItem("profile")).toBeNull();
  });
});
