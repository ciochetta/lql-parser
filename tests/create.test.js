const { parseInput } = require("../index");

test("Parse basic command", () => {
	const testCommand = "create users username";

	const parsing = parseInput(testCommand);

	const result = parsing[0];

	expect(result.params.table).toBe("users");
	expect(result.params.columns[0]).toBe("username");
	expect(result.type).toBe("create");
});

test("Parse command with string", () => {
	const testCommand = `create users "username"`;

	const parsing = parseInput(testCommand);

	const result = parsing[0];

	expect(result.params.table).toBe("users");
	expect(result.params.columns[0]).toBe("username");
	expect(result.type).toBe("create");
});

test("Parse command with space separated array", () => {
	const testCommand = `create users username password`;

	const parsing = parseInput(testCommand);

	const result = parsing[0];

	expect(result.params.table).toBe("users");
	expect(result.params.columns[0]).toBe("username");
	expect(result.params.columns[1]).toBe("password");
	expect(result.type).toBe("create");
});

test("Parse command with regular array", () => {
	const testCommand = `create users ["username", "password"]`;

	const parsing = parseInput(testCommand);

	const result = parsing[0];

	expect(result.params.table).toBe("users");
	expect(result.params.columns[0]).toBe("username");
	expect(result.params.columns[1]).toBe("password");
	expect(result.type).toBe("create");
});
