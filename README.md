#AngularJS / Bootstrap Slide-show

###Objective

This project attempts to build a quick-and-dirty "slide" presenter,
where the slide contents could be simple text or arbitrary HTML. This
could act as a wrapper for a gallery of Angular applications or a static set of
slides.

###Usage

Include the listed dependencies, then `slideShow.js`, `slideShow.css`,
`slide-window.html`, and `slide.html` from here. You can implement your own
`slides` service to create a new slide source. The default service expects
`data/slides.json` to contain an array of objects containing the parameters
`title` and `uri`.

###Format for slides.json

 - `title`
   - String to be displayed in an `h3` element at the top of the slide
 - `uri`
   - String containing the uri of an HTML document to be loaded as the
     content of the slide. Angular interpolation can be performed, but
     angular modules must already be loaded by a script tag outside the
     `slide-show` element.

###Example

```json
[
  {
    "title":"Hey!"
    ,"uri":"content/hey.html"
  }
  ,{
    "title":"What?"
    ,"uri":"//example.com/what"
  }
]
```

###Header

A custom header can be added to be displayed over every slide. By default,
this is included from `content/header.html`, but the location can be set
using the `header-template` attribute on the `slide-show` directive. For
example:

```html
<slide-show header-template="my-header.html"></slide-show>
```

###Install

```bash
npm install
bower install
```

###Run tests

```bash
npm test
```

###Start automated testing

```bash
./node_modules/karma/bin/karma start karma.conf.js
grunt watch
```

###Host slides

```bash
npm start
```

###Node-Webkit

A separate `package.json` manifest is included in the `public` folder that
sets up a node-webkit window when the `nodewebkit` Grunt task is run. This
can be a handy way to port your slideshow to various systems. The task
is configured by default to build for Mac, Windows, and 64-bit Linux.
Other options are available. Check with
[the Node-Webkit project](https://github.com/rogerwang/node-webkit) and 
[the Node-Webkit grunt task page](https://github.com/mllrsohn/grunt-node-webkit-builder)
for details.
