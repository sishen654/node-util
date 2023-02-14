import getLocalIPV4 from "@src/getLocalIPV4"

describe("getLocalIPV4", () => {
  test("it works normal", () => {
    expect(getLocalIPV4()).toBeTypeOf("string")
    expect(getLocalIPV4().split(".").length).toEqual(4)
  })
})
