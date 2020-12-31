const { parseInput } = require("../index");

test("Parse basic command", () => {
	const testCommand = "using myDb";

	const parsing = parseInput(testCommand);

	const result = parsing[0];

	expect(result.params).toBe("myDb");
	expect(result.type).toBe("using");
});
