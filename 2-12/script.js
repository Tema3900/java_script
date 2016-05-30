'use strict';
/*
var question = prompt('What is the official name of JavaScript?');
if (question == 'EcmaScript')
    alert ('Yes!');
else
    alert ('Do not you know? EcmaScript!!!');

var num = prompt ('Enter the number?');
if (num > 0)
    alert ('1');
else if (num < 0)
    alert ('-1');
else
    alert ('0');
*/
/*
var userName = prompt('Login?');
if (userName == 'Admin'){
    var pass = prompt('Password?');
    if (pass == 'Black Overlord')
        alert('Welcome');
    else if (pass == null)
        alert('entry canceled');
    else
        alert('the password is incorrect');}
else if (userName == null)
     alert('entry canceled');
else
     alert('I do not know you');
*/
/*
var result;
result = (a + b < 4) ? 'few' : 'A lot of';
*/
var login = prompt('what is your name?');
var message = (login == 'Vasia') ? 'Hi!' :
    ( login == 'Director') ? 'Hello' :
        (login == '') ? 'No login':
            '';
alert (message);