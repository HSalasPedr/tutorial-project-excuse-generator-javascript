// excuses
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
let sentenceParts = [who, action, what, when]

// function
function generate_excuse () {
    outExcuse = "";
    for (element in sentenceParts) {
        outExcuse += sentenceParts[element][Math.floor(Math.random() * sentenceParts[element].length)] + " ";
    }
    return outExcuse
}

// run function upon reload
window.onload = function() {
  const displayedExcuse = generate_excuse();
  document.getElementById("excuse").textContent = displayedExcuse;
};

// const displayedExcuse = generate_excuse();
// document.getElementById("excuse").innerHTML = displayedExcuse;
