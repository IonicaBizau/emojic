// Dependencies
const clicons = require("../lib")
    , colorIt = require("color-it")
    ;

console.log(clicons.x + " Something went wrong");
// => ❌ Something went wrong

console.log(clicons.whiteCheckMark + " Success");
// => ✅ Success

// If you want to color the things a little bit
// ...using color-it (you can find it on github.com/IonicaBizau/node-color-it)
console.log(" " + colorIt(clicons.x).red() + " " + colorIt("Some red error appeared").redBg())
console.log(" " + colorIt(clicons.smiley).green() + " " + colorIt("I am a happy man!").greenBg().wetAsphalt())
// Note: ANSI styles will be used to color the output (see the screenshot)
// => ❌ Some red error appeared
// => 😃 I am a happy man
