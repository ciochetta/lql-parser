const { parseInput } = require("../index");

test("Parse basic command", () => {
	const testCommand = "insert users luis";

	const parsing = parseInput(testCommand);

	const result = parsing[0];

	expect(result.params.table).toBe("users");
	expect(result.params.document[0]).toBe("luis");
	expect(result.type).toBe("insert");
});

test("Parse command with multiple values", () => {
	const testCommand = "insert users luis admin123";

	const parsing = parseInput(testCommand);

	const result = parsing[0];

	expect(result.params.table).toBe("users");
	expect(result.params.document[0]).toBe("luis");
	expect(result.params.document[1]).toBe("admin123");
	expect(result.type).toBe("insert");
});

test("Parse command with object", () => {
	const testCommand = `insert users {"name":"luis", "password": "admin123" }`;

	const parsing = parseInput(testCommand);

	const result = parsing[0];

	expect(result.params.table).toBe("users");
	expect(result.params.document.name).toBe("luis");
	expect(result.params.document.password).toBe("admin123");
	expect(result.type).toBe("insert");
});

test("Parse bulk insert", () => {
	const testCommand = `bulk insert users [{"name":"luis", "password": "admin123" }, {"name":"afonso", "password": "123456" }]`;

	const parsing = parseInput(testCommand);

	const result = parsing[0];

	expect(result.params.table).toBe("users");
	expect(result.params.documents[0].name).toBe("luis");
	expect(result.params.documents[0].password).toBe("admin123");
	expect(result.params.documents[1].name).toBe("afonso");
	expect(result.params.documents[1].password).toBe("123456");
	expect(result.type).toBe("bulk insert");
});
