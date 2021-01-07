const { parseInput } = require("../index");

test("Parse create index command", () => {
	const testCommand = "create index myIndex on users username";

	const parsing = parseInput(testCommand);

	const result = parsing[0];

	expect(result.params.name).toBe("myIndex");
	expect(result.params.table).toBe("users");
	expect(result.params.columns[0]).toBe("username");
	expect(result.type).toBe("create index");
});
