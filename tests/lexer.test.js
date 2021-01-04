const lexer = require("../grammar/lexer");

test("tokenize a command", () => {
	const testCommand = "select * from users";

	lexer.reset(testCommand);

	let selectToken = lexer.next();

	expect(selectToken.type).toBe("select");

	let wsToken = lexer.next();

	expect(wsToken.type).toBe("ws");

	let starToken = lexer.next();

	expect(starToken.type).toBe("star");

	lexer.next();

	let fromToken = lexer.next();

	expect(fromToken.type).toBe("from");

	lexer.next();

	let usersToken = lexer.next();

	expect(usersToken.type).toBe("word");
});

test("tokenize second command from selct tests", () => {
	const testCommand = "select name from users";

	lexer.reset(testCommand);

	lexer.next();
	lexer.next();
	const starToken = lexer.next();

	expect(starToken.type).toBe("word");
});

test("tokenize string with quotation marks", () => {
	const testCommand = `"test"`;

	lexer.reset(testCommand);

	const token = lexer.next();

	expect(token.type).toBe("quotationWord");
});

test("tokenize string array", () => {
	const testCommand = `["test", "anotherTest"]`;

	lexer.reset(testCommand);

	lexer.next();

	const wordToken = lexer.next();

	expect(wordToken.type).toBe("quotationWord");

	const separatorToken = lexer.next();

	expect(separatorToken.type).toBe("comma");
});

test("tokenize string with numbers", () => {
	const testCommand = `admin123`;

	lexer.reset(testCommand);

	const token = lexer.next();

	expect(token.type).toBe("word");

	expect(token.value).toBe("admin123");
});
