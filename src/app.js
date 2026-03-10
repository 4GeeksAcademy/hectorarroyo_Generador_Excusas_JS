import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here


  const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  const action = ['ate', 'peed', 'crushed', 'broke'];
  const what = ['my homework', 'my phone', 'the car'];
  const when = [
    'before the class',
    'when I was sleeping',
    'while I was exercising',
    'during my lunch',
    'while I was praying'
  ];

  function generadorDeExcusas() {

    let whoRandom = Math.floor(Math.random() * who.length);
    let actionRandom = Math.floor(Math.random() * action.length);
    let whatRandom = Math.floor(Math.random() * what.length);
    let whenRandom = Math.floor(Math.random() * when.length);

    return `${who[whoRandom]}${action[actionRandom]}${what[whatRandom]} ${when[whenRandom]}`;
  }

  let excusa = generadorDeExcusas();
  document.getElementById("excuse").innerHTML = excusa;



};


