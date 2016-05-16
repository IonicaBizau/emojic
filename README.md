
[![emojic](http://i.imgur.com/bflsgPt.png)](#)

# emojic

 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/emojic.svg)](https://www.npmjs.com/package/emojic) [![Downloads](https://img.shields.io/npm/dt/emojic.svg)](https://www.npmjs.com/package/emojic) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Emoji in your Node.js command line apps.

In the screenshot below I'm using a Linux terminal emulator which doesn't support *colorful* emoji (in the way like OS X does).

[![emojic](http://i.imgur.com/o0DJDca.png)](#)

## :cloud: Installation

```sh
$ npm i --save emojic
```


## :clipboard: Example



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
// Note: On Linux, ANSI styles will be used to color the output (see the screenshot)
// => ❌ Some red error appeared
// => 😃 I am a happy man

console.log(" " + colorIt(emojic.thumbsUp).green() + " " + colorIt("Thumbs up!").greenBg().wetAsphalt());
console.log(" " + colorIt(emojic.thumbsDown).green() + " " + colorIt("Thumbs down!").yellow());
```

## :memo: Documentation

Require the library using `var emojic = require("emojic")`. Then you can use the camel case notation for the emoji names (like in the example). Visit [emoji.muan.co](http://emoji.muan.co) to search the icons.
For example, if you want to display in console `:heart_eyes:` (:heart_eyes:), you will use `console.log(emojic.heartEyes)` (notice the camelCaseStyle)

## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :cake: Thanks
Thanks to [**@muan**](https://github.com/muan) for creating the [`emojilib`](https://github.com/muan/emojilib) project we use here. :sparkles:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`emoji-logger`](https://github.com/IonicaBizau/emoji-logger#readme)—Logging library based on flat colors and Emoji.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
