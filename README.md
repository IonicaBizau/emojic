[![emojic](http://i.imgur.com/bflsgPt.png)](#)

# emojic [![Support this project][donate-now]][paypal-donations]

Emoji in your Node.js command line apps.

In the screenshot below I'm using a Linux terminal emulator which doesn't support *colorful* emoji (in the way like OS X does).

[![emojic](http://i.imgur.com/o0DJDca.png)](#)

## Installation

```sh
$ npm i --save emojic
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
console.log(" " + colorIt(emojic.x).red() + " " + colorIt("Some red error appeared").redBg())
console.log(" " + colorIt(emojic.smiley).green() + " " + colorIt("I am a happy man!").greenBg().wetAsphalt())
// Note: ANSI styles will be used to color the output (see the screenshot)
// => ❌ Some red error appeared
// => 😃 I am a happy man
```

## Documentation

Require the library using `var emojic = require("emojic")`. Then you can use the camel case notation for the emoji names (like in the example). Visit [emoji.muan.co](http://emoji.muan.co) to search the icons.
For example, if you want to display in console `:heart_eyes:` (:heart_eyes:), you will use `console.log(emojic.heartEyes)` (notice the camelCaseStyle)

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Thanks
Thanks to [**@muan**](https://github.com/muan) for creating the [`emojilib`](https://github.com/muan/emojilib) project we use here. :sparkles:

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`tester`](https://github.com/IonicaBizau/tester#readme)

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md