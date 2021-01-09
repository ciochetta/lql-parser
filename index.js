const nearley = require("nearley");
const grammar = require("./grammar/grammar.js");
const parser = function () {
	return new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
};

const parseInput = function (input) {
	try {
		let thisParser = parser();

		thisParser.feed(input);

		const results = thisParser.finish();

		const statement = results[0];

		return statement;
	} catch (error) {
		console.log(error);

		return error;
	}
};

module.exports = {
	parseInput,
};
