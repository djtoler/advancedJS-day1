const piglatin = require("./piglatin.js");

describe("test pig latin", () => {
    test("test an apple case", () => {
        expect(translate("apple")).toBe("appleway");
    })
})