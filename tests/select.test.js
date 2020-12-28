const { parseInput } = require("../index");

test("Parse basic command", () => {
	const testCommand = "select * from users";

	const parsing = parseInput(testCommand);

	const result = parsing.results[0][0];

	console.log(parsing);

	console.log(JSON.stringify(result, null, 1));

	expect(result.length).toBe(7);
});
