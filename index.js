const nearley = require("nearley");
const grammar = require("./grammar/grammar.js");
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

const parseInput = function (input) {
	try {
		parser.feed(input);

		return parser;
	} catch (error) {
		console.log(error);

		return error;
	}
};

module.exports = {
	parseInput,
};
