//
// p6
//
document.querySelector('#msg').innerHTML = '<h1>Hello World</h1>';

//
// p7
//
function printMessage(elementId, format, message) {
  document.querySelector(`#${elementId}`).innerHTML =
   `<${format}>${message}</${format}>`
}
printMessage('msg', 'h1', 'Hello World');

//
// p7 リスト1.1
//
var printMessage = run(addToDom('msg'), h1, echo);

printMessage('Hello World');
