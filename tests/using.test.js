const { parseInput } = require("../index");

test("Parse basic command", () => {
	const testCommand = "using myDb";

	const result = parseInput(testCommand);

	expect(result.params).toBe("myDb");
	expect(result.type).toBe("using");
});
