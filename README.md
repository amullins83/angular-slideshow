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
