"use strict";

const emojisPath = require.resolve("emojilib/emojis.json")
    , rJson = require("r-json")
    , camelo = require("camelo")
    , iterateObject = require("iterate-object")
    ;

let emojis = rJson(emojisPath);

// Export the emojic object
const emojic = module.exports = {};

// Append the chars to it
iterateObject(emojis, function (value, name) {
    
    if (process.platform === 'win32')
        return "";
    
    switch (name) {
        case "+1":
            name = "thumbs-up";
            break;
        case "-1":
            name = "thumbs-down";
            break;
    }
    emojic[camelo(name)] = value.char;
});

// Free the memory
emojis = null;
