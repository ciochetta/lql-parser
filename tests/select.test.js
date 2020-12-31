const { parseInput } = require("../index");

test("Parse basic command", () => {
	const testCommand = "select * from users";

	const parsing = parseInput(testCommand);

	const result = parsing[0];

	expect(result.params.columns).toBe("star");
	expect(result.params.table).toBe("users");
	expect(result.type).toBe("select");
});

test("Parse command with a column", () => {
	const testCommand = "select name from users";

	const parsing = parseInput(testCommand);

	const result = parsing[0];

	expect(result.params.columns[0]).toBe("name");
	expect(result.params.table).toBe("users");
	expect(result.type).toBe("select");
});

test("Parse command with a quotation word as column", () => {
	const testCommand = `select "name" from users`;

	const parsing = parseInput(testCommand);

	const result = parsing[0];

	expect(result.params.columns[0]).toBe("name");
	expect(result.params.table).toBe("users");
	expect(result.type).toBe("select");
});

test("Parse command with an array word as columns", () => {
	const testCommand = `select ["name", "password"] from users`;

	const parsing = parseInput(testCommand);

	const result = parsing[0];

	expect(result.params.columns[0]).toBe("name");
	expect(result.params.columns[1]).toBe("password");
	expect(result.params.table).toBe("users");
	expect(result.type).toBe("select");
});
