/*----- constants -----*/


/*----- app's state (variables) -----*/
let input, count;

/*----- cached element references -----*/
let inputVal = document.getElementById("input");
let countVal = document.getElementById("count");
let add = document.getElementById("add");
let subtract = document.getElementById("subtract");

/*----- event listeners -----*/
add.addEventListener('click', addVal);
subtract.addEventListener('click',subtractVal);


/*----- functions -----*/
initialize();

function initialize() {
  input = 1;
  count = 0;
  render();
};

function render() {
  document.getElementById("count").value = count;
  document.getElementById("input").value = input;
};

function addVal() {
  count += parseInt(inputVal.value);
  render();
};

function subtractVal() {
  count -= parseInt(inputVal.value);
  render();
};
