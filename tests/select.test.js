const { parseInput } = require("../index");

test("Parse basic command", () => {
	const testCommand = "select * from users";

	const result = parseInput(testCommand);

	expect(result.params.columns).toBe("star");
	expect(result.params.table).toBe("users");
	expect(result.type).toBe("select");
});

test("Parse command with a column", () => {
	const testCommand = "select name from users";

	const result = parseInput(testCommand);

	expect(result.params.columns[0]).toBe("name");
	expect(result.params.table).toBe("users");
	expect(result.type).toBe("select");
});

test("Parse command with a quotation word as column", () => {
	const testCommand = `select "name" from users`;

	const result = parseInput(testCommand);

	expect(result.params.columns[0]).toBe("name");
	expect(result.params.table).toBe("users");
	expect(result.type).toBe("select");
});

test("Parse command with an array word as columns", () => {
	const testCommand = `select ["name", "password"] from users`;

	const result = parseInput(testCommand);

	expect(result.params.columns[0]).toBe("name");
	expect(result.params.columns[1]).toBe("password");
	expect(result.params.table).toBe("users");
	expect(result.type).toBe("select");
});

test("Parse command with where clause", () => {
	const testCommand = "select * from users where id = 1";

	const result = parseInput(testCommand);

	expect(result.params.columns).toBe("star");
	expect(result.params.table).toBe("users");
	expect(result.type).toBe("select");
	expect(result.params.where[0].key).toBe("id");
	expect(result.params.where[0].value).toBe("1");
	expect(result.params.where[0].operator).toBe("equal");
});

test("Parse command with two where clauses", () => {
	const testCommand = "select * from users where id = 1 and name like afonso";

	const result = parseInput(testCommand);

	expect(result.params.columns).toBe("star");
	expect(result.params.table).toBe("users");
	expect(result.type).toBe("select");
	expect(result.params.where[0].key).toBe("id");
	expect(result.params.where[0].value).toBe("1");
	expect(result.params.where[0].operator).toBe("equal");
	expect(result.params.where[1].key).toBe("name");
	expect(result.params.where[1].value).toBe("afonso");
	expect(result.params.where[1].operator).toBe("like");
});

test("Parse command with three where clauses", () => {
	const testCommand =
		"select * from users where id = 1 and name like afonso and password < 2";

	const result = parseInput(testCommand);

	expect(result.params.columns).toBe("star");
	expect(result.params.table).toBe("users");
	expect(result.type).toBe("select");
	expect(result.params.where[0].key).toBe("id");
	expect(result.params.where[0].value).toBe("1");
	expect(result.params.where[0].operator).toBe("equal");
	expect(result.params.where[1].key).toBe("name");
	expect(result.params.where[1].value).toBe("afonso");
	expect(result.params.where[1].operator).toBe("like");
	expect(result.params.where[2].key).toBe("password");
	expect(result.params.where[2].value).toBe("2");
	expect(result.params.where[2].operator).toBe("smaller");
});
