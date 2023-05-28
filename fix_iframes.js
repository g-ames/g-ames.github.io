// Get all the iframes on the page
var iframes = document.getElementsByTagName('iframe');

// Loop through each iframe and set width and height to 100%
for (var i = 0; i < iframes.length; i++) {
  var iframe = iframes[i];
  iframe.style.width = '100%';
  iframe.style.height = '100%';
}
