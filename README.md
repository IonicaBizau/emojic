













![emojic](http://i.imgur.com/bflsgPt.png)




# emojic

Emoji in your Node.js command line apps.


![emojic](http://i.imgur.com/o0DJDca.png)



## Installation

```sh
$ npm i emojic
```









## Example






```js
// Dependencies
const emojic = require("emojic")
    , colorIt = require("color-it")
    ;

console.log(emojic.x + " Something went wrong");
// => ❌ Something went wrong

console.log(emojic.whiteCheckMark + " Success");
// => ✅ Success

// If you want to color the things a little bit
// ...using color-it (you can find it on github.com/IonicaBizau/node-color-it)
console.log(" " + colorIt(emojic.x).red() + " " + colorIt("Some red error appeared").redBg());
console.log(" " + colorIt(emojic.smiley).green() + " " + colorIt("I am a happy man!").greenBg().wetAsphalt());
// Note: ANSI styles will be used to color the output (see the screenshot)
// => ❌ Some red error appeared
// => 😃 I am a happy man

console.log(" " + colorIt(emojic.thumbsUp).green() + " " + colorIt("Thumbs up!").greenBg().wetAsphalt());
console.log(" " + colorIt(emojic.thumbsDown).green() + " " + colorIt("Thumbs down!").yellow());

```






## Documentation










## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].



## License
See the [LICENSE][license] file.


[license]: /LICENSE
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
