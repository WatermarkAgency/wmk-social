import { wmkClass } from "./logic";

test("result className string should be `wmk-group wmk-group-name`", () => {
  expect(wmkClass("name", "group")).toEqual("wmk-group wmk-group-name");
});
