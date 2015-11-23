// Dependencies
const emojisPath = require.resolve("emojilib/emojis.json")
    , rJson = require("r-json")
    , camelo = require("camelo")
    , iterateObject = require("iterate-object")
    , emojis = rJson(emojisPath)
    ;

// Export the emojic object
var emojic = module.exports = {};

// Append the chars to it
iterateObject(emojis, function (value, name) {
    if (name === "keys" || !value.char) { return; }
    emojic[camelo(name)] = value.char;
});

// Free the memory
emojis = null;
