//typescript code here...//
var firstVariable = "helloWorldChange";
console.log(firstVariable);
document.write(firstVariable);
//declaring the string variables//
var someOne = "sunil KR";
var otherName = "yogita DD";
//declaring the number date types//
var datebirth = 5 - 5 - 1993;
var dateOfBirth = 16 - 5 - 1993;
//declaring the boolean date types//
var isItLove = false;
var istLove = true;
// declaring array date types//
var long = ["jan", "feb", "mar"];
var dateWise = [10, 20, 30];
//declaring tuple //
//let x = [string,number];
var x = ["string", 100];
// declaring datetype any//
var iCanDeclareany;
iCanDeclareany = 5593;
iCanDeclareany = "yosu";
iCanDeclareany = true;
iCanDeclareany = ["very", 143, false];
//Functions typescript//
var add = function (x, y) {
    return x / y;
};
console.log(add(10, 20));
//optional parameter//
var optionalPara = function (x, y) {
    if (y) {
        return x * y;
    }
    else {
        return x * x;
    }
};
console.log(optionalPara(10));
//REST operator//
var party = function () {
    var school = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        school[_i] = arguments[_i];
    }
    console.log(school);
};
party("mmm", "nnn", "ooo");
