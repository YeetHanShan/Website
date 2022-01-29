var space = " ";
var speed = "150";
var pos = 0;
var msg = "Blooket ";
function Scroll() {
    document.title = msg.substring(pos, msg.length) + space + msg.substring(0,pos);
    pos++;
    if (pos > msg.length) pos = 0;
    window.setTimeout("Scroll()", speed);
  }
Scroll();