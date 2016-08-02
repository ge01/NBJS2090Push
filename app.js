/****************************************************
*                reverse, push, sort                *
****************************************************/
var bp = new Array("head", "shoulders", "knees", "toes");

document.write(bp + "<br>");
document.write(bp.reverse() + "<br>");
bp.push("tongue", "liver");
document.write(bp + "<br>");
bp.sort();

var string1 = bp.join();
document.write(string1);
