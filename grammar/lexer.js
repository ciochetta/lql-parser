const moo = require("moo");

const raw_keywords = ["select", "from", "using", "create", "where"];

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
	insert: "insert",
	like: "like",
	and: "and",
	star: "*",
	ws: /[ \t]+/,
	word: /[a-zA-Z0-9]+/,
	quotationWord: /"[a-zA-Z]+"/,
	quotationWordNumber: /"[a-zA-Z0-9]+"/,
	lBracket: "[",
	rBracket: "]",
	lcBracket: "{",
	rcBracket: "}",
	comma: ",",
	twoPoints: ":",
	equal: "=",
	bigger: ">",
	smaller: "<",
	biggerEqual: ">=",
	smallerEqual: "<=",
});

module.exports = lexer;
