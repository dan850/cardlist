let data = [
  {
    name: 'Mateo',
    age: '30'
  },

  {
    name: 'Mateo',
    age: '30'
  },

  {
    name: 'Sarah',
    age: '32'
  },
  {
    name: 'John',
    age: '20'
  },
  {
    name: 'Tim',
    age: '27'
  },
  {
    name: 'Sam',
    age: '22'
  },
  {
    name: 'Joey',
    age: '34'
  }
];

const info = document.querySelector('#info');


let details = data.map(function(item) {
    let phrase 
  return '<div onclick="changeText(this)">Click on this text!>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>';
});

info.innerHTML = details.join('\n');


function changeText(id) {


    id.innerHTML = "thank you!";
  }