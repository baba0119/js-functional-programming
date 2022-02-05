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

//
// p8 リスト1.2
//
var printMessage = run(console.log, repeat(2), h2, echo);

printMessage('Get Functional');

//
// p9
// アロー関数で書き変えた
//
console.log(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => Math.pow(num, 2))
);

//
// p23 リスト1.5
//
let enrollment = [
  {enrolled: 2, grade: 100},
  {enrolled: 2, grade: 80},
  {enrolled: 1, grade: 89}
];

_.chain(enrollment)
  .filter(student => student.enrolled > 1)
  .pluck('grade')
  .average()
  .value();