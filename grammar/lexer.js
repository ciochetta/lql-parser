const moo = require("moo");

const raw_keywords = ["select", "from"];

let keywords_map = {};

for (const kw of raw_keywords) {
	keywords_map[`kw_${kw}`] = kw;
}

const case_insensitive_keywords = (map) => {
	const transform = moo.keywords(map);
	return (text) => transform(text.toUpperCase());
};

const lexer = moo.compile({
	keywords: raw_keywords,
	star: "*",
	ws: /[ \t]+/,
	number: /[0-9]+/,
	word: /[a-zA-Z]+/,
	wordNumber: /[a-zA-Z0-9]+/,
	quotationWord: /"[a-zA-Z]+"/,
	quotationWordNumber: /"[a-zA-Z0-9]+"/,
	lBracket: "[",
	rBracket: "]",
	comma: ",",
});

module.exports = lexer;
