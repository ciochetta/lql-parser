const { parseInput } = require("../index");

test("Parse update command", () => {
	const testCommand = "update users set name = luis where id = 1";

	const parsing = parseInput(testCommand);

	const result = parsing[0];

	expect(result.params.set[0].key).toBe("name");
	expect(result.params.set[0].value).toBe("luis");
	expect(result.params.where[0].key).toBe("id");
	expect(result.params.where[0].value).toBe("1");
	expect(result.params.table).toBe("users");
	expect(result.type).toBe("update");
});

test("Parse update command with multiple sets", () => {
	const testCommand =
		"update users set name = luis, password = admin123 where id = 1";

	const parsing = parseInput(testCommand);

	const result = parsing[0];

	expect(result.params.set[0].key).toBe("name");
	expect(result.params.set[0].value).toBe("luis");
	expect(result.params.set[1].key).toBe("password");
	expect(result.params.set[1].value).toBe("admin123");
	expect(result.params.where[0].key).toBe("id");
	expect(result.params.where[0].value).toBe("1");
	expect(result.params.table).toBe("users");
	expect(result.type).toBe("update");
});
