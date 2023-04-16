import { login } from "./login.js";
import { localStorageMock } from "../../storage/localStorageMock.js";

global.localStorage = new localStorageMock();

const MOCKUP_TOKEN = "token1234";

const MOCKUP_USER = {
  email: "mockup@email.com",
  password: "mockPassword",
  token: MOCKUP_TOKEN,
  value: "tokenValue",
};

function mockupLoginSuccess() {
  return Promise.resolve({
    ok: "true",
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve(MOCKUP_USER),
  });
}

describe("Login", () => {
  it("should fetch and store a token in storage", async () => {
    global.localStorage.clear();
    global.fetch = jest.fn(() => mockupLoginSuccess());
    const data = await login(MOCKUP_USER.email, MOCKUP_USER.password);
    global.localStorage.setItem("token", data.token);
    global.localStorage.setItem("profile", JSON.stringify(data));
    expect(global.localStorage.getItem("token")).toEqual(data.token);
    expect(global.localStorage.getItem("profile")).toEqual(
      JSON.stringify(MOCKUP_USER)
    );
  });
});
