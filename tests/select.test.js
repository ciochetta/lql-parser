const { parseInput } = require("../index");

test("Parse basic command", () => {
	const testCommand = "select * from users";

	const parsing = parseInput(testCommand);

	const result = parsing[0];

	expect(result.columns).toBe("star");
	expect(result.table).toBe("users");
	expect(result.type).toBe("select");
});

test("Parse command with a column", () => {
	const testCommand = "select name from users";

	const parsing = parseInput(testCommand);

	const result = parsing[0];

	expect(result.columns[0]).toBe("name");
	expect(result.table).toBe("users");
	expect(result.type).toBe("select");
});

test("Parse command with a quotation word as column", () => {
	const testCommand = `select "name" from users`;

	const parsing = parseInput(testCommand);

	const result = parsing[0];

	expect(result.columns[0]).toBe("name");
	expect(result.table).toBe("users");
	expect(result.type).toBe("select");
});

test("Parse command with an array word as columns", () => {
	const testCommand = `select ["name", "password"] from users`;

	const parsing = parseInput(testCommand);

	const result = parsing[0];

	console.log(JSON.stringify(result, 0, 1));

	expect(result.columns[0]).toBe("name");
	expect(result.columns[1]).toBe("password");
	expect(result.table).toBe("users");
	expect(result.type).toBe("select");
});
