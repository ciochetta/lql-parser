const { parseInput } = require("../index");

test("Parse delete command", () => {
	const testCommand = "delete from users where id = 2";

	const result = parseInput(testCommand);

	expect(result.params.where[0].key).toBe("id");
	expect(result.params.where[0].value).toBe("2");
	expect(result.params.table).toBe("users");
	expect(result.type).toBe("delete");
});
